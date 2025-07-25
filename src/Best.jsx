import React from 'react';
import experience from './images/best/experience.webp';
import diversity from './images/best/diversity.webp';
import recipe from './images/best/recipe.webp';
import Card from './Card';

const Best = () => {
  return (
    <section
      className="best mt-[180px] xl:mt-[200px] relative z-20 best-gradient"
      aria-label="Reasons why we are the best"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-3">
          <Card
            imgSrc={experience}
            title="Decades of Experience"
            text="Our team has decades of hands-on bartending experience. We bring you tried-and-true cocktail recipes, perfected over the years, so you can enjoy quality drinks with minimal effort."
          />
          <Card
            imgSrc={diversity}
            title="Wide Range of Cocktails"
            text="Whether you're a fan of classic cocktails or looking to try something new, our extensive variety ensures there's a drink for every taste and occasion. From timeless favorites to fresh trends, we've got it all."
          />
          <Card
            imgSrc={recipe}
            title="Simple Recipes, No Fuss"
            text="We keep it straightforward by giving you a clear list of ingredients for each cocktail. No complex techniques—just grab what you need, and let your creativity take over. You've got the ingredients, now it's time to mix and enjoy!"
          />
        </div>
      </div>
    </section>
  );
};

export default Best;
