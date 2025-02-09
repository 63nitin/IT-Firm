import { motion } from "framer-motion";

const features = [
  {
    title: "Expert Consultants",
    description: "Our team of industry experts provides strategic IT solutions tailored to your business needs.",
    icon: "👨‍💻",
  },
  {
    title: "Cutting-Edge Technology",
    description: "We leverage the latest tech trends to ensure your business stays ahead of the competition.",
    icon: "🚀",
  },
  {
    title: "Client-Centric Approach",
    description: "We focus on delivering solutions that align with your business goals and maximize efficiency.",
    icon: "🤝",
  },
  {
    title: "24/7 Support",
    description: "Our dedicated support team ensures your business operations run smoothly at all times.",
    icon: "📞",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="bg-gradient-to-r from-purple-200 to-blue-200 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Us?</h2>
        <p className="text-lg text-gray-600 mb-12">
          Discover what makes us the perfect IT consulting partner for your business.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-purple-300 to-blue-400 p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 50 }}  // **Add initial state**
              whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true }} // Ensures animation only plays when in view
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-5xl">{feature.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
