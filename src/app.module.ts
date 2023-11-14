import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportModule } from './report/report.module';
import { configService } from './config/config.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    ReportModule,
    SequelizeModule.forRoot(configService.getSequalizeConfig())
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
