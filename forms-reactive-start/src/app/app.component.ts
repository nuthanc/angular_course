import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Anna', 'Chris'];

  projectForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        // username: new FormControl(null, [Validators.required, this.forbiddenNames]),
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmail
        ),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });

    // this.signupForm.valueChanges.subscribe(value => console.log(value));
    this.signupForm.statusChanges.subscribe((status) => console.log(status));
    this.signupForm.setValue({
      userData: {
        username: 'Nuthan',
        email: 'nuthanchandra@gmail.com',
      },
      gender: 'male',
      hobbies: [],
    });
    this.signupForm.patchValue({
      userData: {
        username: 'Max',
      },
    });

    this.projectForm = new FormGroup({
      // projectName: new FormControl(null, [
      //   Validators.required,
      //   this.forbiddenProjectName,
      // ]),
      // projectName: new FormControl(
      //   null,
      //   [Validators.required],
      //   this.forbiddenProjectNameAsync
      // ),
      projectName: new FormControl(
        null,
        [Validators.required, CustomValidators.invalidProjectName],
        CustomValidators.asyncInvalidProjectName
      ),
      mail: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl('critical'),
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset({ gender: 'female' });
  }

  onSaveProject() {
    console.log(this.projectForm.value);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    // (this.signupForm.get('hobbies') as FormArray).push(control);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  // forbiddenNames = (control: FormControl): {[s: string]: boolean} => {
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ 'emailIsForbidden': true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  forbiddenProjectName = (control: FormControl): { [s: string]: boolean } => {
    if (control.value === 'Test') {
      return { 'invalidProjectName': true };
    }
    return null;
  };

  forbiddenProjectNameAsync(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({ 'invalidProjectName': true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
    return promise;
  }
}
