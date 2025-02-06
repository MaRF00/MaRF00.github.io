import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#14427B] mb-6">
          Reparación de Dispositivos Electrónicos en Madrid
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Servicio técnico profesional y económico para la reparación de móviles, tablets y ordenadores.
          <br />
          Diagnóstico gratuito y garantía en todas las reparaciones.
        </p>

        <a 
          href="tel:91XXX XX XX"
          className="inline-flex items-center gap-2 bg-[#14427B] text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span>Llámanos ahora: 91 XXX XX XX</span>
        </a>
      </div>
    </section>
  );
}