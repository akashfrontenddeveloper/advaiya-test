import style from './index.module.scss'

const PageHeading = (props) => {
    const {heading} = props;

  return (
    <h1 className={style.pageHeading}>{heading}</h1>
  )
}

export default PageHeading