import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  userName$: Observable<string>;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.userName$ = this.activatedRoute.queryParams.pipe(
      map((qp) => {
        let userName = qp['userName'];
        return userName;
      }),
    );
  }
}
