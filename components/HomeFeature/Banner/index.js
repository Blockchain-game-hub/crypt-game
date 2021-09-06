import React from 'react';
import styles from './style.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import rightArrow from '@/public/rightArrow.svg';
import beastBanner1 from '@/public/beastBanner1.svg';
import beastBanner2 from '@/public/beastBanner2.svg';
import beastBanner3 from '@/public/beastBanner3.svg';
import itemBanner1 from '@/public/itemBanner1.svg';
import itemBanner2 from '@/public/itemBanner2.svg';
import itemBanner3 from '@/public/itemBanner3.svg';

const Banner = ({}) => {

    return (
        <div className={styles.banner}>
            {/* <div className={styles.bannerBackground}></div> */}
            <div className={styles.bannerContent}>
                <div className='container'>
                    <div className={styles.bannerTitle}>
                        <h1>A Complete Platform Of <br/> Digital Creatures <br/>Universe </h1>   
                        <h6>Live On The Binance Smart Chain</h6>   
                        <Link href='/'>
                            <a className={styles.primaryBtn}> Sign up <Image  src={rightArrow} alt='right-arrow' /></a>
                        </Link>
                    </div>
                </div>
                
                <div className={styles.beastBanner1}>
                    <Image src={beastBanner1} alt='beast-1' />
                </div>
                <div className={styles.beastBanner2}>
                    <Image src={beastBanner2} alt='beast-2' />
                </div>
                <div className={styles.beastBanner3}>
                    <Image src={beastBanner3} alt='beast-3' />
                </div>
            </div>
            <div className={`${styles.bannerFeature} container`}>
                <div className="row">
                    <div className={`col-5 ${styles.featureItem}`}>
                        <div className={styles.bannerFeatureItem}>
                          <Image src={itemBanner1} alt='item-feature' />
                          <h4>kor farming</h4>
                        </div>
                        <div className={styles.bannerFeatureItem}>
                          <Image src={itemBanner2} alt='item-feature' />
                          <h4>kor game</h4>
                        </div>
                        <div className={styles.bannerFeatureItem}>
                          <Image src={itemBanner3} alt='item-feature' />
                          <h4>kor maket</h4>
                        </div>
                    </div>
                    <div className={`col-7 ${styles.featureContent}`}>
                        <h3 className={styles.featureTitle}>Feature</h3>
                        <h5 className={styles.featureExtraTitle}>
                            The First Ecosystem To Combine The Greatest Aspects Of Gaming And Digital Collectibles
                        </h5>
                        <p className={styles.featureDesc}>
                            CryptoZoon is inspired by Pokemon Story, our mission is to build a comprehensive platform 
                            of digital monsters that will enable millions of individuals to participate in the NFT and
                            blockchain-based gaming world in a simple, creative, and enjoyable way.
                        </p>
                        <Link href='/'>
                            <a className={styles.primaryBtn}>Read our story <Image  src={rightArrow} alt='right-arrow' /></a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner

