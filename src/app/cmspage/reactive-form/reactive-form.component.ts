import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent  {

 sinup = new FormGroup({
   fullname: new FormControl('jitendra sonyani',Validators.required),
   username: new FormControl('' ,[
     Validators.required,
     this.spaceNotallowed
   ]),
   email:    new FormControl('',[
     Validators.required,
     Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
   ]),
   password: new FormControl('',[
     Validators.required,
     Validators.minLength(7)
   ])
 })

 get fullname(){ return this.sinup.get('fullname');}
 get username() { return this.sinup.get('username');}
 get email(){return this.sinup.get('email');}
 get password(){return this.sinup.get('password')}

  spaceNotallowed(control: AbstractControl): {[key: string]: boolean} | null{
    if((control.value as string).indexOf(' ')>=0)

    return {spaceNotallowed : true }
    return null

  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.sinup.value);
  }

}
