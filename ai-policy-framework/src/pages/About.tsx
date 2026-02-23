import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, Lock, Scale, Users, Factory, Info, AlertTriangle } from "lucide-react";
import { POLICY_ATTRIBUTES } from "@/types/policy";

const iconMap = {
  "National Security": Shield,
  "Safety & Security": Lock,
  "Antitrust": Scale,
  "Civil & Human Rights": Users,
  "Industrial Policy": Factory,
};

const colorMap = {
  "National Security": "hsl(var(--chart-1))",
  "Safety & Security": "hsl(var(--chart-2))",
  "Antitrust": "hsl(var(--chart-3))",
  "Civil & Human Rights": "hsl(var(--chart-4))",
  "Industrial Policy": "hsl(var(--chart-5))",
};

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
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

        <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.05s" }}>
          <h1 className="text-4xl font-bold mb-4 pb-1">About AI Policy Framework</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            This framework provides a comprehensive analysis of U.S. Artificial Intelligence policies
            across five critical dimensions, enabling policymakers and stakeholders to understand and
            compare different approaches to AI governance.
          </p>
        </div>

        <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <Card className="border-2">
            <CardHeader>
              <CardTitle>How to Use This Tool</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">1. Browse Individual Policies</h3>
                <p className="text-muted-foreground">
                  Navigate through the sidebar to explore detailed analyses of specific AI policies,
                  including their scores across all five dimensions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">2. Compare Multiple Policies</h3>
                <p className="text-muted-foreground">
                  Use the Compare page to overlay multiple policies and identify areas of alignment
                  or divergence in their approaches to AI governance.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">3. Analyze Trends</h3>
                <p className="text-muted-foreground">
                  Review policies by year to understand how AI governance priorities have evolved
                  and identify emerging trends in regulation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-3xl font-bold mb-6">Policy Dimensions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {POLICY_ATTRIBUTES.map((attr, index) => {
              const Icon = iconMap[attr.name as keyof typeof iconMap];
              const color = colorMap[attr.name as keyof typeof colorMap];

              return (
                <Card
                  key={attr.name}
                  className="border-2 hover:shadow-lg transition-all animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <CardHeader>
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-3"
                      style={{ backgroundColor: color }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle>{attr.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {attr.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
