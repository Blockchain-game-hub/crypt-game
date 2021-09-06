import React, {useRef, useEffect, useState} from 'react';
import styles from './style.module.scss';
import CharacterItem from '@/components/CharacterItem'
import fightVs from '@/public/fightVs.svg';
import Image from 'next/image';

const Fight = () => {

    return (
        <div className={styles.fight}>
            <div className='container'>
                <div className={styles.mainContainer}>
                    <CharacterItem />
                    <div className={styles.imageVs}> 
                        <Image src={fightVs} alt='vs'/>
                    </div>
                    <CharacterItem />
                </div>
                <div className={styles.progress}>
                    <span style={{width: "70%"}}></span>
                </div>
            </div>
        </div>
    );
}

export default Fight;
