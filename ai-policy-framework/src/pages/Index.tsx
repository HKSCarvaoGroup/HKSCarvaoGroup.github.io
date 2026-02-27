import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { policies } from "@/data/policies";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, TrendingUp, Search, X } from "lucide-react";

const AREA_OPTIONS = [
  "All Areas",
  "Safety & Security",
  "National Security",
  "Antitrust",
  "Civil & Human Rights",
  "Industrial Policy",
];

const Index = () => {
  const [search, setSearch] = useState("");
  const [areaFilter, setAreaFilter] = useState("All Areas");

  const filteredPolicies = useMemo(() => {
    let result = policies;
    if (areaFilter !== "All Areas") {
      result = result.filter((p) => p.area === areaFilter);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q) ||
          p.area.toLowerCase().includes(q) ||
          String(p.year).includes(q)
      );
    }
    return result;
  }, [search, areaFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center animate-fade-in">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
            <TrendingUp className="w-4 h-4 mr-2 inline" />
            AI Policy Analysis Framework
          </Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pb-2">
            U.S. AI Policy Framework
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Compare and analyze U.S. Artificial Intelligence policies across five critical dimensions:
            National Security, Safety, Antitrust, Civil & Human Rights, and Industrial Policy
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <Link to="/compare">
              <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                Compare Policies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Policy Cards Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-center pb-1">Explore Policies</h2>

          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, topic, or year..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9 pr-9 h-11"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              <Select value={areaFilter} onValueChange={setAreaFilter}>
                <SelectTrigger className="w-[200px] h-11">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {AREA_OPTIONS.map((area) => (
                    <SelectItem key={area} value={area}>{area}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {(search || areaFilter !== "All Areas") && (
              <p className="text-sm text-muted-foreground mt-2 text-center">
                {filteredPolicies.length} {filteredPolicies.length === 1 ? "policy" : "policies"} found
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPolicies.map((policy, index) => (
              <Link
                key={policy.id}
                to={`/policy/${policy.id}`}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="border-2 h-full hover:shadow-xl transition-all hover:scale-[1.02] hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="outline" className="text-xs">{policy.area}</Badge>
                      <Badge variant="secondary">{policy.year}</Badge>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors text-base">
                      {policy.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {policy.description}
                    </CardDescription>
                    <div className="flex items-center text-sm text-primary font-medium">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
            {filteredPolicies.length === 0 && (
              <div className="col-span-full text-center py-12 text-muted-foreground">
                <Search className="h-10 w-10 mx-auto mb-3 opacity-40" />
                <p className="text-lg font-medium">No policies found</p>
                <p className="text-sm mt-1">Try a different search term</p>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <Card className="max-w-2xl mx-auto border-2 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Compare?</CardTitle>
              <CardDescription className="text-base">
                Use our interactive comparison tool to overlay multiple policies and identify
                areas of alignment or divergence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/compare">
                <Button size="lg" className="shadow-lg">
                  Start Comparing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
