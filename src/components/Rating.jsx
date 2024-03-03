import React from "react";

const Rating = () => {
  return (
    <section className="rating-section px-12 py-8 flex justify-center">
      <div className="container">
        <div className="rating-blog bg-ratingBg px-5 sm:px-10 py-8 rounded-2xl shadow-2xl shadow-ratingShadow">
          <h3 className="text-center sm:text-start font-bold text-xl md:text-3xl pb-5 lg:pb-0">
            In us there are numbers
          </h3>
          <div className="flex items-center gap-4 mt-6 sm:gap-0 sm:justify-between flex-wrap sm:flex-nowrap justify-center">
            <div className="flex flex-col">
              <p className="text-ratingNumColor text-4xl md:text-5xl  xl:text-6xl font-semibold">
                4<span className="text-black text-4xl">+</span>
              </p>
              <p className="text-lg text-ratingTitleColor">Brand</p>
            </div>
            <div className="flex flex-col">
              <p className="text-ratingNumColor text-4xl md:text-5xl  xl:text-6xl font-semibold">
                10<span className="text-black text-4xl">+</span>
              </p>
              <p className="text-lg text-ratingTitleColor">Dealers</p>
            </div>
            <div className="flex flex-col">
              <p className="text-ratingNumColor text-4xl md:text-5xl  xl:text-6xl font-semibold">
                60<span className="text-black text-4xl">+</span>
              </p>
              <p className="text-lg text-ratingTitleColor">Employees</p>
            </div>
            <div className="flex flex-col">
              <p className="text-ratingNumColor text-4xl md:text-5xl  xl:text-6xl font-semibold">
                1000<span className="text-black text-4xl">+</span>
              </p>
              <p className="text-lg text-ratingTitleColor">Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rating;
