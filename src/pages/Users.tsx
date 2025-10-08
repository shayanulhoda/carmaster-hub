import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { AddUserDialog } from "@/components/users/AddUserDialog";
import { 
  Search, 
  Filter, 
  Download, 
  UserCheck, 
  UserX, 
  Eye, 
  MoreHorizontal,
  Building,
  Store,
  Users as UsersIcon,
  ShoppingCart
} from "lucide-react";

const usersData = {
  brandOwners: [
    { id: 1, name: "Maruti Suzuki", email: "admin@marutisuzuki.com", region: "North", status: "Active", kyc: "Verified" },
    { id: 2, name: "Hyundai Motors", email: "contact@hyundai.com", region: "South", status: "Active", kyc: "Pending" },
    { id: 3, name: "Tata Motors", email: "business@tatamotors.com", region: "West", status: "Active", kyc: "Verified" },
  ],
  wholesalers: [
    { id: 1, name: "Auto Parts Distributor", email: "sales@autoparts.com", region: "North", status: "Active", kyc: "Verified" },
    { id: 2, name: "Premium Auto Wholesale", email: "info@premiumauto.com", region: "East", status: "Inactive", kyc: "Rejected" },
    { id: 3, name: "Global Car Components", email: "contact@globalcar.com", region: "South", status: "Active", kyc: "Pending" },
  ],
  retailers: [
    { id: 1, name: "City Auto Shop", email: "shop@cityauto.com", region: "Central", status: "Active", kyc: "Verified" },
    { id: 2, name: "Highway Motors", email: "info@highwaymotors.com", region: "North", status: "Active", kyc: "Verified" },
    { id: 3, name: "Express Car Care", email: "care@expresscar.com", region: "West", status: "Pending", kyc: "Pending" },
  ],
  customers: [
    { id: 1, name: "Rajesh Kumar", email: "rajesh.k@email.com", region: "North", status: "Active", kyc: "Not Required" },
    { id: 2, name: "Priya Sharma", email: "priya.s@email.com", region: "South", status: "Active", kyc: "Not Required" },
    { id: 3, name: "Amit Patel", email: "amit.p@email.com", region: "West", status: "Active", kyc: "Not Required" },
  ],
};

function UserTable({ users, userType, onAddNew }: { users: any[], userType: string, onAddNew: () => void }) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="status-active">Active</Badge>;
      case "Pending":
        return <Badge className="status-pending">Pending</Badge>;
      case "Inactive":
        return <Badge className="status-inactive">Inactive</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getKYCBadge = (kyc: string) => {
    switch (kyc) {
      case "Verified":
        return <Badge className="status-active">Verified</Badge>;
      case "Pending":
        return <Badge className="status-pending">Pending</Badge>;
      case "Rejected":
        return <Badge className="status-inactive">Rejected</Badge>;
      default:
        return <Badge variant="secondary">{kyc}</Badge>;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder={`Search ${userType}...`}
              className="pl-10 w-80"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button className="admin-button-primary" size="sm" onClick={onAddNew}>
            Add New
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Region</th>
                <th>Status</th>
                <th>KYC</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-muted/50">
                  <td>
                    <div className="font-medium">{user.name}</div>
                  </td>
                  <td>
                    <div className="text-muted-foreground">{user.email}</div>
                  </td>
                  <td>{user.region}</td>
                  <td>{getStatusBadge(user.status)}</td>
                  <td>{getKYCBadge(user.kyc)}</td>
                  <td>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <UserCheck className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}

export default function Users() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState<"brandOwners" | "wholesalers" | "retailers" | "customers">("brandOwners");

  const handleAddNew = (userType: "brandOwners" | "wholesalers" | "retailers" | "customers") => {
    setSelectedUserType(userType);
    setDialogOpen(true);
  };

  return (
    <DashboardLayout>
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="border-b border-border bg-card px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">User & KYC Management</h1>
              <p className="text-muted-foreground">Manage all platform users and verification processes</p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm">
                <UserCheck className="w-4 h-4 mr-2" />
                Bulk Approve KYC
              </Button>
              <Button className="admin-button-primary" size="sm">
                KYC Review Queue
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card className="dashboard-kpi-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Brand Owners</CardTitle>
                <Building className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,250</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>

            <Card className="dashboard-kpi-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Wholesalers</CardTitle>
                <Store className="h-4 w-4 text-success" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3,200</div>
                <p className="text-xs text-muted-foreground">+8% from last month</p>
              </CardContent>
            </Card>

            <Card className="dashboard-kpi-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Retailers</CardTitle>
                <ShoppingCart className="h-4 w-4 text-warning" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8,500</div>
                <p className="text-xs text-muted-foreground">+15% from last month</p>
              </CardContent>
            </Card>

            <Card className="dashboard-kpi-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">End Customers</CardTitle>
                <UsersIcon className="h-4 w-4 text-destructive" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15,600</div>
                <p className="text-xs text-muted-foreground">+25% from last month</p>
              </CardContent>
            </Card>
          </div>

          {/* User Tables */}
          <Card>
            <CardHeader>
              <CardTitle>Platform Users</CardTitle>
              <CardDescription>Manage all user types and their verification status</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="brandOwners" className="space-y-4">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="brandOwners">Brand Owners</TabsTrigger>
                  <TabsTrigger value="wholesalers">Wholesalers</TabsTrigger>
                  <TabsTrigger value="retailers">Retailers</TabsTrigger>
                  <TabsTrigger value="customers">End Customers</TabsTrigger>
                </TabsList>

                <TabsContent value="brandOwners">
                  <UserTable users={usersData.brandOwners} userType="brand owners" onAddNew={() => handleAddNew("brandOwners")} />
                </TabsContent>

                <TabsContent value="wholesalers">
                  <UserTable users={usersData.wholesalers} userType="wholesalers" onAddNew={() => handleAddNew("wholesalers")} />
                </TabsContent>

                <TabsContent value="retailers">
                  <UserTable users={usersData.retailers} userType="retailers" onAddNew={() => handleAddNew("retailers")} />
                </TabsContent>

                <TabsContent value="customers">
                  <UserTable users={usersData.customers} userType="customers" onAddNew={() => handleAddNew("customers")} />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>

      <AddUserDialog 
        open={dialogOpen} 
        onOpenChange={setDialogOpen} 
        userType={selectedUserType}
      />
    </DashboardLayout>
  );
}