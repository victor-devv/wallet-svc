import axios from 'axios';
import { fakerDE as faker } from '@faker-js/faker';
import { ulid } from 'ulidx';
import { Gateman } from '@random-guys/gateman';
import redis from '../../src/common/services/redis';
import { SignupDTO } from '../../src/server/controllers/user/user.dto';
import env from '../../src/common/config/env/env';
import { sanitiseGmailAddress } from '../../src/common/utils/misc';
import { randomPassword } from '../../src/server/utils';

export function signupPayload() {
  let email = faker.internet.email();
  if (email.endsWith('gmail.com')) email = sanitiseGmailAddress(email);

  const eighteenYearsAgo = new Date();
  eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

  return {
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    gender: getRandom(['female', 'male']),
    dob: faker.date
      .past({ years: 30, refDate: eighteenYearsAgo })
      .toISOString()
      .split('T')[0],
    email,
    location: {
      latitude: faker.location.latitude().toString(),
      longitude: faker.location.longitude().toString(),
      street: faker.location.streetAddress(),
      city: 'Yaba',
      state: 'Lagos'
    },
    password: randomPassword(),
    phone_number: generatePhoneNumber()
  };
}

/**
 * Picks a random item from an array
 * @param items Array to pick the items from
 */
export function getRandom<T>(items: readonly T[]) {
  return items[Math.floor(Math.random() * items.length)];
}

/**
 * Generates random digits of a specified length
 * @param length Length of the random digits
 */
export function randomDigits(length: number) {
  const digits = Array.from({ length }).reduce((prev) => {
    const randomDigit = Math.floor(Math.random() * 9);
    return prev + String(randomDigit);
  }, '');

  return digits as string;
}

/**
 * Generates a fake Nigerian phone number.
 * 2 & 7 are excluded from 0702 because the generated number acts funny at times
 */
export function generatePhoneNumber() {
  const networkCodes = [
    // MTN Nigeria prefixes
    `23470${faker.helpers.arrayElement([0, 1, 3, 4, 5, 6, 8, 9])}`,
    // Airtel, Glo, 9Mobile prefixes  
    `2348${faker.number.int(1)}${faker.number.int({ min: 2, max: 8 })}`,
    // Ntel, Smile prefixes
    `23490${faker.number.int({ min: 1, max: 9 })}`
  ];

  // Select a random network code
  const networkCode = faker.helpers.arrayElement(networkCodes);
  
  // Generate the remaining 7 digits
  const subscriberNumber = faker.string.numeric(7);
  
  return `${networkCode}${subscriberNumber}`;
}

export function mockUserRequest(): SignupDTO {
  let email = faker.internet.email();
  if (email.endsWith('gmail.com')) email = sanitiseGmailAddress(email);

  return {
    dob: new Date(faker.date.past({ years: 30 }).toISOString().split('T')[0]),
    gender: getRandom(['female', 'male']),
    email,
    last_name: faker.person.lastName(),
    first_name: faker.person.firstName(),
    password: randomPassword(),
    location: {
      latitude: faker.location.latitude().toString(),
      longitude: faker.location.longitude().toString(),
      street: faker.location.streetAddress(),
      city: 'Yaba',
      state: 'Lagos',
    },
    channel: 'demo_credit',
    phone_number: generatePhoneNumber(),    
    profile_picture: faker.image.avatar()
  };
}

/**
 * Unwraps a JSend API response and returns the actual data
 * @param promise The request promise
 */
export async function getResponseData<T = any>(promise: Promise<any>) {
  const res = await promise;
  return res.body.data as T;
}

/**
 * Creates a mock headless token from a partcular `service`
 * @param service The name of the service
 */
export const mockHeadlessToken = async (
  service: string,
  _ulid: string = ulid()
) => {
  const mockGateman = new Gateman({
    service,
    authScheme: 'DemoCredit',
    //@ts-ignore
    redis,
    //@ts-ignore
    secret: env.gateman_key
  });
  return `DemoCredit ${await mockGateman.createHeadlessToken({ id: _ulid })}`;
};

/**
 * Funds a mock wallet
 * @param user User id
 * @param amount Amount to be funded in wallet
 */
export async function fundMockWallet(base: string, amount: number, token: string) {
  const body = {
    reference: ulid(),
    adapter: 'paystack',
    source: 'card',
    amount
  };

  const { data } = await axios.post(
    `${base}/api/v1/wallet/fund`,
    body,
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  );

  return data.data;
}
