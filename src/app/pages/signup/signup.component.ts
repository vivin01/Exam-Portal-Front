import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService,) { }

  public user = {
    // id:"",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",

  }
  ngOnInit(): void { }// when our program run then this will execute first


  formSubmit() {
    if (this.user.username.length == 0) {
      // this.snack.open("Please enter your username", "OK",{duration: 3000});
      swal.fire('Please enter your username');
    }
    else if (this.user.password.length == 0) {
      // this.snack.open("Please enter your password", "OK",{duration: 3000});
      swal.fire('Please enter your username');
    }
    else if (this.user.firstName.length == 0) {
      // this.snack.open("Please enter your first name", "OK",{duration: 3000});
      swal.fire('Please enter your username');
    }
    else if (this.user.lastName.length == 0) {
      // this.snack.open("Please enter your last name", "OK",{duration: 3000});
      swal.fire('Please enter your username');
    }
    else if (this.user.email.length == 0) {
      // this.snack.open("Please enter your email address", "OK",{duration: 3000});
      swal.fire('Please enter your username');
    }
    else if (this.user.phone.length == 0) {
      // this.snack.open("Please enter your phone number", "OK",{duration: 3000});
      swal.fire('Please enter your username');
    }
    else {
      this.userService.addUser(this.user).subscribe(
        (data) => 
        { 
          // this.snack.open("User added  Successfully!", "OK",{duration: 3000}); 
          swal.fire('Success','user added Successfully, your ID is ');
        },
        (error) =>{
          // this.snack.open("Failed to add user", "OK",{duration: 3000})
          swal.fire('Failed','Failed to add user');
        }
        );
      console.log(this.user);// in real time we don't print this dat aof user, because this is sensitive data
    }
  }

}
