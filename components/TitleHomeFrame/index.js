import React from 'react';
import styles from './style.module.scss'
import Image from 'next/image';
import frameHeader from '@/public/frameHeader.png';
import titleFrameInner from '@/public/titleFrameInner.svg';
import titleFrameOutner from '@/public/titleFrameOutner.svg';

const TitleHomeFrame = ({title}) => {
    return (
        <div className='position-relative'>
            <div className={styles.mainHeader}>
                <div className={styles.header}>
                    <Image src={titleFrameOutner} alt='character'/>
                    <div className={styles.titleFrameInner}>
                        <Image src={titleFrameInner} alt='character'/>
                    </div>
                    <h3>{title}</h3>
                </div>
            </div>
            <div className={styles.headerExtra}>
                <div className={styles.extra}>
                    <Image src={frameHeader} alt='extra-frame'/>
                </div>
            </div>
        </div>
    );
}

export default TitleHomeFrame;
