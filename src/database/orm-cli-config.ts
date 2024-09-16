import { DataSource } from 'typeorm'
import { dataSourceOptions } from './database.module'
import { CreateCoursesTable1726512026011 } from 'src/migrations/1726512026011-CreateCoursesTable'
import { CreateTagsTable1726518662663 } from 'src/migrations/1726518662663-CreateTagsTable'
import { CreateCoursesTagsTable1726519405709 } from 'src/migrations/1726519405709-CreateCoursesTagsTable'
import { AddCoursesIdToCoursesTagsTable1726519990728 } from 'src/migrations/1726519990728-AddCoursesIdToCoursesTagsTable'
import { AddTagsIdToCoursesTagsTable1726520475393 } from 'src/migrations/1726520475393-AddTagsIdToCoursesTagsTable'

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
