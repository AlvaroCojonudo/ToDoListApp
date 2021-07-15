import { Component, OnInit } from '@angular/core';
import { IList } from 'src/app/models/list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  public lists: IList[] = [
    {
      title: "Compra Josue",
      items: [
        {
          id: 1,
          title: 'Pan de Barra',
          description: null,
          done: false
        },
        {
          id: 2,
          title: 'Leche Descremada',
          description: null,
          done: false
        },
      ],
      createdAt: new Date(),
      author: "Nombre autor"
    },
    {
      title: "Compra Josue",
      items: [
        {
          id: 1,
          title: 'Pan de Barra',
          description: null,
          done: false
        },
        {
          id: 2,
          title: 'Leche Descremada',
          description: null,
          done: false
        },
      ],
      createdAt: new Date(),
      author: "Nombre autor"
    }
  ];

  constructor() { }

  ngOnInit() { }

}
