import { Injectable, NotFoundException } from '@nestjs/common'
import { Course } from './entities/courses.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateCourseDTO } from './dtos/create-course.dto'
import { UpdateCourseDTO } from './dtos/update-course.dto'

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly coursesRepository: Repository<Course>,
  ) {}

  async findAll(): Promise<Course[]> {
    return await this.coursesRepository.find()
  }

  async findOne(id: number): Promise<Course> {
    const course = await this.coursesRepository.findOne({
      where: {
        id,
      },
    })

    if (!course) {
      throw new NotFoundException(`Course ID: ${id} not found`)
    }

    return course
  }

  async create(createCourseDTO: CreateCourseDTO): Promise<Course> {
    const course = this.coursesRepository.create(createCourseDTO)

    return this.coursesRepository.save(course)
  }

  async update(id: number, updateCourseDTO: UpdateCourseDTO): Promise<Course> {
    const existingCourse = await this.coursesRepository.preload({
      ...updateCourseDTO,
      id,
    })

    if (!existingCourse) {
      throw new NotFoundException(`Course ID: ${id} not found`)
    }

    return this.coursesRepository.save(existingCourse)
  }

  async remove(id: number) {
    const course = await this.findOne(id)

    if (!course) {
      throw new NotFoundException(`Course ID: ${id} not found`)
    }

    return this.coursesRepository.remove(course)
  }
}
