import { ChevronRight } from "lucide-react";

const ProjectCard = ({imageurl, title, description, technologies, liveUrl}) => {
    return (
        <div className="bg-[#13161d] border border-[#222633] hover:border-[#16a34a] transition-colors duration-500 flex flex-col rounded-2xl py-5">
                  <img
                    src={imageurl}
                    alt="Project 1"
                    className="w-5/6 rounded-2xl self-center"
                  />
                  <div className="w-5/6 mt-6 flex flex-col justify-between flex-1 self-center">
                    <div className="flex gap-2.5">
                      {technologies.map((tech, index) => (
                        <span key={index} className="bg-[#1e1f25] border-[#222633] rounded-3xl text-gray-300 px-5 py-2 text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <h2 className="font-syne font-extrabold text-xl sm:text-2xl my-5">
                      {title}
                    </h2>
                    <p className="text-sm sm:text-base text-[#7c8394]">
                      {description}
                    </p>
                    <hr className="border-[#1e1f25] mt-3" />
                    <a
                      href={liveUrl}   
                      className="text-[#7c8394] hover:text-[#7c8394]/90 flex items-center justify-between my-5"
                    >
                      View Live Site
                      <ChevronRight />
                    </a>
                  </div>
                </div>
    )
}

export default ProjectCard