import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// --- Mock Group ---
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessLogicModule } from './business-logic/business-logic.module';
import { ControllersModule } from './controllers';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'guangxun_user',
      database: 'guangxun_db',
      password: 'guangxun_password',
      entities: [__dirname + '/models/entities/*.entity.{ts,js}'],
      synchronize: true,
    }),
    BusinessLogicModule,
    ControllersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
