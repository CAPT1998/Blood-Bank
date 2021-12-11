import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private fireauth: AngularFireAuth,
              private router: Router,
              private alertCtrl: AlertController) { }
  logout() {
    this.fireauth.signOut()
      .then(() => {
        this.router.navigate(['login']);
      })
      .catch((err) => {
        let msg = err.message;

        this.presentAlert("Failed", msg);
      });
  }

  async presentAlert(header, msg) {
    const alert = await this.alertCtrl.create({
      header: header,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }
  ngOnInit() {
  }

}
