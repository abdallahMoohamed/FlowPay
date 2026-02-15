import { Controller, Get, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Public } from 'src/common/decorators';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  getHello(): string {
    return this.adminService.getHello();
  }

  @Public()
  @Post()
  async create() {
    await this.adminService.createAdmin();
    return { message: 'created successfully!' };
  }
}
