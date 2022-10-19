const axios = require("axios");

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  try {
    const {
      pathParameters: { id },
    } = event;

    const res = await axios.get(
      process.env.STABILITY_DIFFUSION_URL + "/" + id,
      {
        headers: {
          authorization: `Token ${process.env.REPLICATE_TOKEN}`,
        },
      }
    );
    return {
      statusCode: 200,
      //  Uncomment below to enable CORS requests
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
      body: JSON.stringify(res.data),
    };
  } catch (e) {
    return {
      statusCode: 500,
      //  Uncomment below to enable CORS requests
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
      body: JSON.stringify({ error: e.message }),
    };
  }
};
