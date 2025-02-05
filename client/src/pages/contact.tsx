import RepairRequestForm from "@/components/repair-request-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="py-12 bg-[#F2F2F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#1D1D1F]">Contact Us</h1>
          <p className="mt-4 text-xl text-gray-600">
            Get in touch with our expert repair team
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Request a Repair</CardTitle>
              </CardHeader>
              <CardContent>
                <RepairRequestForm />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-[#007AFF]" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-600">123 Tech Street, Digital City</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-[#007AFF]" />
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-gray-600">
                      Mon-Fri: 9:00 AM - 7:00 PM<br />
                      Sat: 10:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-[#007AFF]" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-[#007AFF]" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">info@tecnorepara.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
