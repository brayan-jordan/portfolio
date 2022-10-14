import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  aboutMe = "Olá, meu nome é Brayan, seja bem vindo ao meu portifólio!"
  aboutMe2 = "Tive meu primeiro contato com programaçaõ em 2020, desde lá me apaixonei pela área e busco evoluir cada dia mais."
  aboutMe3 = "As tecnologias que eu trabalho/estudo são: "
  myTechs = "NodeJS, Angular, ReactJS, .NET, Java, HTML, CSS, JavaScript, TypeScript, C#, MySQL, SQL Server"
}
