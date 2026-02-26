import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { billBenchmarks, MODEL_COLORS, type BillBenchmark, type LLMBenchmarkEntry } from "@/data/llmBenchmarks";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DIMENSIONS = [
  "Antitrust",
  "Industrial Policy",
  "National Security",
  "Civil & Human Rights",
  "Safety & Security",
] as const;

function ModelRadarChart({ entry, color }: { entry: LLMBenchmarkEntry; color: string }) {
  const data = DIMENSIONS.map((dim) => ({
    subject: dim,
    value: entry.scores[dim],
    fullMark: 100,
  }));

  return (
    <ResponsiveContainer width="100%" height={320}>
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

function OverlayRadarChart({ bill }: { bill: BillBenchmark }) {
  const mergedData = DIMENSIONS.map((dim) => {
    const point: Record<string, string | number> = { subject: dim, fullMark: 100 };
    bill.models.forEach((m) => {
      point[m.model] = m.scores[dim];
    });
    return point;
  });

  return (
    <ResponsiveContainer width="100%" height={500}>
      <RadarChart cx="50%" cy="50%" outerRadius="65%" data={mergedData}>
        <PolarGrid stroke="hsl(var(--border))" strokeWidth={1.5} />
        <PolarAngleAxis
          dataKey="subject"
          tick={{ fill: 'hsl(var(--foreground))', fontSize: 13, fontWeight: 600 }}
          tickLine={false}
          dy={-10}
        />
        <PolarRadiusAxis
          angle={90}
          domain={[0, 100]}
          tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
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

function BillTab({ bill }: { bill: BillBenchmark }) {
  return (
    <div className="space-y-8">
      <Card className="border-2 shadow-lg">
        <CardHeader>
          <CardTitle>All Models Overlay</CardTitle>
          <CardDescription>
            Comparison of all LLM benchmark scores on <span className="font-medium">{bill.name}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <OverlayRadarChart bill={bill} />
        </CardContent>
      </Card>

      <h3 className="text-2xl font-bold">Individual Model Results</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {bill.models.map((entry) => {
          const color = MODEL_COLORS[entry.model];
          const avg = Object.values(entry.scores).reduce((a, b) => a + b, 0) / 5;
          return (
            <Card key={entry.model} className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                  <CardTitle className="text-base">{entry.model}</CardTitle>
                </div>
                <CardDescription>
                  Avg: {avg.toFixed(1)} / 100
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ModelRadarChart entry={entry} color={color} />
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-2 text-xs text-muted-foreground">
                  {DIMENSIONS.map((dim) => (
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

const Benchmarks = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8 animate-fade-in">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
            LLM Benchmark
          </Badge>
          <h1 className="text-4xl font-bold mb-3">LLM Benchmark Results</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            How different LLMs score each policy bill across the five framework dimensions.
            Select a bill to view individual spider graphs for each model.
          </p>
        </div>

        <Tabs defaultValue={billBenchmarks[0].id} className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <TabsList className="flex flex-wrap h-auto gap-1 mb-6">
            {billBenchmarks.map((bill) => (
              <TabsTrigger key={bill.id} value={bill.id} className="text-xs sm:text-sm">
                {bill.shortName}
              </TabsTrigger>
            ))}
          </TabsList>

          {billBenchmarks.map((bill) => (
            <TabsContent key={bill.id} value={bill.id}>
              <div className="mb-4">
                <h2 className="text-2xl font-bold">{bill.name}</h2>
                <p className="text-muted-foreground">
                  Primary focus: <Badge variant="outline">{bill.focusCategory}</Badge>
                </p>
              </div>
              <BillTab bill={bill} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Benchmarks;
