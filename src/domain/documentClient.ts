import * as AWS from "aws-sdk";
import {
  BatchGetCallback,
  BatchWriteCallback,
  DeleteCallback,
  GetCallback,
  ScanCallback,
  TransactGetCallback,
  TransactWriteCallback,
  UpdateCallback,
} from "./callback";
import { DynamoDBSet } from "./dynamoDBTypes";

export interface DocumentClient {
  batchGet(params: AWS.DynamoDB.DocumentClient.BatchGetItemInput, callback: BatchGetCallback): void;
  batchWrite(params: AWS.DynamoDB.DocumentClient.BatchWriteItemInput, callback: BatchWriteCallback): void;
  createSet(
    list: DynamoDBSet,
    options?: AWS.DynamoDB.DocumentClient.CreateSetOptions
  ): AWS.DynamoDB.DocumentClient.DynamoDbSet;
  delete(params: AWS.DynamoDB.DocumentClient.DeleteItemInput, callback: DeleteCallback): void;
  get(params: AWS.DynamoDB.DocumentClient.GetItemInput, callback: GetCallback): void;
  scan(params: AWS.DynamoDB.DocumentClient.ScanInput, callback: ScanCallback): void;
  transactGet(params: AWS.DynamoDB.DocumentClient.TransactGetItemsInput, callback: TransactGetCallback): void;
  transactGet(params: AWS.DynamoDB.DocumentClient.TransactGetItemsInput, callback: TransactGetCallback): void;
  transactWrite(params: AWS.DynamoDB.DocumentClient.TransactWriteItemsInput, callback: TransactWriteCallback): void;
  update(params: AWS.DynamoDB.DocumentClient.UpdateItemInput, callback: UpdateCallback): void;
}
