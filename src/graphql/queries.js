/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPrediction = /* GraphQL */ `
  query GetPrediction($id: ID!) {
    getPrediction(id: $id) {
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
export const listPredictions = /* GraphQL */ `
  query ListPredictions(
    $filter: ModelPredictionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPredictions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPredictions = /* GraphQL */ `
  query SyncPredictions(
    $filter: ModelPredictionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPredictions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
