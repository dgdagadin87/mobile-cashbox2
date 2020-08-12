import { Inject, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PlatformService {

    static $inject = ['$ionicPlatform'];
    private screenWidth: number;
    private screenHeight: number;

    constructor(
        @Inject('Platform') private ionicPlatform: any,
    ) {}

    get platform(): string {
        if (!(<any>window).device) return '';
        return (<any>window).device.platform.toLowerCase();
    }

    get version(): string {
        if (!(<any>window).device) return '';
        return (<any>window).device.version;
    }

    get appVersion(): string {
        return (<any>window).APP_VERSION;
    }

    private get browser() {
        var ua= navigator.userAgent, tem,
            M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if(/trident/i.test(M[1])){
            tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
            return 'IE '+(tem[1] || '');
        }
        if(M[1]=== 'Chrome'){
            tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
            if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
        }
        M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
        if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
        return M;
    }

    get browserName() {
        return this.browser[0];
    }

    get browserVersion() {
        return this.browser[1];
    }

    get width() {
        return this.screenWidth;
    }

    get height() {
        return this.screenHeight;
    }

    get isSafari() {
        if (this.platform.toLowerCase() === 'ios') {
            return true;
        }

        var ua = navigator.userAgent.toLowerCase();
        return ua.indexOf('safari') != -1 && ua.indexOf('chrome') <= -1;
    }

    get ionIsIos() {
        return this.ionicPlatform.is('ios')
    }

    hideSplashScreen() {
        if (!(<any>window).navigator.splashscreen) return;
        setTimeout(() => (<any>window).navigator.splashscreen.hide(), 500);
    }

    showSplashScreen() {
        if (!(<any>window).navigator.splashscreen) return;
        (<any>window).navigator.splashscreen.show();
    }

    exitApp() {
        if (!(<any>window).navigator || !(<any>window).navigator.app) return;
        (<any>window).navigator.app.exitApp();
    }

    NativeStorage() {
        return (<any>window).NativeStorage;
    }

    codePush(): any {
        return (<any>window).codePush;
    }

    SyncStatus(): any {
        return (<any>window).SyncStatus;
    }

    InstallMode(): any {
        return (<any>window).InstallMode;
    }

    cordova(): any {
        return (<any>window).cordova;
    }

    protected doInit() {
        this.initScreenSize();
    }

    private initScreenSize() {
        if ((<any>window).cordova) {
            this.screenWidth = screen.width;
            this.screenHeight = screen.height;
        } else {
            this.screenWidth = screen.width;
            this.screenHeight = document.body.clientHeight;
        }
    }
}
