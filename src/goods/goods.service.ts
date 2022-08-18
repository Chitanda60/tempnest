import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GoodsEntity } from './goods.entity';

@Injectable()
export class GoodsService {
  constructor(
    @InjectRepository(GoodsEntity)
    public readonly goodsRepository: Repository<GoodsEntity>,
  ) {}

  public findAll() {
    return this.goodsRepository.find();
  }

  public findOneById(id) {
    return this.goodsRepository.findOne(id);
  }

  public updateOne(goods: Partial<GoodsEntity>) {
    return this.goodsRepository.update(goods.id, goods);
  }

  public addOne(goods: Partial<GoodsEntity>) {
    return this.goodsRepository.save(goods);
  }

  public deleteOne(id: string) {
    return this.goodsRepository.delete(id);
  }
}
