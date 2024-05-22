import { Injectable } from '@angular/core';
import { Card } from '../interface/card';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {
public data : Card[] = [
  {
    title: 'Top 5 Living Room Inspirations',
    description: 'Curated vibrants colors for your living, make it pop & calm in the same time.',
    imageUrl: '/assets/images/interior.jpg'
  }
]
  constructor() { }

  getData(): Card[]{
    return this.data;
  }
}
