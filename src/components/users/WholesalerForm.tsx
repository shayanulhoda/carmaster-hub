import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { FileUpload } from "./FileUpload";
import { toast } from "sonner";
import { indianStates } from "@/lib/constants";
import { Eye, EyeOff, ChevronDown } from "lucide-react";

const wholesalerSchema = z.object({
  businessName: z.string().min(1, "Business name is required").max(100),
  brandLogo: z.array(z.instanceof(File)).optional(),
  email: z.string().email("Invalid email format").min(1, "Email is required"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Invalid phone number. Must be 10 digits starting with 6-9"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
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
  const [showPassword, setShowPassword] = useState(false);
  const [isAccountDetailsOpen, setIsAccountDetailsOpen] = useState(true);
  
  const form = useForm<WholesalerFormValues>({
    resolver: zodResolver(wholesalerSchema),
    defaultValues: {
      businessName: "",
      brandLogo: [],
      email: "",
      phone: "",
      password: "",
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

        <Collapsible open={isAccountDetailsOpen} onOpenChange={setIsAccountDetailsOpen}>
          <CollapsibleTrigger className="flex items-center justify-between w-full py-2 font-semibold text-[#5C2C8F]">
            Account Details
            <ChevronDown className={`h-4 w-4 transition-transform ${isAccountDetailsOpen ? 'rotate-180' : ''}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-4 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="example@domain.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="Enter 10-digit mobile number" {...field} maxLength={10} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input 
                        type={showPassword ? "text" : "password"} 
                        placeholder="Create Password" 
                        {...field} 
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CollapsibleContent>
        </Collapsible>

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
