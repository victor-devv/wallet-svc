import { Request, Response, NextFunction } from 'express';
import HttpStatus from 'http-status-codes';
import env from '@app/common/config/env/env';

export const validateAppBuildNumber = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isIOSClient = /Darwin/.test(req.headers['user-agent']);
  const isAndroidClient = /Dalvik/.test(req.headers['user-agent']);

  const [android_build_number, android_version] =
    env.android_build_number.split(',');
  const [ios_build_number, ios_version] = env.ios_build_number.split(',');

  if (isAndroidClient) {
    if (!req.get('x-build-number'))
      return res.jSend.error(null, 'Missing required header', HttpStatus.FORBIDDEN);
    const buildNumber = Number(req.get('x-build-number'));

    if (buildNumber < Number(android_build_number))
      return res.jSend.error(
        null,
        `Please update to version ${android_version} from the Play Store`,
        HttpStatus.FORBIDDEN,
        326
      );
  }

  if (isIOSClient) {
    if (!req.get('x-build-number'))
      return res.jSend.error(null, 'Missing required header', HttpStatus.UNAUTHORIZED);
    const buildNumber = Number(req.get('x-build-number'));

    if (buildNumber < Number(ios_build_number))
      return res.jSend.error(
        null,
        `Please update to version ${ios_version} from the Appstore`,
        HttpStatus.UNAUTHORIZED,
        326
      );
  }

  next();
};
