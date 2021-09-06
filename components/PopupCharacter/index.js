import React from 'react';
import styles from './style.module.scss';
import characterPopup from '@/public/characterPopup.svg';
import symbolPopup from '@/public/symbolPopup.svg';
import Image from 'next/image';

const PopupCharacter = () => {
    return (
        <div className={styles.character}>
            <div className={styles.header}>
                <div className={styles.innerHeader}>
                    <h2>monterast</h2>
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
                            <span>NFT ID</span>
                        </div>
                        <div>10000</div>
                    </li>
                    <li>
                        <div className={styles.symbol}>
                            <Image src={symbolPopup} alt='symbol-popup'/>
                            <span>RARE</span>
                        </div>
                        <div>3</div>
                    </li>
                    <li>
                        <div className={styles.symbol}>
                            <Image src={symbolPopup} alt='symbol-popup'/>
                            <span>LEVEL</span>
                        </div>
                        <div>1/100 exp</div>
                    </li>
                    <li>
                        <div className={styles.symbol}>
                            <Image src={symbolPopup} alt='symbol-popup'/>
                            <span>CALASS</span>
                        </div>
                        <div>shadow</div>
                    </li>
                    <li>
                        <div className={styles.symbol}>
                            <Image src={symbolPopup} alt='symbol-popup'/>
                            <span>SELLER</span>
                        </div>
                        <div>0x000444ffb</div>
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

export default PopupCharacter;
