import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { FileUpload } from "./FileUpload";
import { toast } from "sonner";
import { indianStates } from "@/lib/constants";

const wholesalerSchema = z.object({
  businessName: z.string().min(1, "Business name is required").max(100),
  brandLogo: z.array(z.instanceof(File)).optional(),
  businessAddress: z.string().min(1, "Business address is required"),
  panNumber: z.string().regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format"),
  panDocument: z.array(z.instanceof(File)).optional(),
  gstinNumber: z.string().regex(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, "Invalid GSTIN format"),
  gstinCertNumber: z.string().optional(),
  gstinDocument: z.array(z.instanceof(File)).optional(),
  state: z.string().min(1, "State is required"),
  city: z.string().min(1, "City is required"),
});

type WholesalerFormValues = z.infer<typeof wholesalerSchema>;

interface WholesalerFormProps {
  onSuccess: () => void;
}

export function WholesalerForm({ onSuccess }: WholesalerFormProps) {
  const form = useForm<WholesalerFormValues>({
    resolver: zodResolver(wholesalerSchema),
    defaultValues: {
      businessName: "",
      brandLogo: [],
      businessAddress: "",
      panNumber: "",
      panDocument: [],
      gstinNumber: "",
      gstinCertNumber: "",
      gstinDocument: [],
      state: "",
      city: "",
    },
  });

  const onSubmit = async (data: WholesalerFormValues) => {
    console.log("Wholesaler data:", data);
    toast.success("Wholesaler added successfully. KYC status: Pending Review");
    form.reset();
    onSuccess();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="businessName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Brand/Business Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter business name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="brandLogo"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <FileUpload
                    label="Brand Logo"
                    accept="image/*"
                    maxSize={5}
                    onChange={field.onChange}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="businessAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business Address</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter complete business address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="panNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>PAN Number</FormLabel>
                <FormControl>
                  <Input placeholder="ABCDE1234F" {...field} className="uppercase" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="panDocument"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <FileUpload
                    label="Upload PAN"
                    accept="image/*,.pdf"
                    maxSize={5}
                    onChange={field.onChange}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="gstinNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>GSTIN Number</FormLabel>
                <FormControl>
                  <Input placeholder="22AAAAA0000A1Z5" {...field} className="uppercase" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="gstinCertNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>GSTIN Certificate Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter certificate number (optional)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="gstinDocument"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <FileUpload
                  label="Upload GSTIN Certificate"
                  accept="image/*,.pdf"
                  maxSize={5}
                  onChange={field.onChange}
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {indianStates.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="Enter city" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-end space-x-3 pt-4">
          <Button type="button" variant="outline" onClick={onSuccess}>
            Cancel
          </Button>
          <Button type="submit" className="admin-button-primary">
            Save & Verify KYC
          </Button>
        </div>
      </form>
    </Form>
  );
}
