import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    fetch(
      "https://script.googleusercontent.com/macros/echo?user_content_key=eiVWb8IXgwBx_xnpJw-1Nlt-IQqgFx2Of3wfkKb2C-MYPOijusNRJnRXxyxVRqHRrPRFN_tDLmrC3K8LKPtNXAvhmzsrFv9qm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKKGXrySfUntSvLDUDtmw3OS5248Tw4li1EOVKvoe3NB7WX1Chqhw0Nd15DiP2tVqclMbkrxCPFxy9Mmy7NS8YMF0e9IfztvkNz9Jw9Md8uu&lib=MTniwo2bxFVj4duoB2TtC9FCgviWAwpXC"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data); // Debugging
        setServices(Array.isArray(data.data) ? data.data : []);
        setLoading(false); // Stop loading once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
        setLoading(false); // Stop loading even if there's an error
      });
  }, []);

  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Our Services</h2>

      {/* Show Loader When Loading */}
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-12 h-12 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 gap-8">
          {services.length > 0 ? (
            services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-purple-300 to-blue-400 p-6 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="text-5xl">{service.icon}</div>
                <h3 className="text-xl font-semibold mt-4">{service.Title}</h3>
                <p className="text-gray-600 mt-2">{service.Description}</p>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-4">No services available.</p>
          )}
        </div>
      )}
    </section>
  );
};

export default Services;
