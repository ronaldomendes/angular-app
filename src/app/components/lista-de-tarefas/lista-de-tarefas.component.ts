import { Component, OnInit } from '@angular/core';
import { Tarefa } from "src/app/models/Tarefa";

// Apresentar a lista de tarefas no browser com um checkbox marcado se a tarefa foi realizada ou não

@Component({ // <= decorators do Typescript
  selector: 'app-lista-de-tarefas',
  templateUrl: './lista-de-tarefas.component.html',
  styleUrls: ['./lista-de-tarefas.component.css']
})
export class ListaDeTarefasComponent implements OnInit {

  listaTarefa: Tarefa[] = []

  constructor() {
    this.listaTarefa.push(new Tarefa("Comer Churrasco!"))
    this.listaTarefa.push(new Tarefa("Tomar Banho", true))
    this.listaTarefa.push(new Tarefa("Beber Água", false))
  }

  ngOnInit(): void {
  }

}
