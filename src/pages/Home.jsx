import React from "react";

import Header from "../components/header";

const Home = () => {
  return (
    <div className="bg-white dark:bg-black flex flex-col min-h-screen overflow-hidden">
      <Header />

      <div className="container mx-auto relative h-screen w-screen">
        <h1 className="text-5xl text-center font-bold my-60">Develop Your Dream ...</h1>
      </div>
    </div>
  );
};

export default Home;
