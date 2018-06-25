import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class CanActivateViaAuthGuardUser implements CanActivate {

  constructor() {}

  canActivate() {
    return localStorage.role == 'AppUser';
  }
}