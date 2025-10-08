import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { BrandOwnerForm } from "./BrandOwnerForm";
import { WholesalerForm } from "./WholesalerForm";
import { RetailerForm } from "./RetailerForm";

interface AddUserDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userType: "brandOwners" | "wholesalers" | "retailers" | "customers";
}

export function AddUserDialog({ open, onOpenChange, userType }: AddUserDialogProps) {
  const getTitle = () => {
    switch (userType) {
      case "brandOwners":
        return "Add New Brand Owner";
      case "wholesalers":
        return "Add New Wholesaler";
      case "retailers":
        return "Add New Retailer";
      default:
        return "Add New User";
    }
  };

  const renderForm = () => {
    switch (userType) {
      case "brandOwners":
        return <BrandOwnerForm onSuccess={() => onOpenChange(false)} />;
      case "wholesalers":
        return <WholesalerForm onSuccess={() => onOpenChange(false)} />;
      case "retailers":
        return <RetailerForm onSuccess={() => onOpenChange(false)} />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">{getTitle()}</DialogTitle>
        </DialogHeader>
        {renderForm()}
      </DialogContent>
    </Dialog>
  );
}
