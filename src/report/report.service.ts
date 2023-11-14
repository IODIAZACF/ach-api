import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { test } from '../model/tests.model';
import { InjectModel } from '@nestjs/sequelize';


@Injectable()
export class ReportService {

  constructor(
    @InjectModel(test)
    private userModel: typeof test,
  ) { }

  create(createReportDto: CreateReportDto) {
    return 'This action adds a new report';
  }

  public async findAll(): Promise<test[]> {
    return this.userModel.findAll();
  }

  findOne(id: string): Promise<test> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }

  update(id: number, updateReportDto: UpdateReportDto) {
    return `This action updates a #${id} report`;
  }
}
