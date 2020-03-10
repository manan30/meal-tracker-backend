export default class ResponseStatus {
  status: boolean;
  code: number;
  message: string;
  specificData?: any;

  constructor(
    status: boolean,
    code: number,
    message: string,
    specificData?: any
  ) {
    this.status = status;
    this.code = code;
    this.message = message;
    this.specificData = specificData;
  }
}
