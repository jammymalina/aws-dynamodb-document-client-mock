import * as AWS from "aws-sdk";

export type DocumentClientCallback<T> = (err: Error, data: T) => void;
