import { useState, useMemo } from "react";
import { FileText, BarChart3, Shield, Lock, Scale, Users, Factory, Info, FlaskConical, Search, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { policies } from "@/data/policies";

const navItems = [
  { title: "Overview", url: "/", icon: BarChart3 },
  { title: "Compare", url: "/compare", icon: FileText },
  { title: "LLM Benchmarks", url: "/benchmarks", icon: FlaskConical },
  { title: "About", url: "/about", icon: Info },
];

const AREA_ORDER = [
  "Safety & Security",
  "National Security",
  "Antitrust",
  "Civil & Human Rights",
  "Industrial Policy",
];

const areaIcons: Record<string, typeof Shield> = {
  "Safety & Security": Lock,
  "National Security": Shield,
  "Antitrust": Scale,
  "Civil & Human Rights": Users,
  "Industrial Policy": Factory,
};

export function AppSidebar() {
  const { open } = useSidebar();
  const [search, setSearch] = useState("");

  const filteredPolicies = useMemo(() => {
    if (!search.trim()) return policies;
    const q = search.toLowerCase();
    return policies.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
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
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className={({ isActive }) =>
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                          : "hover:bg-sidebar-accent/50"
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      {open && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Policies</SidebarGroupLabel>
          <SidebarGroupContent>
            {open && (
              <div className="relative px-2 mb-2">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                <Input
                  placeholder="Search policies..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="h-8 pl-7 pr-7 text-xs"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            )}
            {AREA_ORDER.map((area) => {
              const areaPolicies = groupedPolicies[area];
              if (!areaPolicies || areaPolicies.length === 0) return null;
              const AreaIcon = areaIcons[area] || Shield;

              return (
                <Collapsible key={area} defaultOpen={!search}>
                  <CollapsibleTrigger className="flex items-center gap-2 px-3 py-1.5 w-full text-left text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide">
                    {open && (
                      <>
                        <AreaIcon className="h-3.5 w-3.5 flex-shrink-0" />
                        <span className="truncate">{area}</span>
                        <span className="ml-auto text-[10px] font-normal opacity-60">{areaPolicies.length}</span>
                      </>
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenu>
                      {areaPolicies.map((policy) => (
                        <SidebarMenuItem key={policy.id}>
                          <SidebarMenuButton asChild>
                            <NavLink
                              to={`/policy/${policy.id}`}
                              className={({ isActive }) =>
                                isActive
                                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                                  : "hover:bg-sidebar-accent/50"
                              }
                            >
                              <Shield className="h-3.5 w-3.5 flex-shrink-0" style={{ color: policy.color }} />
                              {open && <span className="text-xs truncate">{policy.name}</span>}
                            </NavLink>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </CollapsibleContent>
                </Collapsible>
              );
            })}
            {open && filteredPolicies.length === 0 && (
              <p className="px-3 py-2 text-xs text-muted-foreground">No policies match your search.</p>
            )}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
