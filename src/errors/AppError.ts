export default class AppError {
  statusCode: number;
  message: string;

  constructor(statusCode = 400, message: string) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
