import { Phone } from "lucide-react";

export default function Navigation() {
  return (
    <header className="bg-[#14427B] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-3 px-4">
          <div className="flex items-center">
            <span className="text-xl font-semibold">Tecno Repara Madrid</span>
            <span className="ml-2 text-sm text-gray-300">Servicio Low Cost</span>
          </div>
          <a 
            href="tel:91XXX XX XX" 
            className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>91 XXX XX XX</span>
          </a>
        </div>
      </div>
    </header>
  );
}