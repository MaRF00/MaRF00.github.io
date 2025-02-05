import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#F2F2F7] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">TECNOREPARA</h3>
            <p className="text-sm text-gray-600">
              Professional mobile device repair services with a commitment to quality and customer satisfaction.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <p className="text-sm text-gray-600">
              Monday - Friday: 9:00 AM - 7:00 PM<br />
              Saturday: 10:00 AM - 5:00 PM<br />
              Sunday: Closed
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm text-gray-600">
              Email: info@tecnorepara.com<br />
              Phone: (555) 123-4567<br />
              Address: 123 Tech Street, Digital City
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} TECNOREPARA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
