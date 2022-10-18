/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePrediction = /* GraphQL */ `
  subscription OnCreatePrediction(
    $filter: ModelSubscriptionPredictionFilterInput
  ) {
    onCreatePrediction(filter: $filter) {
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
export const onUpdatePrediction = /* GraphQL */ `
  subscription OnUpdatePrediction(
    $filter: ModelSubscriptionPredictionFilterInput
  ) {
    onUpdatePrediction(filter: $filter) {
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
export const onDeletePrediction = /* GraphQL */ `
  subscription OnDeletePrediction(
    $filter: ModelSubscriptionPredictionFilterInput
  ) {
    onDeletePrediction(filter: $filter) {
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
