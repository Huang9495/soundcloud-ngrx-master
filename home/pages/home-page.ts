import { Component } from '@angular/core';
import { TracklistService } from 'src/tracklists';


@Component({
  template: `
    <section>
      <content-header 
        [section]="section" 
        [title]="title"></content-header>

      <tracklist [layout]="layout"></tracklist>
    </section>
  `
})
export class HomePageComponent {
  //定义layout为字符穿compoact
  layout = 'compact';
  //定义section为字符穿Spotlight
  section = 'Spotlight';
  //定义title为字符穿Featured Tracks
  title = 'Featured Tracks';

  constructor(public tracklist: TracklistService) {
    //调用曲目列表中的loadFeaturedTracks()方法
    tracklist.loadFeaturedTracks();
  } 
}
