import React from 'react';
import styles from './style.module.scss';
import bgGameRoad from '@/public/bgGameRoad.svg';
import activeCheck from '@/public/activeCheck.svg';
import Image from 'next/image';

const GameRoadItem1 = () => {
    return (
        <div className={styles.gameRoadItem}>
            <div className={styles.bgGameRoad}>
                <Image src={bgGameRoad} alt='bg-game-road' />
            </div>
            <ul>
                <li>
                    <Image src={activeCheck} alt='active' />
                    <span>Graphic Designs Characters</span>
                </li>
                <li>
                    <Image src={activeCheck} alt='active' />
                    <span>Marketplace</span>
                </li>
                <li>
                    <Image src={activeCheck} alt='active' />
                    <span>Launch Social + Website</span>
                </li>
                <li>
                    <Image src={activeCheck} alt='active' />
                    <span>Audit Contract</span>
                </li>
                <li>
                    <Image src={activeCheck} alt='active' />
                    <span>Marketing / Pre-Sale On UniCrypt</span>
                </li>
                <li>
                    <Image src={activeCheck} alt='active' />
                    <span>Public Launch On PancakeSwap</span>
                </li>
                <li>
                    <Image src={activeCheck} alt='active' />
                    <span>Public Launch NFT Battle</span>
                </li>
                <li>
                    <Image src={activeCheck} alt='active' />
                    <span>Public Launch NFT Marketplace</span>
                </li>
                <li>
                    <Image src={activeCheck} alt='active' />
                    <span>Coingecko, Coinmarketcap Listing</span>
                </li>
            </ul>
        </div>
    );
}

export default GameRoadItem1;
