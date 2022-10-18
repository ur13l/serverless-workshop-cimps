import React, { useState } from "react";
import PropTypes from "prop-types";
import { createPrediction as createPredictionAPI } from "../graphql/mutations";
import { API, graphqlOperation } from "@aws-amplify/api";

const PredictionItem = ({ prediction, onCreatedPrediction = () => null }) => {
  const [loading, setLoading] = useState(false);

  const savePrediction = async () => {
    setLoading(true);

    try {
      const {
        data: { createPrediction },
      } = await API.graphql(
        graphqlOperation(createPredictionAPI, { input: prediction })
      );
      onCreatedPrediction(createPrediction);
      setLoading(false);
    } catch (error) {
      alert("Ocurrió un error al guardar el elemento");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <img src={prediction?.output[0]} alt={prediction.input.prompt} />
      <button
        onClick={savePrediction}
        className={`${loading ? "bg-gray-300 pointer-events-none" : ""}`}
      >
        Guardar
      </button>
    </div>
  );
};

PredictionItem.propTypes = {
  prediction: PropTypes.object.isRequired,
  onCreatedPrediction: PropTypes.func,
};

PredictionItem.defaultValues = {
  onCreatedPrediction: () => null,
};

export default PredictionItem;
