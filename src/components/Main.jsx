import { FiUser, FiLock,  FiSmartphone, FiGlobe } from "react-icons/fi";

const steps = [
  {
    icon: FiUser,
    title: "Fácil de usar",
    description: "Disfrute de una interfaz agradable, intuitiva y fácil de usar para una experiencia sin complicaciones.",
  },
  {
    icon: FiGlobe,
    title: "Acceso Global",
    description: "Accede a tu información desde cualquier lugar y en cualquier momento alrededor del mundo.",
  },
  {
    icon: FiSmartphone,
    title: "Compatibilidad",
    description: "Genere códigos QR al instante que se adaptan perfectamente a todas sus necesidades y requerimientos.",
  },
  {
    icon: FiLock,
    title: "Seguridad",
    description: "Asegúrese de que los códigos QR generados sean seguros y confiables para proteger sus datos.",
  },
];

function Main() {
  return (
    <section className="text-gray-400">
      <div className="container px-8 sm:px-0 py-14 mx-auto flex flex-wrap">
        {steps.map((step, index) => (
          <div key={index} className="flex relative py-8 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-700 pointer-events-none"></div>
            </div>
            <div className={`flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 items-center bg-gray-400 relative z-10`}></div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-gray-400 rounded-full inline-flex items-center justify-center">
                <step.icon className="w-12 h-12" />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-white mb-1 text-xl">
                  {step.title}
                </h2>
                <p className="leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Main;
