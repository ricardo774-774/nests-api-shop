import { Module } from '@nestjs/common';
import { ComentController } from './coment.controller';
import { ComentService } from './coment.service';

@Module({
  controllers: [ComentController],
  providers: [ComentService]
})
export class ComentModule {}
