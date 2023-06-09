'use client';

import Bases from './components/Bases';

import Vegetables from './components/Vegetables';

import Meats from './components/Meats';

import Sauces from './components/Sauces';

export default function Home() {
  return (
    <>
      <header>
        <h1>Menu</h1>
      </header>

      <div className="container">
        <Bases />

        <Vegetables />

        <Meats />

        <Sauces />
      </div>
    </>
  );
}
