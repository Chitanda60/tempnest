import * as fs from 'fs';
import * as path from 'path';

function parseEnv() {
  const localEnv = path.resolve('./config/.env');
  const prodEnv = path.resolve('./config/.env.prod');

  if (!fs.existsSync(localEnv) && !fs.existsSync(prodEnv)) {
    throw new Error('缺少环境配置文件');
  }

  const filePath =
    process.env.NODE_ENV === 'production' && fs.existsSync(prodEnv)
      ? prodEnv
      : localEnv;

  return { path: filePath };
}
export default parseEnv();
