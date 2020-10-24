import { FormControl, FormGroup, Validators } from "@angular/forms";
export class BuildFormControl extends FormControl {
    label: string;
    modelProperty: string;
    constructor(label:string, property:string, value: any, validator: any) {
        super(value, validator);
        this.label = label;
        this.modelProperty = property;
    }

    getValidationMessages() {
        let messages: string[] = [];
        if (this.errors) {
            for (let errorName in this.errors) {
                switch (errorName) {
                    case "required":
                        messages.push(`You must enter a ${this.label}`);
                        break;
                    case "minlength":
                        messages.push(`A ${this.label} must be at least
                            ${this.errors['minlength'].requiredLength}
                            characters`);
                        break;
                    case "maxlength":
                        messages.push(`A ${this.label} must be no more than
                            ${this.errors['maxlength'].requiredLength}
                            characters`);
                        break;
                    case "pattern":
                        messages.push(`The ${this.label} contains
                             illegal characters`);
                        break;
                }
            }
        }
        return messages;
    }
}

export class BuildFormGroup extends FormGroup {
    constructor() {
        super({
            id: new BuildFormControl("Id", "id", "", Validators.required),
            name: new BuildFormControl("Name", "name", "",
                Validators.compose([Validators.required,
                    Validators.pattern("^[A-Za-z ]+$"),
                    Validators.minLength(3),
                    Validators.maxLength(10)])),
            status: new BuildFormControl("Status", "status", "",
                Validators.compose([Validators.required,
                    Validators.pattern("^[0-9\.]+$")]))
        });
    }
    get buildControls(): BuildFormControl[] {
        return Object.keys(this.controls)
            .map(k => this.controls[k] as BuildFormControl);
    }

    // getFormValidationMessages(form: any) : string[] {
    //     let messages: string[] = [];
    //     this.buildControls.forEach(c => c.getValidationMessages()
    //         .forEach(m => messages.push(m)));
    //     return messages;
    // }

    getFormValidationMessages() : string[] {
        let messages: string[] = [];
        this.buildControls.forEach(c => c.getValidationMessages()
            .forEach(m => messages.push(m)));
        return messages;
    }
}