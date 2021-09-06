import React from 'react';
import styles from './style.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import rightArrow from '@/public/rightArrow.svg';
import featureGame from '@/public/featureGame.svg';

const FeatureGame = ({}) => {

    return (
        <div className={styles.featureGame}>
            <div className='container'>
                <h3 className={styles.featureTitle}>Feature</h3>
                <div className="row">
                    <div className={`col-6 ${styles.featureItem}`}>
                        <div className={styles.bannerFeatureItem}>
                            <Image src={featureGame} alt='game-feature' />
                        </div>
                    
                    </div>
                    <div className={`col-6 ${styles.featureContent}`}>
                       
                        <h5 className={styles.featureExtraTitle}>
                            The Biggest Fighting Game On Blockchain
                        </h5>
                        <p className={styles.featureDesc}>
                            In 2016, the legendary game Pokemon Go created a global fever, attracting hundreds 
                            of millions of players. Inspired by Pokemon Go that resonates with the development 
                            of technology and Blockchain platforms, we have created a more upgraded, 
                            more interesting and special game version that brings great asset value for players – 
                            PolkaMonster.
                            IF YOU MISSED CRYPTOZOON, THIS IS YOUR SECOND CHANCE!
                            We are ready to create the full digital planet, making creatures in Game a 
                            valuable, exchangeable and profitable NFT asset. In a simple and innovative
                            way, PolkaMonster makes your investing experience as engaging and entertaining 
                            as a game.
                        </p>
                        <Link href='/'>
                            <a className={styles.primaryBtn}>Play game <Image  src={rightArrow} alt='right-arrow' /></a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
       
    );
}

export default FeatureGame

