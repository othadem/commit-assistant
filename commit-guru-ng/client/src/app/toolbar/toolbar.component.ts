import { Component, OnInit } from '@angular/core';
import { Router, ResolveEnd, RouterEvent, NavigationEnd } from '@angular/router';
import { StoreService } from '../-services/store.service';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  selected: number = 1;
  showsub: boolean = false;

  constructor(private router: Router, private store: StoreService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url.indexOf('repo-') == -1) {
          this.showsub = false;
        }

      }


    })
  }

  ngOnInit() {

    this.store.repoMetrics$.subscribe(metrics => {
      if (metrics) {
        this.showsub = true;

      }
    })
  }

  goto(str) {
    this.router.navigateByUrl(str);
  }

  onClick(num) {
    this.selected = num;
  }
}
