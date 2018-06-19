import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class CanActivateViaAuthGuardAdmin implements CanActivate {

  constructor() {}

  canActivate() {
    return localStorage.role == 'Admin';
  }
}