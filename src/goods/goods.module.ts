import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoodsService } from './goods.service';
import { GoodsResolver } from './goods.resolver';
import { GoodsEntity } from './goods.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GoodsEntity])],
  providers: [GoodsService, GoodsResolver],
})
export class GoodsModule {}
