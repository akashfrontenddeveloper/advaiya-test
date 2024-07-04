import Link from 'next/link'
import style from './index.module.scss'
import homeWidgetData from '@/app/_data/homeWidgetData.json'

const HomeWidgets = () => {
  return (
    <div className={style.homeWidgets}>
        {
            homeWidgetData.map((item)=> {
                return (
                    <Link href={item.link}>{item.text}</Link>
                )
            })
        }
    </div>
  )
}

export default HomeWidgets
