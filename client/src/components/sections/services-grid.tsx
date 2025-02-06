import { Smartphone, Laptop, Tablet } from "lucide-react";

const services = [
  {
    title: "Reparación de Móviles",
    description: "Arreglamos todo tipo de smartphones: iPhone, Samsung, Xiaomi y más",
    icon: Smartphone,
  },
  {
    title: "Reparación de Ordenadores",
    description: "Servicio técnico para portátiles y ordenadores de sobremesa",
    icon: Laptop,
  },
  {
    title: "Reparación de Tablets",
    description: "Especialistas en reparación de iPad y tablets Android",
    icon: Tablet,
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#14427B] mb-12">
          Nuestros Servicios
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-[#14427B] rounded-full flex items-center justify-center">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#14427B]">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}