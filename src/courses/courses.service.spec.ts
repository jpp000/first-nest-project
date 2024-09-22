import { randomUUID } from 'crypto'
import { CoursesService } from './courses.service'
import { CreateCourseDTO } from './dtos/create-course.dto'
import { UpdateCourseDTO } from './dtos/update-course.dto'

describe('CoursesService unit tests', () => {
  let service: CoursesService
  let id: string
  let created_at: Date
  let expectOuputTags: any
  let expectOuputCourses: any
  let mockCourseRepository: any
  let mockTagRepository: any

  beforeEach(async () => {
    service = new CoursesService()
    id = randomUUID()
    created_at = new Date()
    expectOuputTags = [
      {
        id,
        name: 'nestjs',
        created_at,
      },
    ]
    expectOuputCourses = {
      id,
      name: 'test',
      description: 'test desc',
      created_at,
      tags: expectOuputTags,
    }

    mockCourseRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectOuputCourses)),
      save: jest.fn().mockReturnValue(Promise.resolve(expectOuputCourses)),
      update: jest.fn().mockReturnValue(Promise.resolve(expectOuputCourses)),
      preload: jest.fn().mockReturnValue(Promise.resolve(expectOuputCourses)),
      findAll: jest.fn().mockReturnValue(Promise.resolve(expectOuputCourses)),
      find: jest.fn().mockReturnValue(Promise.resolve(expectOuputCourses)),
      findOne: jest.fn().mockReturnValue(Promise.resolve(expectOuputCourses)),
      remove: jest.fn().mockReturnValue(Promise.resolve(expectOuputCourses)),
    }

    mockTagRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectOuputTags)),
      findOne: jest.fn(),
    }
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should create a course', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository

    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockCourseRepository

    const createCourseDTO: CreateCourseDTO = {
      name: 'test',
      description: 'test desc',
      tags: ['nestjs'],
    }

    const newCourse = await service.create(createCourseDTO)

    expect(mockCourseRepository.save).toHaveBeenCalled()
    expect(expectOuputCourses).toStrictEqual(newCourse)
  })

  it('should list all courses', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository

    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockCourseRepository

    const courses = await service.findAll()

    expect(mockCourseRepository.find).toHaveBeenCalled()
    expect(expectOuputCourses).toStrictEqual(courses)
  })

  it('should gets a course by id', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository

    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockCourseRepository

    const course = await service.findOne(id)

    expect(mockCourseRepository.findOne).toHaveBeenCalled()
    expect(expectOuputCourses).toStrictEqual(course)
  })

  it('should create a course', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository

    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockCourseRepository

    const updateCourseDTO: UpdateCourseDTO = {
      name: 'test',
      description: 'test desc',
      tags: ['nestjs'],
    }

    const course = await service.update(id, updateCourseDTO)

    expect(mockCourseRepository.save).toHaveBeenCalled()
    expect(mockCourseRepository.preload).toHaveBeenCalled()
    expect(expectOuputCourses).toStrictEqual(course)
  })

  it('should remove a course', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository

    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockCourseRepository

    const course = await service.remove(id)

    expect(mockCourseRepository.findOne).toHaveBeenCalled()
    expect(mockCourseRepository.remove).toHaveBeenCalled()
    expect(expectOuputCourses).toStrictEqual(course)
  })
})
