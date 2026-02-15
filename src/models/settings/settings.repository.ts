import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbstractRepository } from '../abstract.repository';
import { Settings, SettingsDocument } from './Settings.schema';

export class SettingsRepository extends AbstractRepository<Settings> {
  constructor(
    @InjectModel(Settings.name)
    private readonly settingsModel: Model<SettingsDocument>,
  ) {
    super(settingsModel);
  }
}
