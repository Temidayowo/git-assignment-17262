import image1 from "../assets/runacos.png";
import image2 from "../assets/smartspend.png";
import { ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <section
      className="font-dm-sans text-white min-h-screen flex flex-col justify-center bg-[#0d0f14] px-4 sm:px-8 md:px-16 lg:px-56"
      id="project"
    >
      <h1 className="font-syne font-extrabold text-3xl sm:text-4xl md:text-5xl">
        Selected Work
      </h1>
      <p className="text-base sm:text-lg mt-4">
        Recent Projects where I&apos;ve helped Clients achieve their technical
        and business goals.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mt-10">
        <ProjectCard
          imageurl={image1}
          title="Runacos"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis tempus urna, lobortis mollis massa faucibus eget. Sed et enim congue, malesuada nisi ut, iaculis urna."
          technologies={["Next.JS", "Prisma", "MySql"]}
          liveUrl="https://runacos.vercel.app"
        />
        <ProjectCard
          imageurl={image2}
          title="Smart-Spend"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis tempus urna, lobortis mollis massa faucibus eget. Sed et enim congue, malesuada nisi ut, iaculis urna. Pellentesque"
          technologies={["Next.JS", "Prisma", "MySql"]}
          liveUrl="https://smartspend.vercel.app"
        />
      </div>
    </section>
  )
}

export default Project
              