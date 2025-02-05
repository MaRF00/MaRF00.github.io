import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <header className="border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-semibold text-[#1D1D1F]">TECNOREPARA</a>
        </Link>
        
        <div className="hidden sm:flex space-x-8">
          <Link href="/">
            <a className="text-[#1D1D1F] hover:text-[#007AFF] transition-colors">Home</a>
          </Link>
          <Link href="/services">
            <a className="text-[#1D1D1F] hover:text-[#007AFF] transition-colors">Services</a>
          </Link>
          <Link href="/contact">
            <a className="text-[#1D1D1F] hover:text-[#007AFF] transition-colors">Contact</a>
          </Link>
        </div>

        <Link href="/contact">
          <Button className="bg-[#007AFF] hover:bg-[#0051C3]">
            Request Repair
          </Button>
        </Link>
      </nav>
    </header>
  );
}
