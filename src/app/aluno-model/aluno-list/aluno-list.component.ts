
import { AlunoVm } from './../_domain/aluno-vm';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tables-aluno-list',
    templateUrl: './aluno-list.component.html',
    styleUrls: ['./aluno-list.component.css']
})
export class AlunoListComponent implements OnInit {
    checar:boolean  = false;
    alunos: AlunoVm[] = [
        {
            nome: ` Osmar Goncalves Vieira `
            , endereco: ` Rua joão de carvalho nº 36 `
            , dataNascimento: new Date(1981, 1, 1)
            , bairro: ` Parque Santa Madalena `
            , cpf: `21371885893`
            , seguroVida: ` Sulamérica `
            , dadosSociais: ` 10102530 `
            , nomeSeguradora: `Mapfree`
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

    checado(checado:boolean){
        this.checar = checado;
    }

    constructor() { }

    ngOnInit() {

    }

}
