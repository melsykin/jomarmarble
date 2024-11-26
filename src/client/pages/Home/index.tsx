import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Reviews from '../Reviews';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Reviews />
    </>
  );
}