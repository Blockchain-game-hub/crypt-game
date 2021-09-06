import styles from './style.module.scss';
import {useState} from 'react';
import dynamic from 'next/dynamic'
import Banner from '@/components/HomeFeature/Banner';
import FeatureTotal from '@/components/HomeFeature/FeatureTotal';
import FeatureGame from '@/components/HomeFeature/FeatureGame';
import FeatureToken from '@/components/HomeFeature/FeatureToken';
import FeatureCharacters from '@/components/HomeFeature/FeatureCharacters';
import GameRoad from '@/components/HomeFeature/GameRoad';
import Footer from '@/components/Footer';

export default function Home({}) {

  return (
    <>
      <Banner />    
      <FeatureTotal />
      <FeatureGame />
      <FeatureToken />
      <FeatureCharacters />
      <GameRoad />
      <Footer />
    </>
  )
}

// export async function getStaticProps() {

 
// }