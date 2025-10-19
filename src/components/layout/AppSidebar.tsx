import { Home, Search, FolderOpen, Database, Zap, Settings, TrendingUp, Package } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/products", icon: Package, label: "Products" },
  { to: "/analytics", icon: TrendingUp, label: "Analytics" },
  { to: "/database", icon: Database, label: "Database" },
  { to: "/projects", icon: FolderOpen, label: "Projects" },
];

export const AppSidebar = () => {
  return (
    <aside className="w-64 flex flex-col bg-card border-r border-border">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Zap className="w-5 h-5 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-bold text-foreground">Snowflake</h1>
        </div>
      </div>

      <nav className="flex-1 px-3">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                    isActive
                      ? "bg-secondary text-secondary-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )
                }
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mt-6 px-3">
          <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-all">
            <Search className="w-5 h-5" />
            <span>Search</span>
            <kbd className="ml-auto px-2 py-1 text-xs bg-muted rounded">⌘K</kbd>
          </button>
        </div>
      </nav>

      <div className="p-4 space-y-4 border-t border-border">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/20">
          <p className="text-sm font-medium text-foreground mb-1">Trial Period</p>
          <p className="text-xs text-muted-foreground mb-3">25 days remaining</p>
          <button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-md hover:shadow-lg">
            Upgrade Now
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm shadow-md">
            AS
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm text-foreground truncate">Alex Smith</p>
            <p className="text-xs text-muted-foreground">ACCOUNTADMIN</p>
          </div>
          <button className="p-2 hover:bg-muted rounded-lg transition-all">
            <Settings className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>
    </aside>
  );
};
