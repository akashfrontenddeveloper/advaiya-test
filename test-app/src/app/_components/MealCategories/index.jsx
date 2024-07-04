import Image from 'next/image';
import style from './index.module.scss'
import Link from 'next/link';


const MealCategories = (props) => {

    const {items} = props;

    return (
        <div className={style.mealCategoriesList}>
            {
                items?.map((item)=> {
                    return (
                        <Link href={`/menu/${item.strCategory}`} key={item.id} className={style.mealCategoriesItem}>
                            <Image
                                src={item.strCategoryThumb}
                                alt={item.strCategory}
                                className={style.mealCategoriesImage}
                                width={100}
                                height={100}
                                priority
                            />
                            <h4>{item.strCategory}</h4>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default MealCategories