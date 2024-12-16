// volumenes/volumenes.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Volumen } from './interfaces/volumen.interface';
import { CreateVolumenDto } from './dto/create-volumen.dto';
import { UpdateVolumenDto } from './dto/update-volumen.dto';

@Injectable()
export class VolumenesService {
  constructor(@InjectModel('Volumen') private readonly volumenModel: Model<Volumen>) {}

  async create(createVolumenDto: CreateVolumenDto): Promise<Volumen> {
    const newVolumen = new this.volumenModel(createVolumenDto);
    return newVolumen.save();
  }

  async findAll(): Promise<Volumen[]> {
    return this.volumenModel.find({ activo: true }).populate('libro').exec();
  }

  async findOne(id: string): Promise<Volumen> {
    const volumen = await this.volumenModel.findById(id).populate('libro').exec();
    if (!volumen || !volumen.activo) {
      throw new NotFoundException(`Volumen con ID ${id} no encontrado`);
    }
    return volumen;
  }

  async update(id: string, updateVolumenDto: UpdateVolumenDto): Promise<Volumen> {
    const updatedVolumen = await this.volumenModel.findByIdAndUpdate(
      id,
      updateVolumenDto,
      { new: true },
    );
    if (!updatedVolumen || !updatedVolumen.activo) {
      throw new NotFoundException(`Volumen con ID ${id} no encontrado`);
    }
    return updatedVolumen;
  }

  async remove(id: string): Promise<Volumen> {
    const volumen = await this.volumenModel.findByIdAndUpdate(
      id,
      { activo: false },
      { new: true },
    );
    if (!volumen) {
      throw new NotFoundException(`Volumen con ID ${id} no encontrado`);
    }
    return volumen;
  }
}
