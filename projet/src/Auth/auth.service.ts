import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  getAuth(): string {
    return 'Authentifié';
  }

  postAuth(): string {
    return 'créé';
  }

  putAuth(): string {
    return 'modifié';
  }
}