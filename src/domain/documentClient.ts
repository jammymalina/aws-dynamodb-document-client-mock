import * as AWS from "aws-sdk";
import { DocumentClientCallback } from "./callback";
import { DynamoDBSet } from "./dynamoDBTypes";

export interface DocumentClient {
  batchGet(
    params: AWS.DynamoDB.DocumentClient.BatchGetItemInput,
    callback: DocumentClientCallback<AWS.DynamoDB.DocumentClient.BatchGetItemOutput>
  ): void;
  batchWrite(
    params: AWS.DynamoDB.DocumentClient.BatchWriteItemInput,
    callback: DocumentClientCallback<AWS.DynamoDB.DocumentClient.BatchWriteItemOutput>
  ): void;
  createSet(
    list: DynamoDBSet,
    options?: AWS.DynamoDB.DocumentClient.CreateSetOptions
  ): AWS.DynamoDB.DocumentClient.DynamoDbSet;
  delete(
    params: AWS.DynamoDB.DocumentClient.DeleteItemInput,
    callback: DocumentClientCallback<AWS.DynamoDB.DocumentClient.DeleteItemOutput>
  ): void;
  get(
    params: AWS.DynamoDB.DocumentClient.GetItemInput,
    callback: DocumentClientCallback<AWS.DynamoDB.DocumentClient.GetItemOutput>
  ): void;
  scan(
    params: AWS.DynamoDB.DocumentClient.ScanInput,
    callback: DocumentClientCallback<AWS.DynamoDB.DocumentClient.ScanOutput>
  ): void;
  transactGet(
    params: AWS.DynamoDB.DocumentClient.TransactGetItemsInput,
    callback: DocumentClientCallback<AWS.DynamoDB.DocumentClient.TransactGetItemsOutput>
  ): void;
  transactWrite(
    params: AWS.DynamoDB.DocumentClient.TransactWriteItemsInput,
    callback: DocumentClientCallback<AWS.DynamoDB.DocumentClient.TransactWriteItemsOutput>
  ): void;
  update(
    params: AWS.DynamoDB.DocumentClient.UpdateItemInput,
    callback: DocumentClientCallback<AWS.DynamoDB.DocumentClient.UpdateItemOutput>
  ): void;
}
