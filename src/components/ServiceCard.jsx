import React from 'react'

const ServiceCard = ({ icon, title, description, price }) => {
  return (
    <div className="bg-[#13161d] hover:bg-[#1a1e28] border border-[#222633] hover:border-[#16a34a] rounded-2xl px-6 py-10 flex flex-col justify-center gap-4">
          {icon}
          <h2 className="text-xl font-syne font-extrabold mt-3 text-white">
            {title}
          </h2>
          <p className="text-[#7c8394]">
            {description}
          </p>
          <hr className="border-[#1e1f25] mt-3" />
          <p className="text-[#7c8394] text-sm font-normal">Starting from</p>
          <h3 className="font-syne font-extrabold text-white">
            {price}
          </h3>
        </div>
  )
}

export default ServiceCard