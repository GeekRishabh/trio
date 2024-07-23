import { Module } from '@nestjs/common';
import { GallatinController } from './gallatin.controller';
import { GallatinService } from './gallatin.service';

@Module({
  imports: [],
  controllers: [GallatinController],
  providers: [GallatinService],
})
export class GallatinModule {}
