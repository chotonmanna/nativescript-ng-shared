import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salary-history',
  templateUrl: './salary-history.component.html',
  styleUrls: ['./salary-history.component.css']
})
export class SalaryHistoryComponent implements OnInit {
  title = 'Salary History';
  countries: { name: string, imageSrc: string }[] = [
    { name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
    { name: "Australia 2", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
    { name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
    { name: "Australia 2", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
    { name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
    { name: "Australia 2", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
    { name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
    { name: "Australia 2", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  togglePanel(i) {
    if(!this.countries[i]['visibility'] || this.countries[i]['visibility'] === 'collapse') {
      // reset all accordion
      this.countries.forEach((item, j) => {
        this.countries[j]['visibility'] = 'collapse';
      });
      this.countries[i]['visibility'] = 'visible';
    } else {
      this.countries[i]['visibility'] = 'collapse';
    }
  }

}
