import React from 'react';
import Image from 'next/image'
import styles from './style.module.scss'
import Link from 'next/link'
import Head from 'next/head'
import logo from '@/public/logo.svg';
import hoverMenu from '@/public/hoverMenu.svg';
import {listMenu} from '@/config/constants';

const Header = ({}) => {
   
    const listMenuLink = listMenu.map((item, index) => {
        return (
            <Link key={index} href={item.url} >
                <a className='collapseLink'>
                    {item.name}
                    <div>
                        <Image src={hoverMenu} alt='hover-menu' />
                    </div>
                </a>
            </Link>
        )
    })

    return (  
        <>
         <Head>
            <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous" />
        </Head>
        <nav className={`${styles.nav} navbar navbar-expand-lg fixed-top navbar-dark `}>
            <div className="container">
                <Link href='/'>
                    <a className={`navbar-brand ${styles.logo}`} >
                        <Image width={105} height={33} src={logo} alt='logo' />
                    </a>
                </Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className={`navbar-nav ${styles.navRight}`}>
                       {listMenuLink}
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
}

  


export default Header