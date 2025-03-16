import { ULID } from 'ulidx'
export interface Model {
  id: number;
  ulid: ULID;
  created_at: Date;
  deleted_at: Date;
  updated_at: Date;
}
