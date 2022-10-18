/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPrediction = /* GraphQL */ `
  mutation CreatePrediction(
    $input: CreatePredictionInput!
    $condition: ModelPredictionConditionInput
  ) {
    createPrediction(input: $input, condition: $condition) {
      id
      version
      created_at
      started_at
      completed_at
      hardware
      webhook_completed
      source
      status
      input {
        prompt
      }
      output
      urls {
        get
        cancel
      }
      error
      logs
      metrics {
        predict_time
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePrediction = /* GraphQL */ `
  mutation UpdatePrediction(
    $input: UpdatePredictionInput!
    $condition: ModelPredictionConditionInput
  ) {
    updatePrediction(input: $input, condition: $condition) {
      id
      version
      created_at
      started_at
      completed_at
      hardware
      webhook_completed
      source
      status
      input {
        prompt
      }
      output
      urls {
        get
        cancel
      }
      error
      logs
      metrics {
        predict_time
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePrediction = /* GraphQL */ `
  mutation DeletePrediction(
    $input: DeletePredictionInput!
    $condition: ModelPredictionConditionInput
  ) {
    deletePrediction(input: $input, condition: $condition) {
      id
      version
      created_at
      started_at
      completed_at
      hardware
      webhook_completed
      source
      status
      input {
        prompt
      }
      output
      urls {
        get
        cancel
      }
      error
      logs
      metrics {
        predict_time
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
