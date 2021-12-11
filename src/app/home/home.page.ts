import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})
export class HomePage {
  slideOpts: any;

  constructor(
    private fireauth: AngularFireAuth,
    private router: Router,
    private alertCtrl: AlertController
  ) {}


}
