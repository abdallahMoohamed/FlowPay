import { Controller, Post } from '@nestjs/common';
import { Public } from 'src/common/decorators';

@Controller('consumer-dashboard/auth')
export class AuthController {
  constructor() {}

  // register
  @Public()
  @Post('register')
  async register(){

  }

  
  // login
  // forget-password
}
