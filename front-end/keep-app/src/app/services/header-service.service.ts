import { Injectable } from '@angular/core';
import { EventEmitter } from 'protractor';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  nav = new BehaviorSubject<boolean>(false)

  constructor() {}
}
