import { TypeOrmModuleOptions } from '@nestjs/typeorm' 

export const config: TypeOrmModuleOptions = {
    type:'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'gameR@123',
    database: 'postgres',
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: [
        'migrations/*.js'
    ],
    cli: {
        migrationsDir: 'migrations'
    },
    synchronize: false,
    autoLoadEntities: true,
}