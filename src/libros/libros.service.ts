// libros/libros.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Libro } from './interfaces/libro.interface';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';

@Injectable()
export class LibrosService {
  constructor(@InjectModel('Libro') private readonly libroModel: Model<Libro>) {}
 
  async create(createLibroDto: CreateLibroDto): Promise<Libro> {
    const newLibro = new this.libroModel(createLibroDto);
    return newLibro.save();
  }

  async findAll(): Promise<Libro[]> {
    return this.libroModel.find({ activo: true }).populate('autor').exec();
  }

  async findOne(id: string): Promise<Libro> {
    const libro = await this.libroModel.findById(id).populate('autor').exec();
    if (!libro || !libro.activo) {
      throw new NotFoundException(`Libro con ID ${id} no encontrado`);
    }
    return libro;
  } 

  async update(id: string, updateLibroDto: UpdateLibroDto): Promise<Libro> {
    const updatedLibro = await this.libroModel.findByIdAndUpdate(
      id,
      updateLibroDto,
      { new: true },
    );
    if (!updatedLibro || !updatedLibro.activo) {
      throw new NotFoundException(`Libro con ID ${id} no encontrado`);
    }
    return updatedLibro;
  }

  async remove(id: string): Promise<Libro> {
    const libro = await this.libroModel.findByIdAndUpdate(
      id,
      { activo: false },
      { new: true },
    );
    if (!libro) {
      throw new NotFoundException(`Libro con ID ${id} no encontrado`);
    }
    return libro;
  }
}
