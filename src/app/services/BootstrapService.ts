import { Injectable } from '@angular/core';

//import { UpdateService } from './UpdateService';
//import { IonicService } from './IonicService';
//import { ApiLoadingService } from './ApiLoadingService';
//import { AuthService } from './AuthService';
//import { PushService } from './PushService';
//import { NavService } from "./NavService";

import { PlatformService } from './PlatformService';
import { AlertService } from './AlertService';

@Injectable({
    providedIn: 'root',
})
export class BootstrapService {

    static $inject = [
        'PlatformService',
        /*'IonicService', 'ApiLoadingService', 'UpdateService', 'AuthService', 'PushService',*/
        'AlertService'
    ];

    constructor(
        private platformService: PlatformService,
        private alertService: AlertService,
    ) {}


    public start() {
        //this.ionicService.configure();
        //this.ionicService.configurePlugins();

        //this.apiLoadingService.init();
        //this.updateService.sync();

        /*if ((window as any).Keyboard && (window as any).Keyboard.disableScrollingInShrinkView) {
            (window as any).Keyboard.disableScrollingInShrinkView(true);
        }*/

        //this.pushService.init();

        this.updateAndRestart();
    }

    private updateAndRestart() {
        // update by app center
    }

}
