// new code
import { Get, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CustomerForm } from './contactForm.model';

@Injectable()
export class ContactFormService {
  private customers: CustomerForm[] = [];
  constructor(
    @InjectModel('Customer')
    private readonly customerModel: Model<CustomerForm>,
  ) {}
  async insertCustomer(
    name: string,
    email: string,
    subject: string,
    message: string,
  ) {
    // const customerId = Math.random().toString(); no need now
    const newCustomer = new this.customerModel({
      name,
      email,
      subject,
      message,
    });
    // this.customers.push(newCustomer);
    const result = await newCustomer.save();
    return result?._id;
  }

  async getAllCustomer() {
    const customers = await this.customerModel.find().exec();
    return customers;
  }
}

// old code

// import { Get, Injectable } from '@nestjs/common';
// import { CustomerForm } from './contactForm.model';

// @Injectable()
// export class ContactFormService {
//   private customers: CustomerForm[] = [];
//   insertCustomer(
//     customerName: string,
//     email: string,
//     subject: string,
//     message: string,
//   ) {
//     {
//       console.log('pror', customerName, subject, message);
//     }
//     const customerId = Math.random().toString();
//     const newProduct = new CustomerForm(
//       customerId,
//       customerName,
//       email,
//       subject,
//       message,
//     );
//     this.customers.push(newProduct);
//     return customerId;
//   }

//   getAllCustomer() {
//     return [...this.customers];
//   }
// }
