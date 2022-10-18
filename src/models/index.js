// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Prediction, Input, Urls, Metrics } = initSchema(schema);

export {
  Prediction,
  Input,
  Urls,
  Metrics
};