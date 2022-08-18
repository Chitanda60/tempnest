import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoodsService } from './goods.service';
import { GoodsResolver } from './goods.resolver';
import { GoodsController } from './goods.controller';
import { GoodsEntity } from './goods.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GoodsEntity])],
  providers: [GoodsService, GoodsResolver],
  controllers: [GoodsController],
})
export class GoodsModule {}
