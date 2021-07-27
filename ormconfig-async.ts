// This file needs for NestJS
const type: any = 'postgres'

const typeormConfigAsync = () => ({
  type,
  host: 'localhost',
  port: 5432,
  username: 'invest',
  password: 'MYFPAc53i22iz7IZcxSy',
  database: 'halal_invest',
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
