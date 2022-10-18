import React from "react";
import PropTypes from "prop-types";

const PredictionsList = ({ predictions = [] }) => {
  return (
    <div className="grid w-full grid-cols-4 gap-4">
      {predictions.map((prediction) => (
        <div key={prediction.id}>
          <img src={prediction.output[0]} alt={prediction.input.prompt} />
        </div>
      ))}
    </div>
  );
};

PredictionsList.propTypes = {
  predictions: PropTypes.array,
};
PredictionsList.defaultValues = {
  predictions: [],
};

export default PredictionsList;
