// personas/personas.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonaSchema } from './schemas/persona.schema';
import { PersonasService } from './personas.service';
import { PersonasController } from './personas.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Persona', schema: PersonaSchema }])],
  providers: [PersonasService],
  controllers: [PersonasController],
})
export class PersonasModule {}
