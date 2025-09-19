import { AppSidebar } from "./AppSidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex">
      <AppSidebar />
      <main className="flex-1 overflow-hidden">
        {children}
      </main>
    </div>
  );
}