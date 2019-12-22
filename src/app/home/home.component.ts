import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup } from '@angular/forms';

interface Options {
  solar_noon?: any
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  sites = [
    { site: "ACK", slideNo: 2, coords: "41.254100, -70.058936", row: 1, directions: "https://docs.google.com/document/d/1mnsrlbKb8qdjlmF3YTtMJlFc8Ocbf4pc/edit" },
    { site: "BAF", slideNo: 2, coords: "42.159385,-72.720768", row: 2, directions: "https://docs.google.com/document/d/1jG-QLM5INP6aHo0tq70aR_Mc8x3rkhGU/edit" },
    { site: "BDL", slideNo: 2, coords: "41.924971,-72.670427", row: 3, directions: "https://docs.google.com/document/d/1sA0VE67JkTiohYprTzYzHBNwyAjeU36Hv9eWenV9S5I/edit" },
    { site: "BED", slideNo: 2, coords: "42.460129,-71.290715", row: 4, directions: "https://docs.google.com/document/d/0Bw5eC0tYG1CjS1YwQjlieE1iWTQ/edit" },
    { site: "BOS", slideNo: 2, coords: "42.365859,-71.018050", row: 5, directions: "https://docs.google.com/document/d/0Bw5eC0tYG1CjX3ZPQ2RieWVpeDA/edit" },
    { site: "BVY", slideNo: 2, coords: "42.586025,-70.911223", row: 6, directions: "https://docs.google.com/document/d/1b-wouVUzlSGYf7_RjyYB8NjEUZN3rk5W/edit" },
    { site: "CQX", slideNo: 2, coords: "41.689357,-69.991904", row: 7, directions: "https://docs.google.com/document/d/0Bw5eC0tYG1CjNkFlOExZX19jZUU/edit" },
    { site: "EWB", slideNo: 2, coords: "41.681254,-70.961684", row: 8, directions: "https://docs.google.com/document/d/0Bw5eC0tYG1CjNVFoOUZiM2hfSjA/edit" },
    { site: "FIT", slideNo: 2, coords: "42.555136,-71.754294", row: 9, directions: "https://docs.google.com/document/d/0Bw5eC0tYG1CjVmF5MUVVYUpTS1E/edit" },
    { site: "HFD", slideNo: 2, coords: "41.735948,-72.652871", row: 10, directions: "https://docs.google.com/document/d/1P5tlI72kzzJwIe9FSpBh6vFabUq5uR9BXHrRVOcBjag/edit" },
    { site: "HYA", slideNo: 2, coords: "41.664266,-70.275758", row: 11, directions: "https://docs.google.com/document/d/0Bw5eC0tYG1CjQWc1NWE0VTd1LVU/edit" },
    { site: "IJD", slideNo: 3, coords: "41.740037,-72.181221", row: 0, directions: "https://docs.google.com/document/d/0Bw5eC0tYG1CjWEpZc1FkMGlrUEU/edit" },
    { site: "LWM", slideNo: 3, coords: "42.711308,-71.122258", row: 1, directions: "https://docs.google.com/document/d/0Bw5eC0tYG1CjRHk1TEFZUDB0Y1E/edit" },
    { site: "MQE", slideNo: 3, coords: "42.221043,-71.118704", row: 2, directions: "https://docs.google.com/document/d/0Bw5eC0tYG1CjNThtNjQ1VVZfdDQ/edit" },
    { site: "MVY", slideNo: 3, coords: "41.392991, -70.615927", row: 3, directions: "https://docs.google.com/document/d/0Bw5eC0tYG1CjQWc1NWE0VTd1LVU/edit" },
    { site: "ORE", slideNo: 3, coords: "42.575445,-72.283067", row: 4, directions: "https://docs.google.com/document/d/0Bw5eC0tYG1CjU0RaY3JZNWl1LTg/edit" },
    { site: "ORH", slideNo: 3, coords: "42.271536,-71.869894", row: 5, directions: "https://docs.google.com/document/d/15HaustbbTDS0YBCQMew4bOfQOpWwbe-Q/edit" },
    { site: "OWD", slideNo: 3, coords: "42.186708,-71.178463", row: 6, directions: "https://docs.google.com/document/d/0Bw5eC0tYG1CjdE4zSXN0V0ZneEk/edit" },
    { site: "PVD", slideNo: 3, coords: "41.732581,-71.436235", row: 7, directions: "https://docs.google.com/document/d/1zDpdOfR01R6OxqAlhiYlqLhuIFTUfT4KN6hfojledb8/edit" },
    { site: "PYM", slideNo: 3, coords: "41.901476,-70.742425", row: 8, directions: "https://docs.google.com/document/d/0Bw5eC0tYG1CjSmVhXzJRVVJqOTQ/edit" },
    { site: "TAN", slideNo: 3, coords: "41.875274,-71.015455", row: 9, directions: "https://docs.google.com/document/d/1gw6WSP9cv9meEnuxDGIMkoQvTkbITqtV3DvzdC8GSGc/edit" },
    { site: "UUU", slideNo: 3, coords: "41.530631,-71.284106", row: 10, directions: "https://docs.google.com/document/d/1X2vY3mcwIJACKbbRFShToAZvV-XbhIGvnxrPlNorKuk/edit" },
    { site: "WST", slideNo: 3, coords: "41.350104,-71.806995", row: 11, directions: "https://docs.google.com/document/d/0Bw5eC0tYG1CjZ0YtOU0ybUpjX3M/edit" }
  ];

  constructor(private dataService: DataService, private fb: FormBuilder) { }

  myForm: FormGroup;
  info:Options;


 //info =  { "location": { "latitude": 42.159385, "longitude": -72.720768 }, "date": "2019-12-21", "sunrise": "07:17", "sunset": "16:23", "solar_noon": "11:48", "day_length": "9:6", "sun_altitude": -25.605007904029122, "sun_distance": 147182655.80669075, "sun_azimuth": 260.7314874654219, "moonrise": "03:10", "moonset": "14:02", "moon_altitude": -51.94642078940774, "moon_distance": 368397.9808201296, "moon_azimuth": 323.7940482845218, "moon_parallactic_angle": 13.912047686326504 }
  
  ngOnInit() {
    this.myForm = this.fb.group({
      site: null
    });
  }

  getData() {
    this.dataService.getData(this.myForm.value.site.coords)
       .subscribe(data => this.info = data);
  }

}
