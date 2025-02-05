import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { insertRepairRequestSchema, type InsertRepairRequest } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const deviceTypes = [
  "iPhone",
  "Android Phone",
  "iPad",
  "Android Tablet",
  "Smartwatch",
  "Other",
];

export default function RepairRequestForm() {
  const { toast } = useToast();
  
  const form = useForm<InsertRepairRequest>({
    resolver: zodResolver(insertRepairRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      deviceType: "",
      issueDescription: "",
      preferredDate: new Date().toISOString(),
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertRepairRequest) => {
      const res = await apiRequest("POST", "/api/repair-requests", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Request Submitted",
        description: "We'll contact you shortly to confirm your repair appointment.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: InsertRepairRequest) {
    mutation.mutate(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your@email.com" {...field} />
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
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="Your phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="deviceType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Device Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your device type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {deviceTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
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
          name="issueDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Issue Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Please describe the problem with your device"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="preferredDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Date</FormLabel>
              <FormControl>
                <Input type="datetime-local" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-[#007AFF] hover:bg-[#0051C3]"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Submitting..." : "Submit Request"}
        </Button>
      </form>
    </Form>
  );
}
