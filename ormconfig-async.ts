// This file needs for NestJS
const type: any = 'postgres'

const typeormConfigAsync = () => ({
  type,
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'dNvC2i6e8tubNNJ3',
  database: 'halal-stocks',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  synchronize: false,
  logging: true,
  uuidExtension: 'uuid-ossp',
  cli: {
    migrationsDir: 'migrations',
  }
})

export default typeormConfigAsync
