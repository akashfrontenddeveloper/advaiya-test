
import ListItems from '@/app/_components/ListItems';
import PageHeading from '@/app/_components/PageHeading'


async function fetchItemsByCategory(slugId) {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${slugId}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}


const page = async ({params}) => {
  const itemsByCategory = await fetchItemsByCategory(params.slug)

  return (
    <>
      <PageHeading heading={params.slug}/>
      <ListItems items={itemsByCategory?.meals} />
    </>
  )
}

export default page