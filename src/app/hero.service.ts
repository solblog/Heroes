import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  /*
  getHeroes(): Hero[] {
    return HEROES;
  }
  */

  /* Create observable, something which is going to be observed */

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

}
