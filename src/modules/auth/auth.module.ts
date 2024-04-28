import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [], // Adicionando o AuthModule na lista de imports
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
