interface KarmaType {
  karma: string;
}

interface KarmaIdentityType {
  identity_type: string;
}

interface ReportingEntity {
  name: string;
  email: string;
}

export interface AdjutorVerificationData {
  karma_identity: string;
  amount_in_contention: string;
  reason: string | null;
  default_date: string;
  karma_type: KarmaType;
  karma_identity_type: KarmaIdentityType;
  reporting_entity: ReportingEntity;
}

interface AdjutorMetadata {
  cost: number;
  balance: number;
}

export interface AdjutorSuccessResponse {
  status: 'success';
  message: string;
  'mock-response'?: string;
  data: AdjutorVerificationData;
  meta: AdjutorMetadata;
}

export interface AdjutorErrorResponse {
  status: 'error';
  message: string;
}

export type AdjutorResponse = AdjutorSuccessResponse;
