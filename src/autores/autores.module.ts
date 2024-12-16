// autores/autores.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AutorSchema } from './schemas/autor.schema';
import { AutoresService } from './autores.service';
import { AutoresController } from './autores.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Autor', schema: AutorSchema }])],
  providers: [AutoresService],
  controllers: [AutoresController],
})
export class AutoresModule {}
