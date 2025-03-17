import { Model } from '../base/base.model';

export interface IChannel extends Model {
  name: string;
  min: number;
  max: number;
}

export interface Channel {
  name: string;
  min: number;
  max: number;
}
