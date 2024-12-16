// libros/libros.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LibroSchema } from './schemas/libro.schema';
import { LibrosService } from './libros.service';
import { LibrosController } from './libros.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Libro', schema: LibroSchema }])],
  providers: [LibrosService],
  controllers: [LibrosController],
})
export class LibrosModule {}
