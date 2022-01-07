import { NumberSymbol } from "@angular/common";

export class Songs {
    name : string;
    id : number;
    movie : string;
    musicDirector : string;
    singer : string;
    genre : string;
    year : number;
    youtubeLink : string;
    notes: any[] = [];
    
    constructor(name: string, id : number, movie : string, musicDirector : string, singer : string, genre : string, year : NumberSymbol, youtubeLink : string, notes : any[]) {
        this.name = name;
        this.id = id;
        this.movie = movie;
        this.musicDirector = musicDirector;
        this.singer = singer;
        this.genre = genre;
        this.year = year;
        this.youtubeLink = youtubeLink;
        this.notes = notes;
    }
}
