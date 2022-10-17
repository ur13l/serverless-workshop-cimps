import React from "react";
import cimpsLogo from "../assets/img/cimps.png";

const Home = () => {
  return (
    <main className="w-full flex flex-col h-full">
      <nav className="h-20 bg-red-800 flex justify-center">
        <div className="container flex items-center">
          <h3 className="text-white">Serverless Workshop</h3>
        </div>
      </nav>
      <section className="flex justify-center items-start h-full flex-1">
        <div className="container flex flex-col items-center py-12 gap-8">
          <img src={cimpsLogo} alt="Logo del CIMPS" />
          <h1 className="text-red-800">
            Creación de aplicaciones sin servidor en la nube
          </h1>
        </div>
      </section>
    </main>
  );
};

export default Home;
