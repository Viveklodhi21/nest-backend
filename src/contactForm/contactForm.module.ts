import { Module } from '@nestjs/common';
import { ContactFormController } from './contactForm.controller';
import { ContactFormService } from './contactForm.service';

@Module({
  controllers: [ContactFormController],
  providers: [ContactFormService],
})
export class ContactFormModule {}
