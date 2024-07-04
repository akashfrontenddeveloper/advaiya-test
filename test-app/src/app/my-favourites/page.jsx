'use client'

import { useState, useEffect } from 'react';
import ListItems from "../_components/ListItems";
import PageHeading from "../_components/PageHeading";

const page = () => {
  const [favouriteItems, setFavouriteItems] = useState([]);

  useEffect(() => {
    const fetchFavouriteItems = async () => {
      const favId = JSON.parse(localStorage.getItem('idList')) || [];
      
      if (favId.length === 0) return;

      try {
        const fetches = favId.map(id =>
          fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then(res => res.json())
        );

        const results = await Promise.all(fetches);
        const meals = results.map(result => result.meals[0]);
        setFavouriteItems(meals);
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    fetchFavouriteItems();
  }, []);

  return (
    <>
      <PageHeading heading={"My Favourites"} />
      <ListItems items={favouriteItems} />
    </>
  );
};

export default page;
