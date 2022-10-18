import React, { useEffect, useState } from "react";
import { useReplicate } from "../hooks/replicate";
import loadingSvg from "../assets/svg/loading.svg";
import PredictionsList from "../components/PredictionsList";
import PredictionItem from "../components/PredictionItem";
import { API, graphqlOperation } from "aws-amplify";
import { listPredictions } from "../graphql/queries";

let t;

const Home = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState();
  const [predictions, setPredictions] = useState([]);
  const [error, setError] = useState(false);
  const { createPrediction, getPrediction } = useReplicate();

  /**
   * Search method, creates a new prediction
   */
  const search = async () => {
    if (searchTerm.length > 3) {
      setLoading(true);
      setPrediction(null);
      try {
        const res = await createPrediction(searchTerm);
        setPrediction(res);
        setError(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    } else {
      alert("Introduce un término válido.");
    }
  };

  const onCreatedPrediction = (prediction) => {
    setPredictions([prediction, ...predictions]);
  };

  /**
   * Set the interval to make calls to the API stable diffusion
   */
  useEffect(() => {
    if (loading && prediction?.id) {
      t = setInterval(async () => {
        const res = await getPrediction(prediction.id);
        if (res.completed_at) {
          setPrediction(res);
          setLoading(false);
        }
      }, 1000);
    } else {
      clearInterval(t);
    }
  }, [prediction, getPrediction, loading]);

  useEffect(() => {
    const get = async () => {
      const {
        data: {
          listPredictions: { items },
        },
      } = await API.graphql(graphqlOperation(listPredictions));
      setPredictions(
        items.sort((a, b) => {
          const aDate = new Date(a.completed_at);
          const bDate = new Date(b.completed_at);
          console.log(aDate, bDate);
          return bDate.getTime() - aDate.getTime();
        })
      );
    };
    get();
  }, []);

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
          {prediction?.output?.length && (
            <PredictionItem
              prediction={prediction}
              onCreatedPrediction={onCreatedPrediction}
            />
          )}
          {loading && <img src={loadingSvg} alt="Loading" />}
          {error && (
            <p className="text-red-500 text-xl">
              Hubo un error en la petición, intenta nuevamente.
            </p>
          )}
          <h2>Predicciones guardadas</h2>
          <PredictionsList predictions={predictions} />
        </div>
      </section>
    </main>
  );
};

export default Home;
