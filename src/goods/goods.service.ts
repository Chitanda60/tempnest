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

  public async findAll() {
    const data = await this.goodsRepository.find();
    return data;
  }

  public findOneById(id: any) {
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
