import { ULID } from 'ulidx'
export interface Model {
  id: string;
  ulid: ULID;
  created_at: Date;
  deleted_at: Date;
  updated_at: Date;
}
