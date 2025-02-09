import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Consultation",
    description: "We start with a free consultation to understand your business needs and goals.",
    icon: "💬",
  },
  {
    id: 2,
    title: "Strategy Planning",
    description: "Our experts create a tailored IT strategy that aligns with your objectives.",
    icon: "📑",
  },
  {
    id: 3,
    title: "Implementation",
    description: "We develop and deploy the solutions while ensuring a smooth integration process.",
    icon: "🚀",
  },
  {
    id: 4,
    title: "Support & Optimization",
    description: "We provide ongoing support and optimization to maximize efficiency.",
    icon: "⚙️",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-gradient-to-r from-purple-200 to-blue-200 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">How It Works</h2>
        <p className="text-lg text-gray-600 mb-12">
          Our step-by-step process ensures seamless IT consulting services for your business.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="bg-gradient-to-r from-purple-300 to-blue-400 p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true }} // Animation runs only once when the section comes into view
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-5xl">{step.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
