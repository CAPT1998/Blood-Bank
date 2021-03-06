import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  email: any;
  password: any;

  constructor(
    private fireauth: AngularFireAuth,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  register() {
    this.fireauth.createUserWithEmailAndPassword(this.email, this.password)
      .then((res) => {
        if (res.user) {
          // Register Success
          this.router.navigate(['home']);
        }
      }).catch((err) => {
      let msg = err.message;

      this.presentAlert("Error", msg);
    })
  }

  async presentAlert(header, msg) {
    const alert = await this.alertCtrl.create({
      header: header,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

}
