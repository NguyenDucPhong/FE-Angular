import { Component, OnInit } from '@angular/core';
import { StoriesService } from '../services/stories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public stories:any;
  public title = "123";
  constructor(private story: StoriesService){};

  ngOnInit(): void{
    this.story.getList().subscribe(res => {
      this.stories = res.data;
      console.log(res.data);
    })
  }
}
