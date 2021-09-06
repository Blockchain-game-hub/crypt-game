import React from 'react';
import styles from './style.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import rightArrow from '@/public/rightArrow.svg';
import character1 from '@/public/character1.svg';
import character2 from '@/public/character2.svg';
import character3 from '@/public/character3.svg';
import moonCharacter1 from '@/public/moonCharacter1.svg';
import moonCharacter2 from '@/public/moonCharacter2.svg';
import CharacterItem from '@/components/CharacterItem';

const FeatureCharacters = ({}) => {

    return (
        <div className={styles.featureCharacters}>
            <div className='container'>
                <div className={styles.featureContent}>
                    <h3 className={styles.featureTitle}>CHARACTERS</h3>
                 
                    <p className={styles.featureDesc}>
                        With beautiful graphics, attractive storyline and extremely rich character 
                        and equipment system, users will be really fascinated by the challenges 
                        in Polka Monster. The first test version is coming soon. Follow us so
                        you don’t miss out on this amazing project!
                    </p>
                    <Link href='/'>
                        <a className={styles.primaryBtn}>Play a game <Image  src={rightArrow} alt='right-arrow' /></a>
                    </Link>
                </div>
            </div>
            <div className={styles.listCharacters}>
                <div className="row m-0">
                    <div className="col-6">
                        <div className={styles.charactersLeft}>
                            <div>
                                <Image src={character1} alt='character' />
                            </div>
                            <div>
                                <Image src={character2} alt='character' />
                            </div>
                            <div>
                                <Image src={character3} alt='character' />
                            </div>
                        </div>
                    </div>
                    <div className="col-6 position-relative">
                        <div className={styles.bgRight}>
                            <Image src={moonCharacter1} alt='moon-character' />
                            <Image src={moonCharacter2} alt='moon-character' />
                        </div>
                        <div className={styles.charactersRight}>
                            <CharacterItem />
                            <CharacterItem />
                            <CharacterItem />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeatureCharacters

