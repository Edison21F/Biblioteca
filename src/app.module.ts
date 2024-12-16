import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AutoresModule } from './autores/autores.module';
import { LibrosModule } from './libros/libros.module';
import { PersonasModule } from './personas/personas.module';
import { VolumenesModule } from './volumenes/volumenes.module';
import { PrestamosModule } from './prestamos/prestamos.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/Biblioteca'),
    AutoresModule,
    LibrosModule,
    PersonasModule,
    VolumenesModule,
    PrestamosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
