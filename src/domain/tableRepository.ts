import { Table } from "./table";

export interface TableRepository {
  get(tableName: string): Table;
}
