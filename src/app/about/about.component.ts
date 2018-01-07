import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  someId:number;

  constructor(private route: ActivatedRoute, private router:Router) {

  	this.route.params.subscribe(res => this.someId = res.id);
  	console.log(this.someId);
  }

  ngOnInit() {
  }

  sendMeHome() {
  	this.router.navigate(['']);
  }

}
