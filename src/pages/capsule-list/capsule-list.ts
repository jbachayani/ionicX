import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { ICapsule } from '../../app/Models/ICapsule';

@IonicPage()
@Component({
  selector: 'page-capsule-list',
  templateUrl: 'capsule-list.html',
})
export class CapsuleListPage {
  public capsules: ICapsule[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private spacexApi: SpacexApiProvider)
    {
      this.spacexApi.getAllCapsules({
        order: 'desc'
      }).subscribe(data => {
        this.capsules = data;
      })
    }

  ionViewDidLoad() {
    console.log("ViewDidLoad");
  }

}
