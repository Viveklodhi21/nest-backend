import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContactFormService } from './contactForm.service';

@Controller('contactform')
export class ContactFormController {
  constructor(private readonly ContactFormService: ContactFormService) {}
  @Post()
  addCustomerData(
    @Body('name') customerName: string,
    @Body('email') email: string,
    @Body('subject') subject: string,
    @Body('descMessage') descMessage: string,
  ) {
    const generatedId = this.ContactFormService.insertCustomer(
      customerName,
      email,
      subject,
      descMessage,
    );
    return { generatedId };
  }

  @Get()
  getAllProducts() {
    return this.ContactFormService.getAllCustomer();
  }
}
