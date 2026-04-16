import { LaptopMinimal, Layers, ShoppingCart } from "lucide-react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <section
      className="flex flex-col justify-center items-center bg-[#0d0f14] w-full min-h-screen px-4 sm:px-8 md:px-16 lg:px-48 py-7 font-dm-sans"
      id="services"
    >
      <h1 className="font-syne text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center">
        Core Services
      </h1>
      <p className="text-base sm:text-lg text-[#7c8394] text-center max-w-2xl mt-4">
        Specialised development services tailored to modern business needs.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mt-10 w-full">
        <ServiceCard 
          icon={<Layers color="#22c55e" size={52} />}
          title="Web Development"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque quis ullam assumenda totam maiores? Ratione, aperiam."
          price="₦50,000"
        />
        <ServiceCard 
          icon={<LaptopMinimal color="#22c55e" size={52} />}
          title="Mobile App Development"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque quis ullam assumenda totam maiores? Ratione, aperiam."
          price="₦75,000"
        />
        <ServiceCard 
          icon={<ShoppingCart color="#22c55e" size={52} />}
          title="E-Commerce Solutions"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque quis ullam assumenda totam maiores? Ratione, aperiam."
          price="₦100,000"
        />
      </div>
    </section>
  );
};

export default Service;
