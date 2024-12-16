// volumenes/volumenes.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VolumenSchema } from './schemas/volumen.schema';
import { VolumenesService } from './volumenes.service';
import { VolumenesController } from './volumenes.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Volumen', schema: VolumenSchema }])],
  providers: [VolumenesService],
  controllers: [VolumenesController],
})
export class VolumenesModule {}
