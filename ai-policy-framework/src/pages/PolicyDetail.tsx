import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { policies } from "@/data/policies";
import { policyExcerpts } from "@/data/policyExcerpts";
import { getBenchmarkForPolicy, MODEL_COLORS } from "@/data/llmBenchmarks";
import { PolicyRadarChart } from "@/components/PolicyRadarChart";
import { CategoryRadarChart } from "@/components/CategoryRadarChart";
import { PolicyCard } from "@/components/PolicyCard";
import { Shield, Lock, Scale, Users, Factory, ArrowLeft, CheckCircle2, FileText, Quote, Expand } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { POLICY_ATTRIBUTES } from "@/types/policy";
import { categoryCriteria } from "@/data/categoryCriteria";
import { criterionScores } from "@/data/criterionScores";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { LLMBenchmarkEntry, BillBenchmark } from "@/data/llmBenchmarks";

const iconMap = {
  "National Security": Shield,
  "Safety & Security": Lock,
  "Antitrust": Scale,
  "Civil & Human Rights": Users,
  "Industrial Policy": Factory,
};

const colorMap = {
  "National Security": "bg-[hsl(var(--chart-1))]",
  "Safety & Security": "bg-[hsl(var(--chart-2))]",
  "Antitrust": "bg-[hsl(var(--chart-3))]",
  "Civil & Human Rights": "bg-[hsl(var(--chart-4))]",
  "Industrial Policy": "bg-[hsl(var(--chart-5))]",
};

const chartColorMap: Record<string, string> = {
  "National Security": "hsl(var(--chart-1))",
  "Safety & Security": "hsl(var(--chart-2))",
  "Antitrust": "hsl(var(--chart-3))",
  "Civil & Human Rights": "hsl(var(--chart-4))",
  "Industrial Policy": "hsl(var(--chart-5))",
};

// Helper function to generate radar data for a specific category
const getCategoryRadarData = (policyId: string, category: string) => {
  const policyScores = criterionScores[policyId];
  const categoryScores = policyScores?.[category];
  const categoryDef = categoryCriteria.find(c => c.category === category);
  
  if (!categoryScores || !categoryDef) return [];
  
  return categoryDef.criteria.map(criterion => ({
    subject: criterion.name,
    value: categoryScores[criterion.name] || 0,
    fullMark: 100,
  }));
};

const BENCH_DIMENSIONS = [
  "Antitrust",
  "Industrial Policy",
  "National Security",
  "Civil & Human Rights",
  "Safety & Security",
] as const;

