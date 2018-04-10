
import { AlunoVm } from './../_domain/aluno-vm';
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
    selector: 'tables-aluno-list',
    templateUrl: './aluno-list.component.html',
    styleUrls: ['./aluno-list.component.css']
})
export class AlunoListComponent implements OnInit,

AfterViewChecked,
OnDestroy,
AfterViewInit ,  OnInit , OnChanges , DoCheck , AfterContentInit , AfterContentChecked
{
    ngAfterViewInit(): void {
        console.log(` AfterViewInit `)
    }
    @ViewChild('tabela') lista: any;

    ngOnDestroy(): void {
        console.log(` ngOnDestroy `)
      }
      ngAfterViewChecked(): void {
        console.log(` ngAfterViewChecked `)
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
       
        console.log(` Onchanges ${ console.dir(changes)} `)
    
      }
    columnsList = {};

    AddAluno() {



         this.lista.reInitDatatable( function(){   this.lista.hideShowColumn(1); } );
        this.alunos.push({
            nome: ` Osmar Goncalves Vieira `
            , endereco: ` Rua joão de carvalho nº 36 `
            , dataNascimento: new Date(1981, 1, 1)
            , bairro: ` Parque Santa Madalena `
            , cpf: `21371885893`
            , seguroVida: ` Sulamérica `
            , dadosSociais: ` 10102530 `
            , nomeSeguradora: `Mapfree`
            ,alunoAtualizado : false
        }); 
     setTimeout(() => {  this.lista.hideShowColumn(1);  } ,12)
    }

    checar: boolean = false;
    alunos: AlunoVm[] = [
        {
            nome: ` Osmar Goncalves Vieira `
            , endereco: ` Rua joão de carvalho nº 36 `
            , dataNascimento: new Date(1981, 1, 1)
            , bairro: ` Parque Santa Madalena `
            , cpf: `101112131415`
            , seguroVida: ` Sulamérica `
            , dadosSociais: ` 10102530 `
            , nomeSeguradora: `Mapfree`
            ,alunoAtualizado : false
        },
        {
            nome: ` Osmar Goncalves Vieira `
            , endereco: ` Rua joão de carvalho nº 36 `
            , dataNascimento: new Date(1981, 1, 1)
            , bairro: ` Parque Santa Madalena `
            , cpf: `21371885893`
            , seguroVida: ` Sulamérica `
            , dadosSociais: ` 10102530 `
            , nomeSeguradora: `Mapfree`
            ,alunoAtualizado : false
        },
        {
            nome: ` José silva neto `
            , endereco: ` Rua joão de carvalho nº 36 `
            , dataNascimento: new Date(1981, 1, 1)
            , bairro: ` Parque Santa Madalena `
            , cpf: `21371885893`
            , seguroVida: ` Sulamérica `
            , dadosSociais: ` 10102530 `
            , nomeSeguradora: `Mapfree`
            ,alunoAtualizado : false
        },
        {
            nome: ` Feliciano dos Santos vieira `
            , endereco: ` Rua joão de carvalho nº 36 `
            , dataNascimento: new Date(1981, 1, 1)
            , bairro: ` Parque Santa Madalena `
            , cpf: `21371885893`
            , seguroVida: ` Sulamérica `
            , dadosSociais: ` 10102530 `
            , nomeSeguradora: `Mapfree`
            ,alunoAtualizado : false
        },
        {
            nome: ` Cremilda `
            , endereco: ` Rua joão de carvalho nº 36 `
            , dataNascimento: new Date(1981, 1, 1)
            , bairro: ` Parque Santa Madalena `
            , cpf: `21371885893`
            , seguroVida: ` Sulamérica `
            , dadosSociais: ` 10102530 `
            , nomeSeguradora: `Mapfree`
            ,alunoAtualizado : false
        },
        {
            nome: ` Osmar Goncalves Vieira `
            , endereco: ` Rua joão de carvalho nº 36 `
            , dataNascimento: new Date(1981, 1, 1)
            , bairro: ` Parque Santa Madalena `
            , cpf: `21371885893`
            , seguroVida: ` Sulamérica `
            , dadosSociais: ` 10102530 `
            , nomeSeguradora: `Mapfree`
            ,alunoAtualizado : false
        },
        {
            nome: ` Osmar Goncalves Vieira `
            , endereco: ` Rua joão de carvalho nº 36 `
            , dataNascimento: new Date(1981, 1, 1)
            , bairro: ` Parque Santa Madalena `
            , cpf: `21371885893`
            , seguroVida: ` Sulamérica `
            , dadosSociais: ` 10102530 `
            , nomeSeguradora: `Mapfree`
            ,alunoAtualizado : false
        },
        {
            nome: ` Osmar Goncalves Vieira `
            , endereco: ` Rua joão de carvalho nº 36 `
            , dataNascimento: new Date(1981, 1, 1)
            , bairro: ` Parque Santa Madalena `
            , cpf: `21371885893`
            , seguroVida: ` Sulamérica `
            , dadosSociais: ` 10102530 `
            , nomeSeguradora: `Mapfree`
            ,alunoAtualizado : false
        },
        {
            nome: ` Osmar Goncalves Vieira `
            , endereco: ` Rua joão de carvalho nº 36 `
            , dataNascimento: new Date(1981, 1, 1)
            , bairro: ` Parque Santa Madalena `
            , cpf: `21371885893`
            , seguroVida: ` Sulamérica `
            , dadosSociais: ` 10102530 `
            , nomeSeguradora: `Mapfree`
            ,alunoAtualizado : false
        }
    ];
    public detailsFormat(d) {

        return `<table cell-padding="5" cell-spacing="0" border="0" class="table table-hover table-condensed">
            <tbody><tr>
                <td style="width:100px">Project Title:</td>
                <td>${d.segurovida}</td>
            </tr>
            <tr>
                <td>Phone:</td>
                <td>${d.dadosociais}</td>
            </tr>
     
            <tr>
                <td>compania:</td>
                <td>${d.nomeseguradora}</td>
            </tr>
           </tbody>
        </table>`
    }

    checado(checado: boolean) {
        this.checar = checado;
        this.lista.hideShowColumn(1);
    }

    constructor() { }

    ngOnInit() {

        this.columnsList = {

            columns: [
                {
                    className: 'details-control',
                    orderable: false,
                    data: null,
                    defaultContent: ''
                },
                { data: 'nome' },
                { data: 'endereco' },
                { data: 'datanascimento' },
                { data: 'bairro' },
                { data: 'cpf' },
                { data: 'segurovida' , "visible": false },
                { data: 'dadosociais' , "visible": false },
                { data: 'nomeseguradora' , "visible": false }
            ],
            buttons: [
                'copy', 'excel', 'pdf', 'print'
            ]
        }

    }

}
