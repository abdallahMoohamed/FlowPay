import { Injectable } from '@nestjs/common';
import { AdminRepository } from 'src/models/admin/admin.repository';

@Injectable()
export class AdminService {
  constructor(private readonly adminRepository: AdminRepository) {}

  async createAdmin() {
    const admin = {
      name: 'Abdallah',
      email: 'a@g.com',
      password: 'test@123',
      phoneNumber: '0111',
      countryCode: '+20',
    };
    await this.adminRepository.create(admin);
  }
  getHello(): string {
    return 'Hello World!';
  }
}
