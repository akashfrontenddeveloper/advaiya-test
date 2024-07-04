'use client'
import style from './index.module.scss';
import { useEffect, useState } from 'react';
import PageHeading from "../_components/PageHeading";
import RandomMeal from "../_components/RandomMeal";

const fetchRandomMeal = async () => {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

const Page = () => {
  const [randomMealItem, setRandomMealItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getRandomMeal = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchRandomMeal();
      setRandomMealItem(data.meals[0]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRandomMeal();
  }, []);

  return (
    <>
      <PageHeading heading={"Random Meal"} />
      {loading && <div className={style.loader}>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {randomMealItem && <RandomMeal item={randomMealItem} onGenerate={getRandomMeal} />}
    </>
  );
};

export default Page;
