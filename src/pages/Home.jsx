import React from "react";
import Banner from "../components/Banner";
import CategoriesHolder from "../components/CategoriesHolder";
import ServicesHolder from "../components/ServicesHolder";
import avatar from "../assets/images/avatar.jpg";
import TestimonialCard from "../components/ui/TestimonialCard";

function Home() {
  return (
    <div>
      <Banner />
      <CategoriesHolder />
      <ServicesHolder title="Graphic & Design" />
      <ServicesHolder title="Marketing & Sales" />
      <ServicesHolder title="Photography & Editor" />
      <section className="py-28">
        <div className="mx-auto max-w-[1250px]">
          <h1 className="text-center text-2xl font-bold lg:text-4xl">
            “What Client Say About Us”
          </h1>
          <p className="mt-2 text-center">
            There is some post in social media about us.
          </p>
          <div className="relative mx-auto mt-5 grid max-w-[90%] grid-cols-1 gap-4 lg:grid-cols-3">
            <div>
              <TestimonialCard
                avatar={avatar}
                name="Dwip Sarker"
                designation="Full-Stack Developer"
                testimonial="The action of choosing a place for a speciapecial status."
              />
              <TestimonialCard
                avatar={avatar}
                name="Dwip Sarker"
                designation="Full-Stack Developer"
                testimonial="The action of choosing a place for a special purpose or giving it a special status."
              />
              <TestimonialCard
                avatar={avatar}
                name="Dwip Sarker"
                designation="Full-Stack Developer"
                testimonial="The action of choosing a place for a specace for a special purpose giving it a special status."
              />
            </div>
            <div>
              <TestimonialCard
                avatar={avatar}
                name="Dwip Sarker"
                designation="Full-Stack Developer"
                testimonial="The action of r a special purpose a place for a special purpose a place for a special purpose or giving it a special status."
              />
              <TestimonialCard
                avatar={avatar}
                name="Dwip Sarker"
                designation="Full-Stack Developer"
                testimonial="The action of choosr a special posing a place for a special purpose or it a special status."
              />
              <TestimonialCard
                avatar={avatar}
                name="Dwip Sarker"
                designation="Full-Stack Developer"
                testimonial="The action of choosing a place for a special purpose or giving  on of choosing a place for a special purpose or it a special status."
              />
            </div>
            <div>
              <TestimonialCard
                avatar={avatar}
                name="Dwip Sarker"
                designation="Full-Stack Developer"
                testimonial="The action of choosing special status."
              />
              <TestimonialCard
                avatar={avatar}
                name="Dwip Sarker"
                designation="Full-Stack Developer"
                testimonial="The action of choosing a place giving  on of choosing a place for a special purpose or it a special status."
              />
              <TestimonialCard
                avatar={avatar}
                name="Dwip Sarker"
                designation="Full-Stack Developer"
                testimonial="The action of choosing a place for hoosing a place for a special purpose or it a special status."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
