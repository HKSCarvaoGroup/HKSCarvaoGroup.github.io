import { useState } from "react";
import { policies } from "@/data/policies";
import { PolicyComparison } from "@/components/PolicyComparison";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Compare = () => {
  const [selectedPolicies, setSelectedPolicies] = useState<string[]>([
    policies[0].id,
    policies[1].id,
  ]);

  const togglePolicy = (policyId: string) => {
    setSelectedPolicies((prev) =>
      prev.includes(policyId)
        ? prev.filter((id) => id !== policyId)
        : [...prev, policyId]
    );
  };

  const selectedPolicyData = policies.filter((p) =>
    selectedPolicies.includes(p.id)
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-3">Policy Comparison</h1>
          <p className="text-lg text-muted-foreground">
            Compare multiple AI policies side-by-side across the five key dimensions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-2 shadow-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle>Comparison Chart</CardTitle>
                <CardDescription>
                  {selectedPolicyData.length} {selectedPolicyData.length === 1 ? 'policy' : 'policies'} selected
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedPolicyData.length > 0 ? (
                  <PolicyComparison policies={selectedPolicyData} />
                ) : (
                  <div className="h-[500px] flex items-center justify-center text-muted-foreground">
                    Select at least one policy to compare
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Select Policies</CardTitle>
                <CardDescription>Choose policies to compare</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {policies.map((policy) => (
                  <div
                    key={policy.id}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
                    onClick={() => togglePolicy(policy.id)}
                  >
                    <Checkbox
                      id={policy.id}
                      checked={selectedPolicies.includes(policy.id)}
                      onCheckedChange={() => togglePolicy(policy.id)}
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: policy.color }}
                        />
                        <label
                          htmlFor={policy.id}
                          className="text-sm font-medium leading-none cursor-pointer"
                        >
                          {policy.name}
                        </label>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {policy.description}
                      </p>
                      <Badge variant="outline" className="mt-2">
                        {policy.year}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
