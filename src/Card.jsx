import React from 'react';

const Card = ({ imgSrc, title, text }) => {
  return (
    <div className="flex text-center items-center flex-col mb-10 md:mb-20 px-2">
      <div className="mb-4 font-Oswald">
        <img src={imgSrc} alt={title} width="170px" height="170px" className="rounded-xl" />
      </div>
      <h3 className="h3 mb-5 font-Marcellus text-3xl font-extrabold text-[#35c7c0] md:mt-7 lg:text-4xl mt-8 md:mx-7">
        {title}
      </h3>
      <p className="mb-5 max-w-md mx-auto font-Oswald text-xl text-[#2d2d2e] md:text-2xl">
        {text}
      </p>
    </div>
  );
};

export default Card;
