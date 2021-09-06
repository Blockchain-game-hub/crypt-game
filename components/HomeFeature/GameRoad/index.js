import React from 'react';
import styles from './style.module.scss'
import Link from 'next/link'
import GameRoadItem1 from './GameRoadItem1';
import GameRoadItem2 from './GameRoadItem2';
import GameRoadItem3 from './GameRoadItem3';

const GameRoad = ({}) => {

    return (
        <div className={styles.gameRoad}>
            <div className='container'>
                <h3 className={styles.featureTitle}>game road</h3>
                <div className={styles.listGameRoad}>
                    <GameRoadItem1 />
                    <GameRoadItem2 />
                    <GameRoadItem3 />
                </div>
            </div>
        </div>
    );
}

export default GameRoad

