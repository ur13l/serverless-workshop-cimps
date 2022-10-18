/**
 * Hook that isolates the Replicate API calls
 * @returns
 */
export const useReplicate = () => {
  /**
   * Creates a new prediction on stable diffusion API
   * It only triggers prediction creation, after that we will need to query the image status.
   * @param {string} prompt
   */
  const createPrediction = async (prompt) => {
    const res = await fetch(process.env.REACT_APP_STABILITY_DIFFUSION_URL, {
      method: "POST",
      body: JSON.stringify({
        version: process.env.REACT_APP_STABILITY_DIFFUSION_VERSION,
        input: { prompt },
      }),
      headers: {
        authorization: `Token ${process.env.REACT_APP_REPLICATE_TOKEN}`,
      },
    });
    return await res.json();
  };

  /**
   * We need to call it after the creation of the prediction.
   * It will return the prediction status, and once its creation is successfully completed, should return the image.
   * @param {string} id
   * @returns
   */
  const getPrediction = async (id) => {
    const res = await fetch(
      `${process.env.REACT_APP_STABILITY_DIFFUSION_URL}/${id}`,
      {
        headers: {
          authorization: `Token ${process.env.REACT_APP_REPLICATE_TOKEN}`,
        },
      }
    );
    const prediction = await res.json();
    if (prediction.completed_at) {
      prediction.created_at = new Date(prediction.created_at);
      prediction.completed_at = new Date(prediction.completed_at);
      prediction.started_at = new Date(prediction.started_at);
    }
    return prediction;
  };

  return { createPrediction, getPrediction };
};
