import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './ormconfig';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(config), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
