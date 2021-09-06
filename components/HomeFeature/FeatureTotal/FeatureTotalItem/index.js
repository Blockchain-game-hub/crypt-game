import React from 'react';
import styles from './style.module.scss';
import Image from 'next/image'
import titleTotalInner from '@/public/titleTotalInner.svg';
import titleTotalOutner from '@/public/titleTotalOutner.svg';
import totalImg1 from '@/public/totalImg1.svg';
import totalImg2 from '@/public/totalImg2.svg';
import totalImg3 from '@/public/totalImg3.svg';
import Union from '@/public/Union.png';

const FeatureTotalItem = ({title, type, value}) => {
    return (
        <div className={styles.totalItem}>
            <div className='position-relative'>
                <div className={styles.mainHeader}>
                    <div className={styles.header}>
                        <Image src={titleTotalOutner} alt='character'/>
                        <div className={styles.titleFrameInner}>
                            <Image src={titleTotalInner} alt='character'/>
                        </div>
                        <h3>{title}</h3>
                    </div>
                </div>
            </div>
            <div className={styles.union}>
                <Image src={Union} alt='Union' />
            </div>
            <div className={styles.content}>
                <Image src={type == 'price' 
                            ? totalImg1
                            : type == 'total' 
                            ? totalImg2   
                            : totalImg3
                            } 
                        alt='total' />
                <h4>{value}</h4>
            </div>
        </div>
    );
}

export default FeatureTotalItem;
