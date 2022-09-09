import { Body, Controller, Get, Header, Post } from '@nestjs/common';
import { ContactFormService } from './contactForm.service';

@Controller('contactform')
export class ContactFormController {
  constructor(private readonly ContactFormService: ContactFormService) {}
  @Post()
  @Header('Content-Type', 'application/json')
  async addCustomerData(
    @Body('name') customerName: string,
    @Body('email') email: string,
    @Body('subject') subject: string,
    @Body('message') message: string,
  ) {
    const generatedId = await this.ContactFormService.insertCustomer(
      customerName,
      email,
      subject,
      message,
    );
    return { generatedId };
  }

  @Get()
  @Header('Content-Type', 'application/json')
  getAllProducts() {
    return this.ContactFormService.getAllCustomer();
  }
}
