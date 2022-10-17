import React, { useEffect, useState } from "react";
import { useReplicate } from "../hooks/replicate";
import loadingSvg from "../assets/svg/loading.svg";

let t;

const Home = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [loading, setLoading] = useState(false);
  const [predictionId, setPredictionId] = useState();
  const [output, setOutput] = useState();
  const [error, setError] = useState(false);
  const { createPrediction, getPrediction } = useReplicate();

  /**
   * Search method, creates a new prediction
   */
  const search = async () => {
    if (searchTerm.length > 3) {
      setLoading(true);
      setOutput(null);
      setPredictionId(null);
      try {
        const { id } = await createPrediction(searchTerm);
        setPredictionId(id);
        setError(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    } else {
      alert("Introduce un término válido");
    }
  };

  /**
   * Set the interval to make calls to the API stable diffusion
   */
  useEffect(() => {
    if (loading && predictionId) {
      t = setInterval(async () => {
        const { completed_at, output } = await getPrediction(predictionId);
        if (completed_at) {
          setPredictionId(null);
          setOutput(output[0]);
          setLoading(false);
        }
      }, 1000);
    } else {
      clearInterval(t);
    }
  }, [predictionId, getPrediction, loading]);

  return (
    <main className="w-full flex flex-col h-full">
      <nav className="h-20 bg-red-800 flex justify-center">
        <div className="container px-4 flex items-center">
          <h3 className="text-white">Serverless Workshop</h3>
        </div>
      </nav>
      <section className="flex justify-center items-start h-full flex-1">
        <div className="container px-4 relative flex flex-col items-center py-12 gap-8">
          <h1 className="text-red-800">
            Creación de aplicaciones sin servidor en la nube
          </h1>
          <div className="w-full flex gap-4">
            <input
              type="search"
              placeholder="Introduce el término de tu búsqueda"
              value={searchTerm}
              className="flex-1"
              onChange={(e) => {
                setSearchTerm(e.currentTarget.value);
              }}
            />

            <button
              onClick={search}
              className={`${loading ? "bg-gray-300 pointer-events-none" : ""}`}
            >
              Buscar
            </button>
          </div>
          {output && <img src={output} alt={searchTerm} />}
          {loading && <img src={loadingSvg} alt="Loading" />}
          {error && (
            <p className="text-red-500 text-xl">
              Hubo un error en la petición, intenta nuevamente.
            </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;
