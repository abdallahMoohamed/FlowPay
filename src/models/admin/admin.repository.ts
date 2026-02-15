import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin, AdminDocument } from './admin.schema';
import { AbstractRepository } from '../abstract.repository';

export class AdminRepository extends AbstractRepository<Admin> {
  constructor(
    @InjectModel(Admin.name)
    private readonly adminModel: Model<AdminDocument>,
  ) {
    super(adminModel);
  }
}
