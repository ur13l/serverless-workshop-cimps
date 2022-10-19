import { API } from "aws-amplify";

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
    const res = await API.post("predictionsapi", "/predictions/create", {
      body: {
        input: { prompt },
      },
    });
    return res;
  };

  /**
   * We need to call it after the creation of the prediction.
   * It will return the prediction status, and once its creation is successfully completed, should return the image.
   * @param {string} id
   * @returns
   */
  const getPrediction = async (id) =>
    await API.get("predictionsapi", "/predictions/" + id);

  return { createPrediction, getPrediction };
};
