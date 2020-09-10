import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-project-detail-dialog',
  templateUrl: './project-detail-dialog.component.html',
  styleUrls: ['./project-detail-dialog.component.scss']
})
export class ProjectDetailDialogComponent implements OnInit {

  public slides = [
    { src: 'http://placekitten.com/305/205' },
    { src: 'https://cdn.glitch.com/a5121e34-96b3-4a70-8227-040c51e64fae%2Fcat.jpg?1509635989509' },
    { src: 'http://placekitten.com/305/205' },
    { src: 'https://cdn.glitch.com/a5121e34-96b3-4a70-8227-040c51e64fae%2Fcat.jpg?1509635989509' }
  ];

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit(): void {
  }

}
