import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactFormModule } from './contactForm/contactForm.module';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ContactFormModule,
    ProductsModule,
    MongooseModule.forRoot(
      'mongodb+srv://vivekPortfolio:Vivek1997@cluster0.vd5qeny.mongodb.net/portfolioDatabse?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
