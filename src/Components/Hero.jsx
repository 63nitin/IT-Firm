import Welcome from "./Animation/Welcome";

const Hero = () => {
    const text = "welcome to it consulting firm"
    return (
      <section className="h-screen bg-[url('../public/bg1.png')] flex items-center justify-center bg-gray-800 text-white">
        <div className="text-center">
            <Welcome/>
          <p className="mt-5 font-bold text-3xl">Expert IT consulting services tailored for your needs.</p>
          <button
  className="mt-6 px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded"
  onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth", block: "start" })}
>
  Get Started
</button>

        </div>
      </section>
    );
  };
  
  export default Hero;
  