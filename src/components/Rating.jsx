import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Rating = () => {
  const [count, setCount] = useState(false);
  return (
    <section className="rating-section py-8">
      <div className="container">
        <div className="rating-blog bg-ratingBg px-5 sm:px-10 py-8 rounded-2xl shadow-2xl shadow-ratingShadow">
          <h3 className="text-center sm:text-start font-bold text-xl md:text-3xl pb-5 lg:pb-0">
            In us there are numbers
          </h3>
          <ScrollTrigger
            onEnter={() => setCount(true)}
            onExit={() => setCount(false)}>
            <div className="flex items-center gap-4 mt-6 sm:gap-0 sm:justify-between flex-wrap sm:flex-nowrap justify-center">
              <div className="flex flex-col">
                <p className="text-ratingNumColor text-4xl md:text-5xl  xl:text-6xl font-semibold">
                  {count && (
                    <CountUp
                      className="static-number"
                      start={0}
                      duration={2.75}
                      end={4}
                      delay={0}
                    />
                  )}
                  <span className="text-black text-4xl">+</span>
                </p>
                <p className="text-lg text-ratingTitleColor">Brand</p>
              </div>
              <div className="flex flex-col">
                <p className="text-ratingNumColor text-4xl md:text-5xl  xl:text-6xl font-semibold">
                  {count && (
                    <CountUp
                      className="static-number"
                      start={0}
                      duration={2.75}
                      end={10}
                      delay={0}
                    />
                  )}
                  <span className="text-black text-4xl">+</span>
                </p>
                <p className="text-lg text-ratingTitleColor">Dealers</p>
              </div>
              <div className="flex flex-col">
                <p className="text-ratingNumColor text-4xl md:text-5xl  xl:text-6xl font-semibold">
                  {count && (
                    <CountUp
                      className="static-number"
                      start={0}
                      duration={2.75}
                      end={60}
                      delay={0}
                    />
                  )}
                  <span className="text-black text-4xl">+</span>
                </p>
                <p className="text-lg text-ratingTitleColor">Employees</p>
              </div>
              <div className="flex flex-col">
                <p className="text-ratingNumColor text-4xl md:text-5xl  xl:text-6xl font-semibold">
                  {count && (
                    <CountUp
                      className="static-number"
                      start={950}
                      duration={2.75}
                      end={1000}
                      delay={0}
                    />
                  )}
                  <span className="text-black text-4xl">+</span>
                </p>
                <p className="text-lg text-ratingTitleColor">Clients</p>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </div>
    </section>
  );
};

export default Rating;
