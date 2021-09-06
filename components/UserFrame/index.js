import React from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import avatarChar from '@/public/avatarChar.png';
import symbol from '@/public/symbol.png';
import lionSymbol from '@/public/lionSymbol.png';

const UserFrame = () => {
    return (
        <div className={styles.infoUser}>
            <div className={styles.innerFrame}>
                <div className={styles.avatarContainer}>
                    <div className={styles.circleFrame}>
                        <div>
                            <div className={styles.avatar}>
                                <Image src={avatarChar} alt='avatar' />
                            </div>
                            <div className={styles.lvUser}>
                                <span>Ур. 35</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.nameUser}>
                    <div>
                        <Image  src={symbol} alt='symbol' />
                    </div>
                    <div className='position-absolute'>
                        <div className='mt-5'>
                            <Image width={50} height={50} src={lionSymbol} alt='lion-symbol' />
                        </div>
                        <h3 className={styles.charName}>Lion</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserFrame;
