import React, {useRef, useEffect, useState} from 'react';
import styles from './style.module.scss';
import CharacterItem from '@/components/CharacterItem'
import UserFrame from '@/components/UserFrame'
import TitleHomeFrame from '@/components/TitleHomeFrame'

const Shop = () => {

    const refListItem = useRef();
    const [widthList, setWidthList] = useState();

    useEffect(() => {
        setWidthList(refListItem.current.clientWidth)
    },[])

    return (
        <div className={styles.shop}>
            <div className='container'>
                <UserFrame />
                <div className={styles.mainContainer}>
                    <div className={styles.innerBorder}>
                        <TitleHomeFrame title='Castle' />
                   
                        <div className={styles.innerContainer}>
                            <div ref={refListItem} className={widthList > 940 ? `${styles.listItem} ${styles.gridFour}` : `${styles.listItem} ${styles.gridThree}`}>
                                <CharacterItem />
                                <CharacterItem />
                                <CharacterItem />
                                <CharacterItem />
                                <CharacterItem />
                                <CharacterItem />
                                <CharacterItem />
                                <CharacterItem />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;
