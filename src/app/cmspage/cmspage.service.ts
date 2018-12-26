import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CmspageService {
  getData():string[]{
    return ["Shaktiman" , " superhero" , "badman" , "ironman"]
  }

  constructor() { }
}
