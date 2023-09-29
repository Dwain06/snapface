import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {

  snapped!: boolean;
  snapBtn!: string;
  faceSnap!: FaceSnap;

  constructor(
    private faceSnapService: FaceSnapService,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    const faceSnapId = +this.route.snapshot.params["id"];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);

    this.snapped = false;
    this.snapBtn = "Oh snap!";
  }

  onSnap() {
    if (this.snapped === false) {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, "snap");
      this.snapped = true;
      this.snapBtn = "Oops unspnap!"
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, "unsnap");
      this.snapped = false;
      this.snapBtn = "Oh snap!"
    }
  }
}
