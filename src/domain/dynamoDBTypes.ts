export type DynamoDBBinary = AWS.DynamoDB.DocumentClient.binaryType;
export type DynamoDBSet = number[] | string[] | DynamoDBBinary[];
export type DynamoDBItemValue = DynamoDBItem | number | string | boolean | DynamoDBBinary | DynamoDBSet;

export interface DynamoDBItem {
  [prop: string]: DynamoDBItemValue;
}
