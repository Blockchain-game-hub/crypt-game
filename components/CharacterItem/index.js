import React from 'react';
import styles from './style.module.scss';
import beastCharacter1 from '@/public/beastCharacter1.svg';
import Union from '@/public/Union.png';
import Image from 'next/image';

const CharacterItem = () => {
    return (
        <div className={styles.characterContainer}>
            <div className={styles.character}>
                <div className={styles.centerUnions}>
                    <Image src={Union} alt='union' />
                </div>
                <div className={styles.bgFrame}>
                    <Image src={beastCharacter1} alt='beast-character' />
                </div>
                <h4>kor maket</h4>
            </div>
        </div>
        
    );
}

export default CharacterItem;
