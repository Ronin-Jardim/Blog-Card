import { Component, OnInit } from '@angular/core';
import { Card } from '../interface/card';
import { CardServiceService } from '../services/card-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit{
  items : Card[] = [];
constructor(public cardService: CardServiceService){}
  ngOnInit(): void {
    this.items=this.cardService.getData();
  }
}
