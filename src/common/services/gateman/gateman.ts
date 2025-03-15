import { Gateman } from '@random-guys/gateman';
import redis from '@app/common/services/redis';
import env from '@app/common/config/env';

const authScheme = 'DemoCredit';

export default new Gateman({
  service: env.service_name,
  authScheme,
  redis,
  secret: env.gateman_key,
});
