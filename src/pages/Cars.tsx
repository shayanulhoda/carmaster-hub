import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  Download, 
  Plus, 
  Edit3, 
  Trash2, 
  MoreHorizontal,
  Upload,
  Eye,
  Car as CarIcon
} from "lucide-react";

const brandsData = [
  { id: 1, name: "Maruti Suzuki", country: "India", models: 25, status: "Active", logo: "🚗" },
  { id: 2, name: "Hyundai", country: "South Korea", models: 18, status: "Active", logo: "🚙" },
  { id: 3, name: "Tata Motors", country: "India", models: 22, status: "Active", logo: "🚐" },
  { id: 4, name: "Mahindra", country: "India", models: 15, status: "Active", logo: "🛻" },
  { id: 5, name: "Toyota", country: "Japan", models: 12, status: "Inactive", logo: "🚗" },
];

const modelsData = [
  { id: 1, brand: "Maruti Suzuki", model: "Swift", year: "2024", bodyType: "Hatchback", fuelType: "Petrol", status: "Active" },
  { id: 2, brand: "Hyundai", model: "Creta", year: "2024", bodyType: "SUV", fuelType: "Petrol/Diesel", status: "Active" },
  { id: 3, brand: "Tata Motors", model: "Nexon", year: "2024", bodyType: "SUV", fuelType: "Electric", status: "Active" },
  { id: 4, brand: "Mahindra", model: "Thar", year: "2024", bodyType: "SUV", fuelType: "Diesel", status: "Active" },
  { id: 5, brand: "Toyota", model: "Innova", year: "2023", bodyType: "MPV", fuelType: "Diesel", status: "Inactive" },
];

function BrandsTable() {
  const getStatusBadge = (status: string) => {
    return status === "Active" ? 
      <Badge className="status-active">Active</Badge> : 
      <Badge className="status-inactive">Inactive</Badge>;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input placeholder="Search brands..." className="pl-10 w-80" />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Upload className="w-4 h-4 mr-2" />
            Import CSV
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button className="admin-button-primary" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Brand
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Brand</th>
                <th>Country</th>
                <th>Models</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {brandsData.map((brand) => (
                <tr key={brand.id} className="hover:bg-muted/50">
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{brand.logo}</div>
                      <div className="font-medium">{brand.name}</div>
                    </div>
                  </td>
                  <td>{brand.country}</td>
                  <td>
                    <Badge variant="secondary">{brand.models} models</Badge>
                  </td>
                  <td>{getStatusBadge(brand.status)}</td>
                  <td>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit3 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4" />
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

function ModelsTable() {
  const getStatusBadge = (status: string) => {
    return status === "Active" ? 
      <Badge className="status-active">Active</Badge> : 
      <Badge className="status-inactive">Inactive</Badge>;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input placeholder="Search models..." className="pl-10 w-80" />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter by Brand
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter by Year
          </Button>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Upload className="w-4 h-4 mr-2" />
            Bulk Upload
          </Button>
          <Button className="admin-button-primary" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Model
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Brand</th>
                <th>Model</th>
                <th>Year</th>
                <th>Body Type</th>
                <th>Fuel Type</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {modelsData.map((model) => (
                <tr key={model.id} className="hover:bg-muted/50">
                  <td>
                    <div className="font-medium">{model.brand}</div>
                  </td>
                  <td>
                    <div className="font-medium">{model.model}</div>
                  </td>
                  <td>{model.year}</td>
                  <td>
                    <Badge variant="outline">{model.bodyType}</Badge>
                  </td>
                  <td>
                    <Badge variant="secondary">{model.fuelType}</Badge>
                  </td>
                  <td>{getStatusBadge(model.status)}</td>
                  <td>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit3 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4" />
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

export default function Cars() {
  return (
    <DashboardLayout>
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="border-b border-border bg-card px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Cars Management</h1>
              <p className="text-muted-foreground">Manage automotive brands, models, and specifications</p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export All Data
              </Button>
              <Button className="admin-button-primary" size="sm">
                <Upload className="w-4 h-4 mr-2" />
                Bulk Import
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card className="dashboard-kpi-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Brands</CardTitle>
                <CarIcon className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">127</div>
                <p className="text-xs text-muted-foreground">+3 new this month</p>
              </CardContent>
            </Card>

            <Card className="dashboard-kpi-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Models</CardTitle>
                <CarIcon className="h-4 w-4 text-success" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,834</div>
                <p className="text-xs text-muted-foreground">+45 new this month</p>
              </CardContent>
            </Card>

            <Card className="dashboard-kpi-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Active Models</CardTitle>
                <CarIcon className="h-4 w-4 text-warning" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,721</div>
                <p className="text-xs text-muted-foreground">96% active rate</p>
              </CardContent>
            </Card>

            <Card className="dashboard-kpi-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Pending Review</CardTitle>
                <CarIcon className="h-4 w-4 text-destructive" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18</div>
                <p className="text-xs text-muted-foreground">Awaiting approval</p>
              </CardContent>
            </Card>
          </div>

          {/* Cars Tables */}
          <Card>
            <CardHeader>
              <CardTitle>Automotive Database</CardTitle>
              <CardDescription>Manage brands and their vehicle models</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="brands" className="space-y-4">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="brands">Brands</TabsTrigger>
                  <TabsTrigger value="models">Models</TabsTrigger>
                </TabsList>

                <TabsContent value="brands">
                  <BrandsTable />
                </TabsContent>

                <TabsContent value="models">
                  <ModelsTable />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}