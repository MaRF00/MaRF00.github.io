import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Smartphone, Tablet, Laptop, Watch } from "lucide-react";

const services = [
  {
    title: "Smartphone Repair",
    description: "Screen replacement, battery replacement, charging port repair, and more for all major brands.",
    icon: Smartphone,
  },
  {
    title: "Tablet Repair",
    description: "Expert repairs for iPads and Android tablets, including screen and battery replacements.",
    icon: Tablet,
  },
  {
    title: "Laptop Screen Repair",
    description: "Professional laptop screen replacement and repair services.",
    icon: Laptop,
  },
  {
    title: "Smartwatch Service",
    description: "Repair services for Apple Watch and other smart wearables.",
    icon: Watch,
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-[#F2F2F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center mb-16">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-[#007AFF] rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
