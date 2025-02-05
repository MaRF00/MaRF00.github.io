import Hero from "@/components/sections/hero";
import ServicesGrid from "@/components/sections/services-grid";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div>
      <Hero />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-16">Why Choose TECNOREPARA?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Expert Technicians</h3>
              <p className="text-gray-600">Our certified technicians have years of experience repairing all types of mobile devices.</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Quick Service</h3>
              <p className="text-gray-600">Most repairs are completed within 24 hours, getting your device back to you fast.</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Quality Guarantee</h3>
              <p className="text-gray-600">All our repairs come with a 90-day warranty for your peace of mind.</p>
            </div>
          </div>
        </div>
      </section>
      
      <ServicesGrid />
      
      <section className="py-24 bg-[#F2F2F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to Fix Your Device?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't let a broken device slow you down. Our expert team is ready to help with fast, reliable repairs.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#007AFF] hover:bg-[#0051C3]">
              Request a Repair
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
