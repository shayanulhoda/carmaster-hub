import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  Car, 
  Package, 
  Megaphone, 
  CreditCard, 
  BarChart3, 
  Bell, 
  Database,
  Shield,
  Settings,
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "User & KYC",
    href: "/users",
    icon: Users,
  },
  {
    title: "Cars",
    href: "/cars",
    icon: Car,
  },
  {
    title: "Accessories",
    href: "/accessories",
    icon: Package,
  },
  {
    title: "Campaigns",
    href: "/campaigns",
    icon: Megaphone,
  },
  {
    title: "Subscriptions",
    href: "/subscriptions",
    icon: CreditCard,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Notifications",
    href: "/notifications",
    icon: Bell,
  },
  {
    title: "Master Data",
    href: "/master-data",
    icon: Database,
  },
  {
    title: "Security",
    href: "/security",
    icon: Shield,
  },
];

export function AppSidebar() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="w-64 bg-gradient-to-b from-sidebar-dark to-sidebar-darker text-sidebar-text flex flex-col h-full shadow-[var(--shadow-sidebar)]">
      {/* Logo & Title */}
      <div className="p-6 border-b border-sidebar-text/10">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-sidebar-text">Super Admin</h1>
            <p className="text-sm text-sidebar-text-muted">Dashboard</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6">
        <div className="space-y-1 px-4">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.href}
                to={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-sidebar-text-muted hover:bg-sidebar-text/5 hover:text-sidebar-text"
                }`}
              >
                <Icon 
                  className={`w-5 h-5 transition-colors ${
                    isActive(item.href) 
                      ? "text-primary-foreground" 
                      : "text-sidebar-text-muted group-hover:text-sidebar-text"
                  }`} 
                />
                <span className="font-medium">{item.title}</span>
              </NavLink>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-text/10">
        <div className="flex items-center space-x-3 px-4 py-3 mb-3">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-primary-foreground">SA</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-sidebar-text">Super Admin</p>
            <p className="text-xs text-sidebar-text-muted">admin@company.com</p>
          </div>
        </div>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="w-full justify-start text-sidebar-text-muted hover:text-sidebar-text hover:bg-sidebar-text/5"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );
}