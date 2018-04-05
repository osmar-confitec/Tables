import { Component, OnInit, ViewChild, AfterContentChecked, OnDestroy, AfterViewChecked, AfterViewInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit } from '@angular/core';
import { ProfessorVm } from '../model/professor-vm';

@Component({
  selector: 'tables-formulario-professor',
  templateUrl: './formulario-professor.component.html',
  styleUrls: ['./formulario-professor.component.css']
})
export class FormularioProfessorComponent implements
  AfterViewChecked,
  OnDestroy,
  AfterViewInit, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {
  ngAfterViewInit() {

    console.log(` ngAfterViewInit `)
  }
  ngOnDestroy(): void {
    console.log(` ngOnDestroy `)
  }
  ngAfterViewChecked(): void {
    console.log(` ngAfterViewChecked `)
   // this.lista.render();

  }
  ngAfterContentChecked(): void {
    console.log(` ngAfterContentChecked `)
  }
  ngAfterContentInit(): void {
    console.log(` AfterContentInit `)
  }
  ngDoCheck(): void {
    console.log(` ngDoCheck `)
  }
  ngOnChanges(changes: SimpleChanges): void {

    console.log(` Onchanges ${console.dir(changes)} `)

  }
  @ViewChild('listaProf') lista: any;

  AddProfessor() {
    this.lista.reInitDatatable();
    this.listProfessorVmOn.push({ nomeProfessor: ` Rebeca `, sobrenomeProfessor: ` Noele ` })
  }

  listProfessorVmOn: ProfessorVm[] = [
    { nomeProfessor: 'venancio', sobrenomeProfessor: 'vieira' },
    { nomeProfessor: 'venancio', sobrenomeProfessor: 'vieira' },
    { nomeProfessor: 'venancio', sobrenomeProfessor: 'vieira' },
    { nomeProfessor: 'venancio', sobrenomeProfessor: 'vieira' },
    { nomeProfessor: 'venancio', sobrenomeProfessor: 'vieira' },
    { nomeProfessor: 'venancio', sobrenomeProfessor: 'vieira' },
    { nomeProfessor: 'venancio', sobrenomeProfessor: 'vieira' },
    { nomeProfessor: 'venancio', sobrenomeProfessor: 'vieira' },
    { nomeProfessor: 'venancio', sobrenomeProfessor: 'vieira' },
    { nomeProfessor: 'venancio', sobrenomeProfessor: 'vieira' },
    { nomeProfessor: 'venancio', sobrenomeProfessor: 'vieira' },
    { nomeProfessor: 'venancio', sobrenomeProfessor: 'vieira' },

  ];
  constructor() { }

  ngOnInit() {
  }

}
