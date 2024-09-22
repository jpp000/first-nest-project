import 'dotenv/config'
import { DataSource, DataSourceOptions } from 'typeorm'
import { CreateCoursesTable1726512026011 } from 'src/migrations/1726512026011-CreateCoursesTable'
import { CreateTagsTable1726518662663 } from 'src/migrations/1726518662663-CreateTagsTable'
import { CreateCoursesTagsTable1726519405709 } from 'src/migrations/1726519405709-CreateCoursesTagsTable'
import { AddCoursesIdToCoursesTagsTable1726519990728 } from 'src/migrations/1726519990728-AddCoursesIdToCoursesTagsTable'
import { AddTagsIdToCoursesTagsTable1726520475393 } from 'src/migrations/1726520475393-AddTagsIdToCoursesTagsTable'
import { Course } from 'src/courses/entities/courses.entity'
import { Tag } from 'src/courses/entities/tags.entity'

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Course, Tag],
  synchronize: false,
}

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1726512026011,
    CreateTagsTable1726518662663,
    CreateCoursesTagsTable1726519405709,
    AddCoursesIdToCoursesTagsTable1726519990728,
    AddTagsIdToCoursesTagsTable1726520475393,
  ],
})
