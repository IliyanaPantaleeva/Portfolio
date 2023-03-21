import { fromJSON } from "postcss";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/pro-1.jpg";
import project2 from "../assets/images/pro-2.jpg";
import project3 from "../assets/images/pro-3.jpg";
import project4 from "../assets/images/pro-4.jpg";
import project5 from "../assets/images/pro-5.jpg";
import project6 from "../assets/images/pro-6.jpg";
import view from "../assets/images/project_view.jpg";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Projects = () => {
  const pro = [
    {
      image: project1,
      name: "Fitness SPA",
      github_link:
        "https://gitlab.com/a37-js-team-8-react-project/a37-js-team-8-react-project-fitness-tracking-app",
      live_link: "https://fitness-tracking-app-411c1.web.app/",
    },
    {
      image: project2,
      name: "Forum SPA for electricity car",
      github_link:
        "https://gitlab.com/a37-js-team-8-react-project/react-forum-app",
      live_link: "https://forum-app-group8.web.app/",
    },
    {
      image: project3,
      name: "GiphyStar",
      github_link: "https://gitlab.com/liap.iliana/web-team-project-team-5",
      live_link: "",
    },
    {
      image: project4,
      name: "Exchange rate",
      github_link: "https://github.com/lia-new/Exchange-rate",
      live_link: "https://lia-new.github.io/Exchange-rate/",
    },
    {
      image: project5,
      name: "Lia Portfolio",
      github_link: "https://github.com/IliyanaPantaleeva/portfolio",
      live_link: "https://iliyanapantaleeva.github.io/portfolio/",
    },
    {
      image: project6,
      name: "Soft World",
      github_link: "https://github.com/IliyanaPantaleeva/platform_o",
      live_link: "https://platform-o.vercel.app/",
    },
  ];
  return (
    <section id="projects" className="py-10" text-white>
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-indigo-500">Projects</span>
        </h3>
        <p className="text-gray-200 mt-3 text-lg">My awesome work</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {pro.map((pro_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-purple-300 rounded-xl">
                  <img src={pro_info.image} alt="" className="rounded-xl" />
                  <h3 className="text-xl my-4">{pro_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={pro_info.github_link}
                      target="_blank"
                      className="text-indigo-500 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github / Gitlab
                    </a>
                    <a
                      href={pro_info.live_link}
                      target="_blank"
                      className="text-indigo-500 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block-hidden rounded-full">
          <img className="lg:block-hidden rounded-3xl" src={view} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
