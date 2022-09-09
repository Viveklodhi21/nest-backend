import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactFormModule } from './contactForm/contactForm.module';
import {  ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule, ContactFormModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
