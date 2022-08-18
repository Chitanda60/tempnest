import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GoodsService } from './goods.service';
import {
  GoodsTypeGraphql,
  GoodsInputTypeGraphql,
  GoodsInsertTypeGraphql,
} from './goods.type-graphql';

// 包装Promise返回,使得async/await可以更方便写成同步语法的形式
function awaitWrap<T, U = any>(
  promise: Promise<T>,
): Promise<[U | null, T | null]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, null]>((err) => [err, null]);
}

@Resolver('Goods')
export class GoodsResolver {
  constructor(private readonly goodsService: GoodsService) {}

  //查询所有商品
  @Query(() => [GoodsTypeGraphql])
  async getAllGoods() {
    return this.goodsService.findAll();
  }

  //查询单个商品
  @Query(() => GoodsTypeGraphql)
  async getGoods(@Args('id') id: string) {
    return this.goodsService.findOneById(id);
  }

  //新增一个商品
  @Mutation(() => GoodsTypeGraphql)
  async addOneGoods(@Args('goods') goods: GoodsInsertTypeGraphql) {
    return this.goodsService.addOne({ ...goods });
  }

  // 更新一个商品信息
  @Mutation(() => GoodsTypeGraphql)
  async updateGoods(@Args('goods') goods: GoodsInputTypeGraphql) {
    const [err] = await awaitWrap(this.goodsService.updateOne(goods));
    if (err) {
      return goods;
    }
    return this.goodsService.findOneById(goods.id);
  }

  // 删除一个商品信息
  @Mutation(() => Boolean)
  async deleteOneGoods(@Args('id') id: string) {
    const [err] = await awaitWrap(this.goodsService.deleteOne(id));
    if (err) {
      return false;
    }
    return true;
  }
}
