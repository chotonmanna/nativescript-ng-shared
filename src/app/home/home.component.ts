import { Component, OnInit } from '@angular/core';
import { Person } from "../models/person";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'Sample NativeScript NG App';
  heading = 'List of users';
  uploadImg = null;
  users = [
    { id: 1, name: "Ter Stegen", role: "Goalkeeper", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
    { id: 3, name: "Piqué", role: "Defender", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/be.png" },
    { id: 4, name: "I. Rakitic", role: "Midfielder", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/bg.png" },
    { id: 5, name: "Sergio", role: "Midfielder", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ca.png" },
    { id: 6, name: "Denis Suárez", role: "Midfielder", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ch.png" },
    { id: 7, name: "Arda", role: "Midfielder", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cn.png" },
    { id: 8, name: "A. Iniesta", role: "Midfielder", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cz.png" },
    { id: 9, name: "Suárez", role: "Forward", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/de.png" },
    { id: 10, name: "Messi", role: "Forward", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/es.png" },
    { id: 11, name: "Neymar", role: "Forward", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/et.png" },
    { id: 12, name: "Rafinha", role: "Midfielder", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hr.png" },
    { id: 13, name: "Cillessen", role: "Goalkeeper", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hu.png" },
    { id: 14, name: "Mascherano", role: "Defender", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/it.png" },
    { id: 17, name: "Paco Alcácer", role: "Forward", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/jm.png" },
    { id: 18, name: "Jordi Alba", role: "Defender", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ro.png" },
    { id: 19, name: "Digne", role: "Defender", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ru.png" },
    { id: 20, name: "Sergi Roberto", role: "Midfielder", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/us.png" },
    { id: 21, name: "André Gomes", role: "Midfielder", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/es.png" },
    { id: 22, name: "Aleix Vidal", role: "Midfielder", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ch.png" },
    { id: 23, name: "Umtiti", role: "Defender", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hr.png" },
    { id: 24, name: "Mathieu", role: "Defender", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ch.png" }
  ];

  private _person: Person;

  constructor() {
  }

  ngOnInit() {
    this._person = new Person("Biswajit Manna", 30, "biswajit.manna@cognizant.com", "Howrah", "Salkia", 7);
  }

  get person(): Person {
    return this._person;
  }

  getUploadedImage(uploadImg) {
    //console.log('$$$$$$$$$$$$$$$$',uploadImg);
    this.uploadImg = uploadImg;
  }


}
