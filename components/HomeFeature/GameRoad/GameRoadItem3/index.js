import React from 'react';
import styles from './style.module.scss';
import bgGameRoad from '@/public/bgGameRoad.svg';
import notActiveCheck from '@/public/notActiveCheck.svg';
import Image from 'next/image';

const GameRoadItem3 = () => {
    return (
        <div className={styles.gameRoadItem}>
            <div className={styles.bgGameRoad}>
                <Image src={bgGameRoad} alt='bg-game-road' />
            </div>
            <ul>
                <li>
                    <Image src={notActiveCheck} alt='not-active' />
                    <span>Game Studio/Partnerships</span>
                </li>
                <li>
                    <Image src={notActiveCheck} alt='not-active' />
                    <span>Expanded </span>
                </li>
                <li>
                    <Image src={notActiveCheck} alt='not-active' />
                    <span>ZOON Training Beta - Web</span>
                </li>
                <li>
                    <Image src={notActiveCheck} alt='not-active' />
                    <span>Version </span>
                </li>
                <li>
                    <Image src={notActiveCheck} alt='not-active' />
                    <span>More Exchanges</span>
                </li>
                <li>
                    <Image src={notActiveCheck} alt='not-active' />
                    <span>ZOON Dapp Mobile Game </span>
                </li>
                <li>
                    <Image src={notActiveCheck} alt='not-active' />
                    <span> CryptoZoon Global</span>
                </li>
                <li>
                    <Image src={notActiveCheck} alt='not-active' />
                    <span>Tournament</span>
                </li>
                <li>
                    <Image src={notActiveCheck} alt='not-active' />
                    <span>Coingecko, Coinmarketcap Listing</span>
                </li>
            </ul>
        </div>
    );
}

export default GameRoadItem3;
