import MealCategories from "../_components/MealCategories";
import PageHeading from "../_components/PageHeading";

async function fetchMealCategories() {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}


const page = async () => {
  const categoriesData = await fetchMealCategories()

  return (
    <>
      <PageHeading heading={'Menu'}/>
      <MealCategories items={categoriesData.categories}/>
    </>
    
  )
}

export default page