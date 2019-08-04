import { Component, OnInit, Inject } from '@angular/core';
import { Topics } from './topics.model';
import { Topicservice } from './topics.service';
import { Observable } from 'rxjs';
import { EDITPANEL } from 'src/shared/editpanel/token/editpanel.token';

@Component({
  selector: 'ngdi-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {

  public topics$: Observable<Topics[]>;

  constructor(@Inject(EDITPANEL) private topicService: Topicservice) {
    this.topics$ = this.topicService.get();
  }

  ngOnInit() {
  }
}
