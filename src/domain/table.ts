import { DynamoDBItem } from "./dynamoDBTypes";

export interface Table {
  name: string;
  items: DynamoDBItem[];
}
