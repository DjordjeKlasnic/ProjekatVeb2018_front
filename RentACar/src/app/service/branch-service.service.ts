import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Broffice} from '../model/broffice';

@Injectable({
  providedIn: 'root'
})
export class BranchServiceService {

  constructor(private http: HttpClient) { }

  addBranch(br: Broffice){
    
    return this.http.post( '/api/BranchOffice', br);
  }
}
