import axios, { AxiosInstance } from 'axios';
import env from '@app/common/config/env/env';
import { AdjutorResponse } from './adjutor.typings';
import { UserBlacklistedError, BlacklistCheckFailedError } from '@app/server/controllers/base/controller.errors';

/**
 * Service class for interacting with Adjutor's API
 */
export class AdjutorService {
  private readonly apiKey: string;
  private readonly client: AxiosInstance;
  private readonly baseUrl: string = env.adjutor_base_url;

  constructor() {
    this.apiKey = env.adjutor_api_key;

    this.client = axios.create({
      baseURL: this.baseUrl,
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    });
  }

  /**
   * Verify if an email address is blacklisted in Adjutor's Karma
   * @param emailAddress - Email address to verify
   * @returns Promise with the verification result
   */
  public async verifyKarmaBlacklist(
    term: string
  ): Promise<AdjutorResponse> {
    try {
      const { data: response } = await this.client.get<AdjutorResponse>(
        `/verification/karma/${encodeURIComponent(term)}`
      );

      const karma = response.data;

      if (karma.karma_identity === term && Number(karma.amount_in_contention) > 0)
        throw new UserBlacklistedError();

      return;
    } catch (error) {
      throw new BlacklistCheckFailedError();
    }
  }
}

export default new AdjutorService();
