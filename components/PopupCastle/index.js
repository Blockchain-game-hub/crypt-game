import React from 'react';
import styles from './style.module.scss';
import characterPopup from '@/public/characterPopup.svg';
import symbolPopup from '@/public/symbolPopup.svg';
import Image from 'next/image';

const PopupCastle = () => {
    return (
        <div className={styles.character}>
            <div className={styles.header}>
                <div className={styles.innerHeader}>
                    <h2>castle stone</h2>
                    <h5>details</h5>
                </div>
            </div>
            <div className={styles.detail}>
                <div className={styles.detailImg}>
                    <Image  src={characterPopup} alt='character-popup'/>
                </div>
                <ul>
                    <li>
                        <div className={styles.symbol}>
                            <Image src={symbolPopup} alt='symbol-popup'/>
                            <span>Price</span>
                        </div>
                        <div>10000</div>
                    </li>
                </ul>
            </div>
            <div className={styles.footer}>
                <div className={styles.action}>buy kor</div>
                <div className={styles.action}>connect</div>
            </div>
        </div>
    );
}

export default PopupCastle;
