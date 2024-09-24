import { FiUser, FiLock, FiSmartphone, FiGlobe } from "react-icons/fi";

const steps = [
  {
    icon: FiUser,
    title: "Fácil de usar",
    description:
      "Disfrute de una interfaz agradable, intuitiva y fácil de usar para una experiencia sin complicaciones.",
  },
  {
    icon: FiGlobe,
    title: "Acceso Global",
    description:
      "Accede a tu información desde cualquier lugar y en cualquier momento alrededor del mundo.",
  },
  {
    icon: FiSmartphone,
    title: "Compatibilidad",
    description:
      "Genere códigos QR al instante que se adaptan perfectamente a todas sus necesidades y requerimientos.",
  },
  {
    icon: FiLock,
    title: "Seguridad",
    description:
      "Asegúrese de que los códigos QR generados sean seguros y confiables para proteger sus datos.",
  },
];

function Main() {
  return (
    <section className="text-gray-400">
      <div className="container flex flex-wrap px-8 mx-auto sm:px-0 py-14">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={index}
              className="relative flex py-8 mx-auto sm:items-center md:w-2/3"
            >
              <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full pointer-events-none bg-primary-500"></div>
              </div>
              <div className="relative z-10 items-center flex-shrink-0 w-6 h-6 mt-10 rounded-full sm:mt-0 bg-primary-800"></div>
              <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 rounded-full bg-primary-800 text-primary-500">
                  <Icon className="w-12 h-12 transition hover:scale-125 hover:opacity-70" />
                </div>
                <div className="flex-grow mt-6 sm:pl-6 sm:mt-0">
                  <h2 className="mb-1 text-xl font-medium text-white title-font">
                    {step.title}
                  </h2>
                  <p className="leading-relaxed text-primary-500">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Main;
