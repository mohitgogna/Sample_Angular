import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { build$ } from 'protractor/built/element';
import { BuildFormGroup } from 'src/app/form.model';
import { Build } from 'src/app/model/Build';
import { BuildRepository } from 'src/app/model/build.repository';

@Component({
  selector: 'app-table-reactiveform',
  templateUrl: './table-reactiveform.component.html',
  styleUrls: ['./table-reactiveform.component.css']
})
export class TableReactiveformComponent implements OnInit {
  
  selectedBuild: string;
  formSubmitted: boolean = false;

  form:BuildFormGroup=new BuildFormGroup();

  newBuild: Build = {
    Id: "",
    Name: "Pipeline ",
    Status: "Passed",
    Info: "This is build information of build ",
    Version: "v1.1.",
    Time: "m 24s",
    Link1: "#",
    Link2: "#",
    Link3: "#",
    Progress: "10"
  };


  constructor(private buildRepository: BuildRepository) { }

  ngOnInit(): void {
  }

  getBuild(): Build[] {
    return this.buildRepository.getBuilds();
  }

  getSelectedItem(item: any): boolean {
    return item.Id == this.selectedBuild;
  }

  get jsonBuild() {
    return JSON.stringify(this.newBuild);
  }

  addBuild(b: Build) {
    console.log("New build" + this.jsonBuild);
  }

  // getValidationMessages(state: any, thingName?: string) {
    
  //   console.log("222");
  //   let thing: string = state.path || thingName;
  //   let messages: string[] = [];
  //   if (state.errors) {
  //     for (let errorName in state.errors) {
  //       switch (errorName) {
  //         case "required":
  //           messages.push(`You must enter a ${thing}`);
  //           break;
  //         case "minlength":
  //           messages.push(`A ${thing} must be at least
  //                       ${state.errors['minlength'].requiredLength}
  //                       characters`);
  //           break;
  //         case "pattern":
  //           messages.push(`The ${thing} contains
  //                        illegal characters`);
  //           break;
  //       }
  //     }
  //   }
  //   return messages;
  // }

  submitBuild(form: NgForm) {
    console.log("123");

    this.formSubmitted = true;
    if (form.valid) {
      this.addBuild(this.newBuild);
      form.reset();
      this.formSubmitted = false;
    }
  }

//   getFormValidationMessages(form: NgForm): string[] {
    
//     console.log("111");
//     let messages: string[] = [];
//     Object.keys(form.controls).forEach(k => {
//         this.getValidationMessages(form.controls[k], k)
//             .forEach(m => messages.push(m));
//     });
//     return messages;
// }

}
