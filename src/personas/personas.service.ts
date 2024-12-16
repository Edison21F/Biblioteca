// personas/personas.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Persona } from './interfaces/persona.interface';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';

@Injectable()
export class PersonasService {
  constructor(@InjectModel('Persona') private readonly personaModel: Model<Persona>) {}

  async create(createPersonaDto: CreatePersonaDto): Promise<Persona> {
    const newPersona = new this.personaModel(createPersonaDto);
    return newPersona.save();
  }

  async findAll(): Promise<Persona[]> {
    return this.personaModel.find({ activo: true }).exec();
  }

  async findOne(id: string): Promise<Persona> {
    const persona = await this.personaModel.findById(id).exec();
    if (!persona || !persona.activo) {
      throw new NotFoundException(`Persona con ID ${id} no encontrada`);
    }
    return persona;
  }

  async update(id: string, updatePersonaDto: UpdatePersonaDto): Promise<Persona> {
    const updatedPersona = await this.personaModel.findByIdAndUpdate(
      id,
      updatePersonaDto,
      { new: true },
    );
    if (!updatedPersona || !updatedPersona.activo) {
      throw new NotFoundException(`Persona con ID ${id} no encontrada`);
    }
    return updatedPersona;
  }

  async remove(id: string): Promise<Persona> {
    const persona = await this.personaModel.findByIdAndUpdate(
      id,
      { activo: false },
      { new: true },
    );
    if (!persona) {
      throw new NotFoundException(`Persona con ID ${id} no encontrada`);
    }
    return persona;
  }
}
