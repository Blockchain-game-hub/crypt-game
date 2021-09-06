import React from 'react';
import styles from './style.module.scss'
import FeatureTotalItem from './FeatureTotalItem';

const FeatureTotal = ({}) => {

    return (
        <div className={styles.featureTotal}>
            <div className="container">
                <div className={styles.listFeature}>
                    <FeatureTotalItem title='Price' type='price' value='0.6888' />
                    <FeatureTotalItem title='Total NFT Minted' type='total' value='0.688'/>
                    <FeatureTotalItem title='Have not Migrate yet' type='migrate' value='688'/>
                </div>
            </div>
        </div>
    );
}

export default FeatureTotal

