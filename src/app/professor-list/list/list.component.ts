import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ProfessorVm } from '../model/professor-vm';

@Component({
  selector: 'tables-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @ViewChild('tabela') tabela:any;

  reInitDatatable(){

    this.tabela.reInitDatatable();
  }

  render(){

 this.tabela.render();
  }
  @Input() listProfessorVm:ProfessorVm[] = [];

  AddProfessor(){

    this.listProfessorVm.push({nomeProfessor:` Rebeca ` , sobrenomeProfessor:` Noele `})
  }
  constructor() { }

  ngOnInit() {
  }

}
