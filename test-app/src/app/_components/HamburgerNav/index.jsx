'use client'

import { useState } from 'react';
import {Button, Offcanvas, Nav} from 'react-bootstrap';
import style from './index.module.scss'
import Link from 'next/link';
import navbarData from '@/app/_data/navbarData.json'
import { RxHamburgerMenu } from "react-icons/rx";


const HamburgerNav = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="link" className={style.hamburger} onClick={handleShow}>
        <RxHamburgerMenu />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton />
        <Offcanvas.Body className={style.offcanvasBody}>
            <Nav className="d-flex flex-column">
                {
                    navbarData?.map((item, i)=> {
                        return (
                            <Link key={i} href={item.link} onClick={handleClose}>{item.text}</Link>
                        )
                    })
                }
            </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default HamburgerNav