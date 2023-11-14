import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { test } from '../model/tests.model';

@Module({
  imports: [SequelizeModule.forFeature([test])],
  controllers: [ReportController],
  providers: [ReportService],
})
export class ReportModule {}
