export class ResponseData<D> {
  data: D | D[];
  success: boolean;
  message: string;

  constructor(data: D | D[], success: boolean, message: string) {
    this.data = data;
    this.success = success;
    this.message = message;
    return this;
  }
}
