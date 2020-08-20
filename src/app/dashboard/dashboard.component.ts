import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as app from "tns-core-modules/application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'Dashboard';
  data = [
    {
      heading: "Salary History",
      content: "Overview of your Salary History",
      image: 'Salary-comparison-sites.jpg',
      url: 'salary-info'
    },
    {
      heading: "My Pension Payments",
      content: "Here you will find an overview of pension payments.",
      image: 'pension_payment.jpg',
      url: 'pension-info'
    },
    {
      heading: "My Pension Rights",
      content: "See what benefits you receive from your pension provider.",
      image: 'pension_660_031618051848.jpg',
      url: 'benefits-info'
    },
    {
      heading: "My Profile",
      content: "Here you will find your personal and work related data.",
      image: 'my_profile.jpg',
      url: 'my-profile'
    },
    {
      heading: "Document Archives",
      content: "Here you will find documents regarding your pension",
      image: 'document.png',
      url: 'documents'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  openMenuBar() {
    const drawer = <RadSideDrawer>app.getRootView();
    drawer.showDrawer();
  }

}
