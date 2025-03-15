import jSend from 'jsend';

declare module 'express' {
  export interface Request {
    user: any;
    id: string;
  }

  export interface Response {
    body: any;
    jSend: jSend;
  }
}

