import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  num: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  aumentar() {
    this.num++
  }

  diminui() {
    this.num--
  }

}
