import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const services = [
  {
    title: "Screen Replacement",
    description: "Professional screen replacement for all major smartphone brands.",
    price: "Starting at $79",
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa"
  },
  {
    title: "Battery Replacement",
    description: "Restore your device's battery life with genuine replacement batteries.",
    price: "Starting at $49",
    image: "https://images.unsplash.com/photo-1615494488092-b13b68fe0eb5"
  },
  {
    title: "Water Damage Repair",
    description: "Specialized treatment for water-damaged devices.",
    price: "Starting at $99",
    image: "https://images.unsplash.com/photo-1597423498043-8f85e9eb8ade"
  },
  {
    title: "System Diagnostics",
    description: "Complete system check and software optimization.",
    price: "Starting at $39",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789"
  }
];

export default function Services() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#1D1D1F]">Our Services</h1>
          <p className="mt-4 text-xl text-gray-600">
            Professional repair services for all your devices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-[#007AFF]">
                    {service.price}
                  </span>
                  <Link href="/contact">
                    <Button>Book Now</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/contact">
            <Button size="lg" className="bg-[#007AFF] hover:bg-[#0051C3]">
              Request a Repair
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
