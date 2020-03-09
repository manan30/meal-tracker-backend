export default class ResponseStatus {
  status: boolean;
  message: string;
  specificData?: any;

  constructor(status: boolean, message: string, specificData?: any) {
    this.status = status;
    this.message = message;
    this.specificData = specificData;
  }
}
