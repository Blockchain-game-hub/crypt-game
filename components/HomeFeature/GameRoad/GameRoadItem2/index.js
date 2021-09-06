import React from 'react';
import styles from './style.module.scss';
import bgGameRoad from '@/public/bgGameRoad.svg';
import activeCheck from '@/public/activeCheck.svg';
import notActiveCheck from '@/public/notActiveCheck.svg';
import Image from 'next/image';

const GameRoadItem2 = () => {
    return (
        <div className={styles.gameRoadItem}>
            <div className={styles.bgGameRoad}>
                <Image src={bgGameRoad} alt='bg-game-road' />
            </div>
            <ul>
                <li>
                    <Image src={activeCheck} alt='active' />
                    <span>CEX Listing </span>
                </li>
                <li>
                    <Image src={activeCheck} alt='not-active' />
                    <span>Public Launch Against Yaki Bosses</span>
                </li>
                <li>
                    <Image src={notActiveCheck} alt='not-active' />
                    <span>Public Launch NFT Farming</span>
                </li>
                <li>
                    <Image src={notActiveCheck} alt='not-active' />
                    <span>Influencer Marketing</span>
                </li>
                <li>
                    <Image src={notActiveCheck} alt='not-active' />
                    <span>Release More ZOAN NFT Characters</span>
                </li>
                <li>
                    <Image src={notActiveCheck} alt='not-active' />
                    <span>ZOON Training Alpha Version</span>
                </li>
                <li>
                    <Image src={notActiveCheck} alt='not-active' />
                    <span> ZOON&apos;s Item </span>
                </li>
                <li>
                    <Image src={notActiveCheck} alt='not-active' />
                    <span>Expanding Team</span>
                </li>
            </ul>
        </div>
    );
}

export default GameRoadItem2;
