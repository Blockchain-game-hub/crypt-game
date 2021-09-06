import React from 'react';
import styles from './style.module.scss';
import Image from 'next/image'
import reddit from '@/public/reddit.svg'
import telegram from '@/public/telegram.svg'
import instagram from '@/public/instagram2.svg'
import twitter from '@/public/twitter.svg'
import facebook from '@/public/facebook.svg'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.community}>
                    <h3>join our community</h3>
                    <ul>
                        <li>
                            <a target="_blank" href="https://www.instagram.com/nftrarex1/" rel="noopener noreferrer">
                                <Image src={instagram} alt='instagram' />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.reddit.com/r/rarex/" rel="noopener noreferrer">
                                <Image src={reddit} alt='reddit' />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://t.me/NFTrarex" rel="noopener noreferrer">
                                <Image src={telegram} alt='telegram' />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://twitter.com/rarexnft" rel="noopener noreferrer">
                                <Image src={twitter} alt='twitter'  />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://twitter.com/rarexnft" rel="noopener noreferrer">
                                <Image src={facebook} alt='facebook'  />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.copyright}>
                    &copy;Copyright 2021 | KINGDOM OF ROSE
                </div>
            </div>
        </footer>
    );
}

export default Footer

