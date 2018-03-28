import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tables-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.css']
})
export class AlunoListComponent implements OnInit {


  public detailsFormat(d) {

    return `<table cell-padding="5" cell-spacing="0" border="0" class="table table-hover table-condensed">
            <tbody><tr>
                <td style="width:100px">Project Title:</td>
                <td>${d.tipo1}</td>
            </tr>
            <tr>
                <td>Phone:</td>
                <td>${d.tipo2}</td>
            </tr>
     
            <tr>
                <td>compania:</td>
                <td>${d.tipo3}</td>
            </tr>
           </tbody>
        </table>`
  }

  constructor() { }

  ngOnInit() {
      
  }

}
