import { ModelInit, MutableModel } from "@aws-amplify/datastore";

export declare class Input {
  readonly prompt?: string | null;
  constructor(init: ModelInit<Input>);
}

export declare class Urls {
  readonly get?: string | null;
  readonly cancel?: string | null;
  constructor(init: ModelInit<Urls>);
}

export declare class Metrics {
  readonly predict_time?: number | null;
  constructor(init: ModelInit<Metrics>);
}

type PredictionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Prediction {
  readonly id: string;
  readonly version: string;
  readonly created_at?: string | null;
  readonly started_at?: string | null;
  readonly completed_at?: string | null;
  readonly hardware?: string | null;
  readonly webhook_completed?: string | null;
  readonly source?: string | null;
  readonly status: string;
  readonly input?: Input | null;
  readonly output?: (string | null)[] | null;
  readonly urls?: Urls | null;
  readonly error?: string | null;
  readonly logs?: string | null;
  readonly metrics?: Metrics | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Prediction, PredictionMetaData>);
  static copyOf(source: Prediction, mutator: (draft: MutableModel<Prediction, PredictionMetaData>) => MutableModel<Prediction, PredictionMetaData> | void): Prediction;
}