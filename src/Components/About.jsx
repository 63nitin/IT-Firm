const About = () => {
    return (
      <section className="bg-gray-100 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Side: Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are a leading IT consulting firm specializing in innovative technology solutions 
              that drive business success. Our expert team provides tailored strategies, cloud services, 
              and digital transformation solutions to help businesses stay ahead in a fast-changing world.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              With a client-first approach, we empower companies to optimize processes, enhance security, 
              and scale operations efficiently. Let’s build the future together!
            </p>
          </div>
  
          {/* Right Side: Image */}
          <div className="md:w-1/2">
            <img
              src="../public/firm.png"
              alt="About Us"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  