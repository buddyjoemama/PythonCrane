import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-camera-view',
  templateUrl: './camera-view.component.html',
  styleUrls: ['./camera-view.component.less']
})
export class CameraViewComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  id: string;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
