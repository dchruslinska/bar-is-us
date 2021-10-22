import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Drink} from '../models/drink.model';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor(private http: HttpClient) {
  }

  addDrink(drink: Drink): Observable<Drink> {
    return this.http.post<Drink>(environment.baseUrl + 'drinks', drink);
  }

  getDrinks(): Observable<Drink[]> {
    return this.http.get<Drink[]>(environment.baseUrl + 'drinks');
  }

  getDrinkByID(drinkID: string): Observable<Drink[]> {
    return this.http.get<Drink[]>(environment.baseUrl + 'drinks/' + drinkID);
  }
}
