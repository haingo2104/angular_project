import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  emailAsyncValidator,
  passwordValidator,
} from '../../validators/validator';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
 message? : string;
  form!: FormGroup;
 
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email], emailAsyncValidator],
      password: ['', [Validators.required, passwordValidator]],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
      }),
      aliases: this.fb.array([this.fb.control('', Validators.required)]),
    });
  }

  get aliases() {
    return this.form.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control('', Validators.required));
  }
  submit() {
    if (this.form.valid) {
      console.log('Formulaire soumis', this.form.value);
      this.message = "Data saved!"
      this.form.reset()
    } else {
      console.log('Formulaire invalide');
    }

  }
}

