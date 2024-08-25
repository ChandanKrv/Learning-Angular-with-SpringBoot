import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent implements OnInit {
  message = 'Welcome!';
  name = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.message);
    //this.name = this.route.snapshot.params['name'];
    //OR
    this.route.params.subscribe((params) => {
      this.name = params['name'];
    });
  }
}
