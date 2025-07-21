import React, { useState, useEffect, useRef } from "react";
import { FaCocktail, FaGlassMartiniAlt } from "react-icons/fa";

const COCKTAIL_API_BASE = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

const Action = () => {
  const [cocktailList, setCocktailList] = useState([]);
  const [loading, setLoading] = useState(true);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;

    const fetchUniqueCocktails = async (targetCount = 30) => {
      try {
        const uniqueCocktails = new Map();
        const maxFetches = 50;
        let fetchesDone = 0;

        while (uniqueCocktails.size < targetCount && fetchesDone < maxFetches) {
          const response = await fetch(COCKTAIL_API_BASE);
          const data = await response.json();
          const cocktail = data?.drinks?.[0];

          if (cocktail && !uniqueCocktails.has(cocktail.idDrink)) {
            uniqueCocktails.set(cocktail.idDrink, cocktail);
          }
          fetchesDone++;
        }

        if (isMounted.current) {
          setCocktailList(Array.from(uniqueCocktails.values()));
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching cocktails:", error);
        if (isMounted.current) {
          setLoading(false);
        }
      }
    };

    fetchUniqueCocktails();

    return () => {
      isMounted.current = false;
    };
  }, []);

  const getIngredients = (cocktail) => {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) { 
      const ingredient = cocktail[`strIngredient${i}`];
      const measure = cocktail[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push(`${ingredient}${measure ? ` - ${measure}` : ""}`);
      }
    }
    return ingredients;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#faca8c] to-[#f3decb]">
      <div className="container mx-auto px-4 py-16">
        <section>
          <h2 className="text-center text-4xl lg:text-6xl font-extrabold font-Oswald mb-10 bg-gradient-to-r from-orange-500 to-[#f0cd09] text-transparent bg-clip-text ">
            Our Cocktail Selection{" "}
            <span className="text-orange-700">FOR YOU</span> Today
          </h2>
          <p className="text-center text-lg md:text-xl text-gray-800 md:text-gray-600 max-w-2xl mx-auto mb-16 mt-8 font-Marcellus md:font-semibold px-6 ">
            Discover your next favorite cocktail, randomly curated just for you.
            🍸 Whether you're into something strong or sweet, we’ve got a
            surprise waiting.
          </p>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {Array.from({ length: 8 }).map((_, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl shadow-md animate-pulse space-y-4 h-[360px]"
                >
                  <div className="h-5 w-24 bg-gray-300 rounded-full"></div>
                  <div className="h-40 w-full bg-gray-200 rounded-xl"></div>
                  <ul className="space-y-2">
                    <li className="h-4 w-3/4 bg-gray-200 rounded"></li>
                    <li className="h-4 w-2/3 bg-gray-200 rounded"></li>
                    <li className="h-4 w-1/2 bg-gray-200 rounded"></li>
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-6 md:mx-0">
              {cocktailList.map((cocktail, i) => (
                <div
                  key={cocktail.idDrink}
                  className="relative bg-white/60 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/30 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:brightness-110 hover:ring-2 hover:ring-[#ffb347] hover:drop-shadow-[0_0_15px_rgba(255,180,70,0.5)] animate-fade-in"
                  style={{
                    animationDelay: `${i * 0.05}s`,
                    animationFillMode: "backwards",
                  }}
                >
                  <div
                    className={`flex items-center justify-center mb-3 py-1 px-3 rounded-full text-white font-semibold text-sm w-fit mx-auto shadow-md ${
                      cocktail.strAlcoholic === "Alcoholic"
                        ? "bg-gradient-to-r from-[#c31432] to-[#240b36]"
                        : "bg-gradient-to-r from-[#56ab2f] to-[#a8e063]"
                    }`}
                  >
                    {cocktail.strAlcoholic === "Alcoholic" ? (
                      <FaCocktail className="mr-2" />
                    ) : (
                      <FaGlassMartiniAlt className="mr-2" />
                    )}
                    {cocktail.strAlcoholic}
                  </div>

                  <h3 className="text-center text-xl lg:text-2xl font-bold font-Oswald mb-3 text-[#1d3b5f] drop-shadow-sm">
                    {cocktail.strDrink}
                  </h3>

                  <div className="overflow-hidden rounded-2xl mb-4 shadow-md">
                    <img
                      src={cocktail.strDrinkThumb}
                      alt={cocktail.strDrink}
                      className="w-full h-48 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <ul className="text-left text-sm md:text-base font-Marcellus space-y-1 text-gray-800">
                    {getIngredients(cocktail).map((ingredient, idx) => (
                      <li key={idx}>• {ingredient}</li>
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
