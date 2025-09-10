import React from 'react';
import Hero from '../components/Home/Hero';
import ImpactStats from '../components/Home/ImpactStats';
import FeaturedPhotos from '../components/Home/FeaturedPhotos';
import Partners from '../components/Home/Partners';
import Newsletter from '../components/Home/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <FeaturedPhotos />
      <Partners />
      <Newsletter />
    </>
  );
}