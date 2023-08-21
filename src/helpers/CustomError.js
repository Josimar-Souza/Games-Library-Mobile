class CustomError {
  constructor(error, customMessage, status) {
    this.error = error;
    this.message = customMessage;
    this.status = status;
  }
}

export default CustomError;
