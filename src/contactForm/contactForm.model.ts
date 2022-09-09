import * as mongoose from 'mongoose';
export const CustomerFormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
});

// export class CustomerForm {
//   constructor(
//     public id: string,
//     public name: string,
//     public email: string,
//     public subject: string,
//     public message: string,
//   ) {}
// }

export interface CustomerForm {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}
