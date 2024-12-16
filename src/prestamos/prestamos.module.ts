// prestamos/prestamos.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PrestamoSchema } from './schemas/prestamo.schema';
import { PrestamosService } from './prestamos.service';
import { PrestamosController } from './prestamos.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Prestamo', schema: PrestamoSchema }])],
  providers: [PrestamosService],
  controllers: [PrestamosController],
})
export class PrestamosModule {}
