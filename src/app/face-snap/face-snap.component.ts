import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;
  snapped!: boolean;
  snapBtn!: string;

  constructor(private faceSnapService: FaceSnapService, private router: Router) {}

  ngOnInit() {

  }

  onViewFaceSnap(faceSnapId: number): void {
    this.router.navigateByUrl(`facesnaps/${faceSnapId}`);
  }
}
