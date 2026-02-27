import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Shield, Lock, Scale, Users, Factory, Info, AlertTriangle,
  BookOpen, FlaskConical, GraduationCap, Target, Layers, GitBranch,
  ExternalLink, CheckCircle2,
} from "lucide-react";
import { POLICY_ATTRIBUTES } from "@/types/policy";
import { categoryCriteria } from "@/data/categoryCriteria";

const iconMap: Record<string, typeof Shield> = {
  "National Security": Shield,
  "Safety & Security": Lock,
  "Antitrust": Scale,
  "Civil & Human Rights": Users,
  "Industrial Policy": Factory,
};

const colorMap: Record<string, string> = {
  "National Security": "hsl(var(--chart-1))",
  "Safety & Security": "hsl(var(--chart-2))",
  "Antitrust": "hsl(var(--chart-3))",
  "Civil & Human Rights": "hsl(var(--chart-4))",
  "Industrial Policy": "hsl(var(--chart-5))",
};

const team = [
  { name: "Paulo Carvão", role: "Principal Investigator" },
  { name: "Isabel Adler", role: "Researcher" },
  { name: "Claudio Mayrink Verdun", role: "Researcher" },
  { name: "Jeffrey Zhou", role: "Researcher" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8 max-w-5xl">

        {/* Disclaimer */}
        <div className="mb-8 animate-fade-in">
          <Card className="border-2 border-amber-200 bg-amber-50/50 dark:border-amber-900 dark:bg-amber-950/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-500" />
                <CardTitle className="text-amber-800 dark:text-amber-400">Disclaimer</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                The scores and analyses presented in this tool are intended for informational and
                research purposes only. They should not be interpreted as policy recommendations,
                endorsements, or evaluations of the merits of any particular governance approach.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The framework's contribution lies in demonstrating that systematic, multidimensional
                policy analysis can be both scalable and transparent.
              </p>
            </CardContent>
          </Card>
        </div>

        <Alert className="mb-8 animate-fade-in border-2">
          <Info className="h-4 w-4" />
          <AlertDescription>
            This tool is a preview and precursor to what our final tool may look like.
          </AlertDescription>
        </Alert>

        {/* Header */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.05s" }}>
          <h1 className="text-4xl font-bold mb-4 pb-1">About the AI Policy Framework</h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            A research instrument developed at Harvard Kennedy School for systematic,
            multidimensional evaluation of AI governance proposals. The framework enables
            scalable comparison of policies across five critical dimensions using a
            transparent, weighted rubric methodology.
          </p>
        </div>

        {/* Research Team */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.08s" }}>
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Research Team</h2>
          </div>
          <Card className="border-2">
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                This project is part of the research paper{" "}
                <em>An Instrument to Evaluate Governance Proposals: AI Policy Analysis at Scale</em>,
                developed at the Harvard Kennedy School.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {team.map((member) => (
                  <div key={member.name} className="text-center p-4 rounded-lg bg-muted/30">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <span className="text-lg font-bold text-primary">
                        {member.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <p className="font-semibold text-sm">{member.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 mt-6 flex-wrap">
                <a
                  href="https://github.com/HKSCarvaoGroup/AI-Policy-Analysis-at-Scale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <GitBranch className="h-4 w-4" />
                  Source Code
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="mb-12" />

        {/* Methodology */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="flex items-center gap-3 mb-6">
            <Target className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Methodology</h2>
          </div>

          <div className="space-y-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">Analytical Approach</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Each policy is evaluated against a structured rubric covering five stakeholder-driven
                  dimensions. Within each dimension, individual criteria are scored on a 0--100 scale
                  and then combined using predetermined weights to produce a composite category score.
                </p>
                <div className="bg-muted/40 rounded-lg p-4 border font-mono text-sm">
                  <p className="text-foreground font-semibold mb-1">Scoring Formula</p>
                  <p>Category Score = &Sigma;(Criterion Score &times; Criterion Weight / 100)</p>
                </div>
                <p>
                  The resulting five category scores are visualized as a radar (spider) chart,
                  providing an at-a-glance profile of how comprehensively a policy addresses
                  each dimension of AI governance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">Scoring Scale</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  {[
                    { range: "80 -- 100", label: "Comprehensive", desc: "Extensive, detailed provisions with strong enforcement" },
                    { range: "60 -- 79", label: "Substantial", desc: "Significant coverage with some gaps or ambiguities" },
                    { range: "40 -- 59", label: "Moderate", desc: "Partial coverage; key elements present but incomplete" },
                    { range: "20 -- 39", label: "Limited", desc: "Minimal or indirect treatment of the criterion" },
                    { range: "0 -- 19", label: "Absent / Negligible", desc: "Little to no relevant provisions" },
                  ].map((tier) => (
                    <div key={tier.range} className="flex gap-3 p-3 rounded-md bg-muted/30">
                      <Badge variant="outline" className="font-mono shrink-0 h-fit">
                        {tier.range}
                      </Badge>
                      <div>
                        <p className="font-medium">{tier.label}</p>
                        <p className="text-muted-foreground text-xs mt-0.5">{tier.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="mb-12" />

        {/* Policy Dimensions & Criteria */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center gap-3 mb-6">
            <Layers className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Policy Dimensions & Scoring Criteria</h2>
          </div>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            The framework evaluates policies across five dimensions. Each dimension is broken
            down into weighted criteria that capture specific aspects of governance. Expand
            each dimension below to see its full criteria and weights.
          </p>

          <Accordion type="multiple" className="space-y-4">
            {POLICY_ATTRIBUTES.map((attr, index) => {
              const Icon = iconMap[attr.name];
              const color = colorMap[attr.name];
              const criteria = categoryCriteria.find((c) => c.category === attr.name);

              return (
                <AccordionItem
                  key={attr.name}
                  value={attr.name}
                  className="border-2 rounded-lg px-6 animate-fade-in"
                  style={{ animationDelay: `${0.25 + index * 0.05}s` }}
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: color }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-lg font-semibold">{attr.name}</h3>
                        <p className="text-xs text-muted-foreground">
                          {criteria ? `${criteria.criteria.length} criteria` : ""}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-6">
                    <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                      {attr.description}
                    </p>
                    {criteria && (
                      <div className="space-y-2">
                        {criteria.criteria.map((c) => (
                          <div key={c.name} className="flex gap-3 p-3 rounded-md bg-muted/30">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <div className="flex-1">
                              <div className="flex items-start justify-between gap-2">
                                <p className="font-medium text-sm">{c.name}</p>
                                <Badge variant="outline" className="text-xs shrink-0">
                                  Weight: {c.weight}%
                                </Badge>
                              </div>
                              <p className="text-xs text-muted-foreground mt-1">{c.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        <Separator className="mb-12" />

        {/* LLM Benchmarking */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="flex items-center gap-3 mb-6">
            <FlaskConical className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">LLM Benchmarking</h2>
          </div>

          <Card className="border-2">
            <CardContent className="pt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                To assess how well large language models can replicate structured policy analysis,
                we benchmarked seven LLMs using the same rubric applied by human evaluators. Each
                model was prompted to score the same set of bills across all five framework
                dimensions, and the results were compared to the rubric-calibrated baseline.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-muted/30 border">
                  <p className="font-semibold text-foreground text-sm mb-2">Models Evaluated</p>
                  <ul className="space-y-1 text-sm">
                    {[
                      "Rubric-Calibrated Model (baseline)",
                      "OpenAI GPT-5.2",
                      "Claude Sonnet 4.5",
                      "Google Gemini 3 Pro",
                      "Grok 4.1 Thinking",
                      "DeepSeek-V3.2 Thinking",
                      "Kimi K2.5",
                    ].map((m) => (
                      <li key={m} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-muted/30 border">
                  <p className="font-semibold text-foreground text-sm mb-2">Bills Benchmarked</p>
                  <ul className="space-y-1 text-sm">
                    {[
                      "EU Digital Markets Act (2025)",
                      "EO 14320: AI Technology Stack Exports",
                      "2026 NDAA: Subtitle D -- Artificial Intelligence",
                      "Colorado AI Act",
                      "California SB 53",
                    ].map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p>
                The Rubric-Calibrated Model serves as the human-aligned baseline. Differences
                between each LLM's scores and the baseline reveal systematic biases -- for example,
                some models heavily weight the policy's primary focus area while assigning near-zero
                scores to less prominent dimensions.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="mb-12" />

        {/* How to Use */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">How to Use This Tool</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                step: "1",
                title: "Search & Browse Policies",
                desc: "Use the search bar on the Overview page or in the sidebar to find policies by name, topic, or year. Click any policy card to view its full analysis.",
              },
              {
                step: "2",
                title: "Explore Policy Details",
                desc: "Each policy page shows a composite radar chart, per-category breakdowns with individual criterion scores, key excerpts from the policy text, and scoring criteria with weights.",
              },
              {
                step: "3",
                title: "Compare Policies Side-by-Side",
                desc: "The Compare page lets you overlay multiple policies on a single radar chart to identify areas of alignment or divergence across dimensions.",
              },
              {
                step: "4",
                title: "Review LLM Benchmarks",
                desc: "The LLM Benchmarks page shows how different language models scored each bill, with an overlay chart and individual spider graphs per model. Benchmark data also appears on each benchmarked policy's detail page.",
              },
            ].map((item) => (
              <Card key={item.step} className="border-2">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{item.step}</span>
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {item.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="mb-12" />

        {/* Limitations */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.7s" }}>
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Limitations</h2>
          </div>

          <Card className="border-2">
            <CardContent className="pt-6">
              <ul className="space-y-4 text-muted-foreground leading-relaxed">
                {[
                  {
                    title: "Rubric subjectivity",
                    desc: "While the framework uses structured criteria and weights, the underlying scores involve interpretive judgment. Different evaluators may reach different scores for the same provision.",
                  },
                  {
                    title: "Static analysis",
                    desc: "Scores reflect the text of each policy at the time of evaluation. Amendments, implementing regulations, or judicial interpretations that alter a policy's practical effect are not captured.",
                  },
                  {
                    title: "Coverage scope",
                    desc: "The current set of policies is not exhaustive. Many relevant state, federal, and international instruments are not yet included.",
                  },
                  {
                    title: "Dimensional trade-offs",
                    desc: "The five dimensions are treated independently. The framework does not model interactions or tensions between dimensions (e.g., how security measures might constrain civil liberties).",
                  },
                  {
                    title: "LLM benchmark variance",
                    desc: "LLM outputs are sensitive to prompt phrasing, temperature settings, and model version. Benchmark results represent a single evaluation run and may vary on repetition.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground text-sm">{item.title}</p>
                      <p className="text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Footer attribution */}
        <div className="text-center py-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <p>&copy; 2026 HKS Carvão Group &middot; Harvard Kennedy School</p>
        </div>
      </div>
    </div>
  );
};

export default About;
