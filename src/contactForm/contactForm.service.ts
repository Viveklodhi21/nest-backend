import { Get, Injectable } from '@nestjs/common';
import { CustomerForm } from './contactForm.model';

@Injectable()
export class ContactFormService {
  private customers: CustomerForm[] = [];
  insertCustomer(
    customerName: string,
    email: string,
    subject: string,
    descMessage: string,
  ) {
    {
      console.log('pror', customerName, subject, descMessage);
    }
    const customerId = Math.random().toString();
    const newProduct = new CustomerForm(
      customerId,
      customerName,
      email,
      subject,
      descMessage,
    );
    this.customers.push(newProduct);
    return customerId;
  }

  getAllCustomer() {
    return [...this.customers];
  }
}
