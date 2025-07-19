<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { FaCocktail, FaGlassMartiniAlt } from 'react-icons/fa';

const COCKTAIL_API_BASE = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

const Action = () => {
  const [cocktailList, setCocktailList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRandomCocktails = async () => {
      let cocktailsFetched = [];
      let retries = 0;
      const maxRetries = 30;

      while (cocktailsFetched.length < maxRetries && retries < maxRetries) {
        try {
          const response = await fetch(COCKTAIL_API_BASE);
          const data = await response.json();
          if (data.drinks && data.drinks.length > 0) {
            const cocktail = data.drinks[0];
            if (!cocktailsFetched.some(c => c.idDrink === cocktail.idDrink)) {
              cocktailsFetched.push(cocktail);
            }
          }
        } catch (error) {
          console.error('Error fetching random cocktail:', error);
        }
        retries++;
      }
      setCocktailList(cocktailsFetched);
      setLoading(false);
    };

    fetchRandomCocktails();
  }, []);

  const getIngredients = (cocktail) => {
    const ingredients = [];
    for (let i = 1; i <= 10; i++) {
      const ingredient = cocktail[`strIngredient${i}`];
      const measure = cocktail[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push(`${ingredient} - ${measure ? measure : ''}`);
      }
    }
    return ingredients;
  };

  return (
    <div className = "flex items-center">
    <div className="container mx-auto p-4 ">
      <section className="cocktails " id="action">
        <h2 className="text-2xl font-bold mb-8 text-center font-Oswald lg:text-4xl md:mt-15 mt-[140px]">
          Our Cocktail Selection <span className="text-orange-600"> FOR YOU </span> Today
        </h2>
        {loading ? (
  <div className="flex justify-center items-center w-full min-h-[320px]">
    <div className="loader">
      <p className="loader-text text-center text-xl md:text-2xl">
        Your Cocktail Selection is Loading...
      </p>
    </div>
  </div>
) : (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {cocktailList.map((cocktail) => (
              <div key={cocktail.idDrink} className="cocktail-card bg-white p-6 shadow-lg rounded-lg text-center">
                <div className={`flex items-center justify-center mb-2 ${cocktail.strAlcoholic === "Alcoholic" ? 'bg-red-500' : 'bg-green-500'} text-white py-1 px-2 rounded-lg font-bold text-lg`}>
                  {cocktail.strAlcoholic === "Alcoholic" ? (
                    <FaCocktail className="mr-2" />
                  ) : (
                    <FaGlassMartiniAlt className="mr-2" />
                  )}
                  <span>{cocktail.strAlcoholic}</span>
                </div>

                <h3 className="text-xl font-bold mb-2 my-3 lg:my-5 font-Oswald md:text-xl">{cocktail.strDrink}</h3>
                <img
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
                className="w-full h-48 object-contain mb-4 md:rounded-[20%] lg:rounded-[30%] sm:rounded-[27%]" 
/>


                <ul className="ingredients-list text-center text-lg font-Marcellus md:text-2xl">
                  {getIngredients(cocktail).map((ingredient, index) => (
                    <li key={index} className="text-sm md:text-base">{ingredient}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
    </div>
  );
};

export default Action;
=======
import React, { useState, useEffect } from 'react';
import { FaCocktail, FaGlassMartiniAlt } from 'react-icons/fa';

const COCKTAIL_API_BASE = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

const Action = () => {
  const [cocktailList, setCocktailList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRandomCocktails = async () => {
      let cocktailsFetched = [];
      let retries = 0;
      const maxRetries = 30;

      while (cocktailsFetched.length < maxRetries && retries < maxRetries) {
      try {
          const response = await fetch(COCKTAIL_API_BASE);
          const data = await response.json();
          if (data.drinks && data.drinks.length > 0) {
            const cocktail = data.drinks[0];
            if (!cocktailsFetched.some(c => c.idDrink === cocktail.idDrink)) {
              cocktailsFetched.push(cocktail);
            }
          }
        } catch (error) {
          console.error('Error fetching cocktail:', error);
        }
        retries++;
      }
      setCocktailList(cocktailsFetched);
      setLoading(false);
    };

    fetchRandomCocktails();
  }, []);

  const getIngredients = (cocktail) => {
    const ingredients = [];
    for (let i = 1; i <= 10; i++) {
      const ingredient = cocktail[`strIngredient${i}`];
      const measure = cocktail[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push(`${ingredient} - ${measure ? measure : ''}`);
      }
    }
    return ingredients;
  };

  return (
    <div className = "flex items-center">
    <div className="container mx-auto p-4 ">
      <section className="cocktails " id="action">
        <h2 className="text-2xl font-bold mb-8 text-center font-Oswald lg:text-4xl md:mt-15 mt-[140px]">
          Our Cocktail Selection <span className="text-orange-600"> FOR YOU </span> Today
        </h2>
        {loading ? (
  <div className="flex justify-center items-center w-full min-h-[320px]">
    <div className="loader">
      <p className="loader-text text-center text-xl md:text-2xl">
        Your Cocktail Selection is Loading...
      </p>
    </div>
  </div>
) : (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {cocktailList.map((cocktail) => (
              <div key={cocktail.idDrink} className="cocktail-card bg-white p-6 shadow-lg rounded-lg text-center">
                <div className={`flex items-center justify-center mb-2 ${cocktail.strAlcoholic === "Alcoholic" ? 'bg-red-500' : 'bg-green-500'} text-white py-1 px-2 rounded-lg font-bold text-lg`}>
                  {cocktail.strAlcoholic === "Alcoholic" ? (
                    <FaCocktail className="mr-2" />
                  ) : (
                    <FaGlassMartiniAlt className="mr-2" />
                  )}
                  <span>{cocktail.strAlcoholic}</span>
                </div>

                <h3 className="text-xl font-bold mb-2 my-3 lg:my-5 font-Oswald md:text-xl">{cocktail.strDrink}</h3>
                <img
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
                className="w-full h-48 object-contain mb-4 md:rounded-[20%] lg:rounded-[30%] sm:rounded-[27%]" 
/>


                <ul className="ingredients-list text-center text-lg font-Marcellus md:text-2xl">
                  {getIngredients(cocktail).map((ingredient, index) => (
                    <li key={index} className="text-sm md:text-base">{ingredient}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
    </div>
  );
};

export default Action;
>>>>>>> cbf2dfb (First push)
