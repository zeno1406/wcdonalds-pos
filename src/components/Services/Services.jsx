import React from "react";
import Img from "../../assets/cate-thumb-640-Almighty_Texan_BBQ.png";
import Img2 from "../../assets/cate-thumb-640-burgers_SH__0020_Quarter-Pounder-Double.png";
import Img3 from "../../assets/cate-thumb-640-burgers_SH__0015_Cheeseburger-Double.png";
const ServicesData = [
  {
    id: 1,
    img: Img,
    name: "Almighty Texan BBQ",
    description:
      "18$",
  },
  {
    id: 2,
    img: Img2,
    name: "Quarter Pounder Double",
    description:
      "18$",
  },
  {
    id: 3,
    img: Img3,
    name: "Cheeseburger Double",
    description:
      "18$",
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Our Services
            </p>
            <h1 className="text-3xl font-bold">Services</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis delectus architecto error nesciunt,
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="max-h-[200px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
