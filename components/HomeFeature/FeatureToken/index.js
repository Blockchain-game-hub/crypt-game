import React from 'react';
import styles from './style.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import rightArrow from '@/public/rightArrow.svg';
import imgTokennomic from '@/public/imgTokennomic.svg';

const FeatureToken = ({}) => {

    return (
        <div className={styles.featureToken}>
            <div className='container'>
                <h3 className={styles.featureTitle}>TOKENNNOMIC</h3>
                <div className={styles.featureContent}>
                    <Image src={imgTokennomic} alt='tokennomic' />
                </div>
            </div>
        </div>
       
    );
}

export default FeatureToken

