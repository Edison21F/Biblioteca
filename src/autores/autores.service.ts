// autores/autores.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Autor } from './interfaces/autor.interface';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';

@Injectable()
export class AutoresService {
  constructor(@InjectModel('Autor') private readonly autorModel: Model<Autor>) {}

  async create(createAutorDto: CreateAutorDto): Promise<Autor> {
    const newAutor = new this.autorModel(createAutorDto);
    return newAutor.save();
  }

  async findAll(): Promise<Autor[]> {
    return this.autorModel.find({ activo: true }).exec();
  }

  async findOne(id: string): Promise<Autor> {
    const autor = await this.autorModel.findById(id).exec();
    if (!autor || !autor.activo) {
      throw new NotFoundException(`Autor con ID ${id} no encontrado`);
    }
    return autor;
  }

  async update(id: string, updateAutorDto: UpdateAutorDto): Promise<Autor> {
    const updatedAutor = await this.autorModel.findByIdAndUpdate(
      id,
      updateAutorDto,
      { new: true },
    );
    if (!updatedAutor || !updatedAutor.activo) {
      throw new NotFoundException(`Autor con ID ${id} no encontrado`);
    }
    return updatedAutor;
  }

  async remove(id: string): Promise<Autor> {
    const autor = await this.autorModel.findByIdAndUpdate(
      id,
      { activo: false },
      { new: true },
    );
    if (!autor) {
      throw new NotFoundException(`Autor con ID ${id} no encontrado`);
    }
    return autor;
  }
}
