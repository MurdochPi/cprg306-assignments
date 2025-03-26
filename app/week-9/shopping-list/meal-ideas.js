"use client";

import React, { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!ingredient) return;
    const fetchMealIdeas = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        setMeals(data.meals || []);
      } catch (error) {
        console.error('Error fetching meal ideas:', error);
        setMeals([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Meal Ideas with {ingredient}</h2>
      {loading ? (
        <p>Loading meal ideas...</p>
      ) : meals.length > 0 ? (
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal} className="mb-2">
              <p className="text-lg">{meal.strMeal}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No meal ideas found for {ingredient}.</p>
      )}
    </div>
  );
};

export default MealIdeas;
