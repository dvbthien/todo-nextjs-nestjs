import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo, TodoDocument } from './schemas/todo.schema';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
    constructor(@InjectModel(Todo.name) private readonly model: Model<TodoDocument>) {}

    async getAll(): Promise<Todo[]> {
        return await this.model.find().exec();
    }

    async update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
        return await this.model.findByIdAndUpdate(id, updateTodoDto, {returnDocument: 'after'});
    }

    async create(createTodoDto: CreateTodoDto): Promise<Todo> {
        return await new this.model({
            ...createTodoDto,
            createAt: new Date(),
        }).save();
    }

    async delete(id: string): Promise<Todo> {
        return await this.model.findByIdAndDelete(id).exec();
    }
}
