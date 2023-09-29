import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable ({
    providedIn: "root"
})

export class FaceSnapService {
    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: "Coucher de soleil",
            description: "Merveilleux souvenir de vacances",
            createdDate: new Date(),
            snaps: 49,
            imgUrl: "https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=50,format=auto/sources/images/actu/soleil-rouge-pourquoi.jpg",
            location: "Paris"
        },
        {
            id: 2,
            title: "Montagnes",
            description: "Merveilleux souvenir de vacances",
            createdDate: new Date(),
            snaps: 56,
            imgUrl: "https://www.trekmag.com/media/news/2018/06/01-cervin.jpg",
            location: "La montagne"
        },
        {
            id: 3,
            title: "Mer des caraïbes",
            description: "Merveilleux souvenir de vacances",
            createdDate: new Date(),
            snaps: 18,
            imgUrl: "https://www.guide-piscine.fr/medias/image/les-bienfaits-de-l-eau-de-mer-sur-la-peau-23971-640-0.jpg",
        }
    ];

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    };

    getFaceSnapById(faceSnapId: number) {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnapId === faceSnap.id);
        if (faceSnap) return faceSnap;
        else throw new Error("ID unknown");
    }

    snapFaceSnapById(faceSnapId: number, snap: "snap" | "unsnap"): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        (snap === "snap")? faceSnap.snaps++ : faceSnap.snaps--;
    };
}