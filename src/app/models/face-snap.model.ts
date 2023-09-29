// export class FaceSnap {
//     title: string;
//     description: string;
//     createdDate: Date;
//     snaps: number;
//     imgUrl: string;

//     constructor(title: string, description: string, createdDate: Date, snaps: number, imgUrl: string) {
//         this.title = title;
//         this.description = description;
//         this.imgUrl = imgUrl;
//         this.createdDate = createdDate;
//         this.snaps = snaps;
//     }
// }
// Tout ce qui est en haut revient à écrire comme ça, en ajoutant public :

export class FaceSnap {
    id!: number;
    title!: string;
    description!: string;
    createdDate!: Date;
    snaps!: number;
    imgUrl!: string;
    location?: string;

    // constructor(
    //     public title: string,
    //     public description: string,
    //     public createdDate: Date,
    //     public snaps: number,
    //     public imgUrl: string
    //     ) {
    // }
}