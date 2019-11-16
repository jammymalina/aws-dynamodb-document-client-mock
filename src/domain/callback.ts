import * as AWS from "aws-sdk";

export type BatchGetCallback = (
  err: Error,
  data: AWS.DynamoDB.DocumentClient.BatchGetItemOutput
) => void;

export type BatchWriteCallback = (
  err: Error,
  data: AWS.DynamoDB.DocumentClient.BatchWriteItemOutput
) => void;

export type DeleteCallback = (
  err: Error,
  data: AWS.DynamoDB.DocumentClient.DeleteItemOutput
) => void;

export type GetCallback = (
  err: Error,
  data: AWS.DynamoDB.DocumentClient.GetItemOutput
) => void;

export type PutCallback = (
  err: Error,
  data: AWS.DynamoDB.DocumentClient.PutItemOutput
) => void;

export type QueryCallback = (
  err: Error,
  data: AWS.DynamoDB.DocumentClient.QueryOutput
) => void;

export type ScanCallback = (
  err: Error,
  data: AWS.DynamoDB.DocumentClient.ScanOutput
) => void;

export type TransactGetCallback = (
  err: Error,
  data: AWS.DynamoDB.DocumentClient.TransactGetItemsOutput
) => void;

export type TransactWriteCallback = (
  err: Error,
  data: AWS.DynamoDB.DocumentClient.TransactWriteItemsOutput
) => void;

export type UpdateCallback = (
  err: Error,
  data: AWS.DynamoDB.DocumentClient.UpdateItemOutput
) => void;