function BenchModelRadar({ entry, color }: { entry: LLMBenchmarkEntry; color: string }) {
  const data = BENCH_DIMENSIONS.map((dim) => ({
    subject: dim,
    value: entry.scores[dim],
    fullMark: 100,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
        <PolarGrid stroke="hsl(var(--border))" strokeWidth={1} />
        <PolarAngleAxis
          dataKey="subject"
          tick={{ fill: 'hsl(var(--foreground))', fontSize: 10, fontWeight: 500 }}
          tickLine={false}
        />
        <PolarRadiusAxis
          angle={90}
          domain={[0, 100]}
          tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
          axisLine={false}
          tickCount={5}
        />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              const d = payload[0].payload;
              return (
                <div className="bg-popover border rounded-lg p-3 shadow-lg">
                  <p className="font-medium text-sm text-foreground">{d.subject}</p>
                  <p className="text-sm text-muted-foreground">Score: {d.value}</p>
                </div>
              );
            }
            return null;
          }}
        />
        <Radar
          name={entry.model}
          dataKey="value"
          stroke={color}
          fill={color}
          fillOpacity={0.3}
          strokeWidth={2}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

function BenchOverlayChart({ bill }: { bill: BillBenchmark }) {
  const mergedData = BENCH_DIMENSIONS.map((dim) => {
    const point: Record<string, string | number> = { subject: dim, fullMark: 100 };
    bill.models.forEach((m) => {
      point[m.model] = m.scores[dim];
    });
    return point;
  });

  return (
    <ResponsiveContainer width="100%" height={450}>
      <RadarChart cx="50%" cy="50%" outerRadius="65%" data={mergedData}>
        <PolarGrid stroke="hsl(var(--border))" strokeWidth={1.5} />
        <PolarAngleAxis
          dataKey="subject"
          tick={{ fill: 'hsl(var(--foreground))', fontSize: 12, fontWeight: 600 }}
          tickLine={false}
          dy={-10}
        />
        <PolarRadiusAxis
          angle={90}
          domain={[0, 100]}
          tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
          axisLine={false}
        />
        {bill.models.map((m) => (
          <Radar
            key={m.model}
            name={m.model}
            dataKey={m.model}
            stroke={MODEL_COLORS[m.model]}
            fill={MODEL_COLORS[m.model]}
            fillOpacity={0.08}
            strokeWidth={2}
          />
        ))}
        <Legend
          wrapperStyle={{ paddingTop: '20px', fontSize: '12px' }}
          iconType="circle"
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

function BenchmarkSection({ policyId }: { policyId: string }) {
  const benchmark = getBenchmarkForPolicy(policyId);
  if (!benchmark) return null;

  return (
    <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.7s" }}>
      <h2 className="text-3xl font-bold mb-2 pb-1">LLM Benchmark Results</h2>
      <p className="text-muted-foreground mb-6">
        How different LLMs scored this bill across the five framework dimensions.
      </p>

      <Card className="border-2 shadow-lg mb-8">
        <CardHeader>
          <CardTitle>All Models Overlay</CardTitle>
          <CardDescription>
            Comparison of all LLM benchmark scores on this bill
          </CardDescription>
        </CardHeader>
        <CardContent>
          <BenchOverlayChart bill={benchmark} />
        </CardContent>
      </Card>

      <h3 className="text-2xl font-bold mb-4">Individual Model Results</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {benchmark.models.map((entry) => {
          const color = MODEL_COLORS[entry.model];
          const avg = Object.values(entry.scores).reduce((a, b) => a + b, 0) / 5;
          return (
            <Card key={entry.model} className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                  <CardTitle className="text-base">{entry.model}</CardTitle>
                </div>
                <CardDescription>Avg: {avg.toFixed(1)} / 100</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <BenchModelRadar entry={entry} color={color} />
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-2 text-xs text-muted-foreground">
                  {BENCH_DIMENSIONS.map((dim) => (
                    <div key={dim} className="flex justify-between">
                      <span className="truncate mr-2">{dim}</span>
                      <span className="font-mono font-medium text-foreground">{entry.scores[dim]}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

const PolicyDetail = () => {
  const { id } = useParams();
  const policy = policies.find((p) => p.id === id);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const excerpts = id ? policyExcerpts[id] : undefined;

  if (!policy) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Policy not found</h1>
          <Link to="/">
            <Button>Return to Overview</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Overview
          </Button>
        </Link>

        <div className="mb-8 animate-fade-in">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-3">
                <h1 className="text-4xl font-bold">{policy.name}</h1>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  {policy.year}
                </Badge>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl mb-4">{policy.description}</p>
              <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary mb-4">
                <p className="text-base leading-relaxed">{policy.summary}</p>
              </div>
              {policy.pdfUrl && (
                <Button 
                  asChild 
                  variant="outline" 
                  className="gap-2"
                >
                  <a href={policy.pdfUrl} target="_blank" rel="noopener noreferrer">
                    <FileText className="h-4 w-4" />
                    View Full Policy Document (PDF)
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Composite Radar Chart */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-3xl font-bold mb-6 pb-1">Composite Policy Score</h2>
          <p className="text-muted-foreground mb-6">
            Overall scores across all five policy attribute areas.
          </p>
          <div className="bg-card rounded-xl shadow-lg p-8 border-2">
            <PolicyRadarChart data={policy.data} color={policy.color} />
          </div>
        </div>

        {/* Category-Specific Radar Charts */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.15s" }}>
          <h2 className="text-3xl font-bold mb-6 pb-1">Rubric Variable Scores by Category</h2>
          <p className="text-muted-foreground mb-6">
            Detailed scoring breakdown for each policy attribute area showing individual rubric variable scores.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {categoryCriteria.map((category, index) => {
              const categoryData = getCategoryRadarData(policy.id, category.category);
              const Icon = iconMap[category.category as keyof typeof iconMap];
              const bgColor = colorMap[category.category as keyof typeof colorMap];
              const chartColor = chartColorMap[category.category];
              const overallScore = policy.data.find(d => d.subject === category.category)?.value || 0;
              
              return (
                <div
                  key={category.category}
                  className="bg-card rounded-xl shadow-lg border-2 overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.05}s` }}
                >
                  <div className="p-4 border-b">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${bgColor}`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{category.category}</h3>
                          <p className="text-sm text-muted-foreground">Overall Score: {overallScore}/100</p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setExpandedCategory(category.category)}
                        className="h-8 w-8"
                        title="Expand chart"
                      >
                        <Expand className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <CategoryRadarChart data={categoryData} color={chartColor} height={300} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Expanded Chart Modal */}
          <Dialog open={!!expandedCategory} onOpenChange={() => setExpandedCategory(null)}>
            <DialogContent className="max-w-4xl max-h-[90vh]">
              {expandedCategory && (() => {
                const category = categoryCriteria.find(c => c.category === expandedCategory);
                if (!category) return null;
                const categoryData = getCategoryRadarData(policy.id, category.category);
                const Icon = iconMap[category.category as keyof typeof iconMap];
                const bgColor = colorMap[category.category as keyof typeof colorMap];
                const chartColor = chartColorMap[category.category];
                const overallScore = policy.data.find(d => d.subject === category.category)?.value || 0;
                
                return (
                  <>
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${bgColor}`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <span className="text-2xl">{category.category}</span>
                          <p className="text-sm text-muted-foreground font-normal">Overall Score: {overallScore}/100</p>
                        </div>
                      </DialogTitle>
                    </DialogHeader>
                    <div className="py-4">
                      <CategoryRadarChart data={categoryData} color={chartColor} height={500} />
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {categoryData.map((item) => (
                        <div key={item.subject} className="flex justify-between p-2 bg-muted/30 rounded">
                          <span className="text-muted-foreground">{item.subject}</span>
                          <span className="font-medium">{item.value}/100</span>
                        </div>
                      ))}
                    </div>
                  </>
                );
              })()}
            </DialogContent>
          </Dialog>
        </div>

        {excerpts && (
          <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-3xl font-bold mb-6 pb-1">Key Policy Excerpts by Category</h2>
            <div className="grid grid-cols-1 gap-6">
              {excerpts.map((excerpt, index) => {
                const Icon = iconMap[excerpt.attribute as keyof typeof iconMap];
                const color = colorMap[excerpt.attribute as keyof typeof colorMap];
                
                return (
                  <div
                    key={excerpt.attribute}
                    className="bg-card rounded-lg border-2 p-6 hover:shadow-lg transition-all animate-fade-in"
                    style={{ animationDelay: `${0.45 + index * 0.05}s` }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color}`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold">{excerpt.attribute}</h3>
                    </div>
                    <div className="space-y-3">
                      {excerpt.excerpts.map((text, idx) => (
                        <div key={idx} className="flex gap-3 pl-2">
                          <Quote className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <p className="text-muted-foreground leading-relaxed italic">{text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <h2 className="text-3xl font-bold mb-6 pb-1">Policy Attributes Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POLICY_ATTRIBUTES.map((attr, index) => {
              const value = policy.data.find((d) => d.subject === attr.name)?.value || 0;
              const Icon = iconMap[attr.name as keyof typeof iconMap];
              const color = colorMap[attr.name as keyof typeof colorMap];

              return (
                <div
                  key={attr.name}
                  className="animate-fade-in"
                  style={{ animationDelay: `${0.55 + index * 0.1}s` }}
                >
                  <PolicyCard
                    title={attr.name}
                    description={`${attr.description} (Score: ${value}/100)`}
                    icon={Icon}
                    color={color}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <BenchmarkSection policyId={policy.id} />

        <div className="mb-8 animate-fade-in" style={{ animationDelay: "1.0s" }}>
          <h2 className="text-3xl font-bold mb-6 pb-1">Scoring Criteria & Weightings</h2>
          <p className="text-muted-foreground mb-6">
            Each category is evaluated based on specific criteria with assigned weights. Expand each section to see the detailed breakdown.
          </p>
          <Accordion type="single" collapsible className="space-y-4">
            {categoryCriteria.map((category, index) => {
              const value = policy.data.find((d) => d.subject === category.category)?.value || 0;
              const Icon = iconMap[category.category as keyof typeof iconMap];
              const color = colorMap[category.category as keyof typeof colorMap];
              
              return (
                <AccordionItem 
                  key={category.category} 
                  value={category.category}
                  className="border-2 rounded-lg px-6 animate-fade-in"
                  style={{ animationDelay: `${1.05 + index * 0.05}s` }}
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color}`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-semibold">{category.category}</h3>
                        <p className="text-sm text-muted-foreground">Score: {value}/100</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6">
                    <div className="space-y-3">
                      {category.criteria.map((criterion) => {
                        const policyScores = id ? criterionScores[id] : undefined;
                        const categoryScores = policyScores?.[category.category];
                        const criterionScore = categoryScores?.[criterion.name];
                        
                        return (
                          <div key={criterion.name} className="flex gap-3 p-3 rounded-md bg-muted/30 hover:bg-muted/50 transition-colors">
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <div className="flex-1">
                              <div className="flex items-start justify-between gap-2">
                                <p className="font-medium text-sm">{criterion.name}</p>
                                <div className="flex gap-2 items-center">
                                  {criterionScore !== undefined && (
                                    <Badge variant="secondary" className="text-xs font-semibold">
                                      {criterionScore}/100
                                    </Badge>
                                  )}
                                  <Badge variant="outline" className="text-xs">
                                    Weight: {criterion.weight}%
                                  </Badge>
                                </div>
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">{criterion.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default PolicyDetail;
