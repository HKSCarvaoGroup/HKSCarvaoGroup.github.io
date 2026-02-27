import { useState, useMemo } from "react";
import { policies } from "@/data/policies";
import { PolicyComparison } from "@/components/PolicyComparison";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Search, X, ChevronDown } from "lucide-react";

const AREA_ORDER = [
  "Safety & Security",
  "National Security",
  "Antitrust",
  "Civil & Human Rights",
  "Industrial Policy",
];

const Compare = () => {
  const [selectedPolicies, setSelectedPolicies] = useState<string[]>([
    policies[0].id,
    policies[1].id,
  ]);
  const [search, setSearch] = useState("");

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

  const filteredPolicies = useMemo(() => {
    if (!search.trim()) return policies;
    const q = search.toLowerCase();
    return policies.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.area.toLowerCase().includes(q) ||
        String(p.year).includes(q)
    );
  }, [search]);

  const groupedPolicies = useMemo(() => {
    const groups: Record<string, typeof policies> = {};
    for (const area of AREA_ORDER) {
      groups[area] = filteredPolicies.filter((p) => p.area === area);
    }
    return groups;
  }, [filteredPolicies]);

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
                <div className="relative mt-2">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                  <Input
                    placeholder="Search policies..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="h-8 pl-8 pr-8 text-xs"
                  />
                  {search && (
                    <button
                      onClick={() => setSearch("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-2 max-h-[600px] overflow-y-auto">
                {AREA_ORDER.map((area) => {
                  const areaPolicies = groupedPolicies[area];
                  if (!areaPolicies || areaPolicies.length === 0) return null;

                  return (
                    <Collapsible key={area} defaultOpen>
                      <CollapsibleTrigger className="flex items-center gap-2 w-full text-left text-xs font-semibold text-muted-foreground hover:text-foreground py-2 px-1 uppercase tracking-wide">
                        <ChevronDown className="h-3 w-3" />
                        <span>{area}</span>
                        <span className="ml-auto text-[10px] font-normal opacity-60">{areaPolicies.length}</span>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-1">
                        {areaPolicies.map((policy) => (
                          <div
                            key={policy.id}
                            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
                            onClick={() => togglePolicy(policy.id)}
                          >
                            <Checkbox
                              id={policy.id}
                              checked={selectedPolicies.includes(policy.id)}
                              onCheckedChange={() => togglePolicy(policy.id)}
                            />
                            <div
                              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: policy.color }}
                            />
                            <label
                              htmlFor={policy.id}
                              className="text-xs leading-tight cursor-pointer truncate"
                            >
                              {policy.name}
                            </label>
                          </div>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
