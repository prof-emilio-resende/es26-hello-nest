import { Module } from '@nestjs/common';
import { ImcController } from './imc.controller';
import { ImcService } from './imc.service';

@Module({
  imports: [],
  controllers: [ImcController],
  providers: [ImcService],
})
export class ImcModule {}
