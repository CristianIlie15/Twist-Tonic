import React from 'react';

const Header = () => {
  return (
    <section
      className="hero h-[640px] xl:h-[840px] bg-hero bg-center lg:bg-cover bg-no-repeat bg-fixed xl:rounded-bl-[290px] relative z-20"
      role="banner"
      aria-label="Hero section with welcome message and call to action"
    >
      <div className="container mx-auto h-full flex items-center justify-center xl:justify-start">
        <div className="max-w-[567px] flex flex-col items-center text-center xl:text-left lg:items-start rounded-2xl bg-white/15 px-4 mx-2 md:mx-5 lg:px-10 md:px-8">
          {/* Heading */}
          <h1 className="mb-8 font-Marcellus text-3xl font-extrabold text-white/90 mt-4 md:mt-7 lg:text-6xl xl:text-white/80">
            Shake Up Your Experience
          </h1>

          {/* Paragraph */}
          <p className="mb-8 font-Oswald text-2xl text-[#0a0a0a]">
            Discover expertly crafted cocktails curated by our world-class bartenders. Whether you're a{' '}
            <span className="text-[#32B9B2] font-semibold">cocktail connoisseur</span> or a casual sipper, we bring the bar to you with{' '}
            <span className="text-amber-600 font-semibold">our top recommendations</span> and insider tips.
          </p>

          {/* Button */}
          <a href="#action" aria-label="Go to the Selection section">
            <button
              className="btn btn-primary mx-auto xl:mx-0 border-2 flex justify-center px-2 py-1 rounded-lg text-center mb-8 transform transition-transform duration-300 hover:scale-105 hover:bg-transparent hover:text-white crazyButton"
              type="button"
            >
              <span className="my-2 font-Oswald text-base md:text-xl font-normal text-white/80">
                Go to the Selection
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
