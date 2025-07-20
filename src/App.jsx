import React from 'react'
import Header from './Header';
import Nav from "./navbar";
import Best from "./Best"
import About from "./About";
import Action from "./Action";
import Filler from "./Filler";

const App = () => {
  return (
    <main className="bg-gray-100">
      <Nav />
      <section className="max-w-[1920px] mx-auto bg-white overflow-hidden space-y-0">
        <div className="xl:bg-grid xl:bg-center xl:bg-repeat-y fixed top-0 bottom-0 left-0 right-0 z-10"></div>
        <Header />
        <About />
        <Best />
        <Filler />
        <Action />
      </section>
    </main>
  );
};


export default App
