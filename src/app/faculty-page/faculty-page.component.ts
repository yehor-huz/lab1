import { NgStyle, NgFor, CommonModule} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FacultyList } from '../faculty-list';
import { Faculty } from '../faculty';
import Chart from 'chart.js/auto';
import { IonCardContent, IonContent, IonCard, IonCardTitle, IonCardHeader, IonList } from "@ionic/angular/standalone";

@Component({
  selector: 'app-faculty-page',
  templateUrl: './faculty-page.component.html',
  styleUrls: ['./faculty-page.component.scss'],
  standalone: true,
  imports: [IonList, IonCardContent, IonContent, IonCard, IonCardTitle, IonCardHeader, NgStyle, NgFor, CommonModule]
})

export class FacultyPageComponent implements OnInit {
  facultyList = new FacultyList();
  universityColors: { [key: string]: string } = {};
  universitiesCount: { [key: string]: number } = {};
  jsonUrl = 'https://api.jsonbin.io/v3/b/67bca400e41b4d34e49aec86';
  chart: any;

  ngOnInit() {
    this.loadJsonData();
    console.log(this.facultyList.faculties);
  }

  loadJsonData() {
    fetch(this.jsonUrl)
      .then(response => response.json())
      .then(data => {
        data.record.faculties.forEach((f: any) => {
          const faculty = new Faculty(f.faculty, f.university, f.dean, f.phone, f.address);
          this.facultyList.addFaculty(faculty);
          this.universitiesCount[faculty.universityName] = (this.universitiesCount[faculty.universityName] || 0) + 1;
        });

        this.assignColors();
        this.createChart();
      })
      .catch(error => console.error('Error loading JSON:', error));
  }

  assignColors() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#9B59B6'];
    let index = 0;

    this.facultyList.faculties.forEach(faculty => {
      if (!this.universityColors[faculty.universityName]) {
        this.universityColors[faculty.universityName] = colors[index % colors.length];
        index++;
      }
    });
  }

  createChart() {
    const ctx = document.getElementById('facultyChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: Object.keys(this.universitiesCount),
        datasets: [{
          data: Object.values(this.universitiesCount),
          backgroundColor: Object.keys(this.universitiesCount).map(u => this.universityColors[u])
        }]
      }
    });
  }
}
