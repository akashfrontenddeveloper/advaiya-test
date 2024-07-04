import { Container } from 'react-bootstrap'
import style from './index.module.scss'
import HamburgerNav from '../HamburgerNav'


const Header = () => {
  return (
    <header className={style.header}>
        <Container>
            <HamburgerNav/>
        </Container>
    </header>
  )
}

export default Header