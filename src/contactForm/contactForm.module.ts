import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactFormController } from './contactForm.controller';
import { CustomerFormSchema } from './contactForm.model';
import { ContactFormService } from './contactForm.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Customer', schema: CustomerFormSchema },
    ]),
  ],
  controllers: [ContactFormController],
  providers: [ContactFormService],
})
export class ContactFormModule {}
