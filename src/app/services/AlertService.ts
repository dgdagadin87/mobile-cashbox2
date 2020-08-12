import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
    providedIn: 'root',
})
export class AlertService {

    constructor(
        private alertController: AlertController,
    ) {
    }

    async confirm(header: string, message: string, noText = 'Нет', yesText = 'Да') {
        return new Promise<boolean>(async (resolve) => {
            const alertHeader = header && message ? header : null;
            const alertSubHeader = header && !message ? header : null;

            const alert = await this.alertController.create({
                header: alertHeader,
                subHeader: alertSubHeader,
                message: message,
                buttons: [
                    {
                        text: noText,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            resolve(false);
                        },
                    }, {
                        text: yesText,
                        handler: () => {
                            resolve(true);
                        },
                    },
                ],
                backdropDismiss: false,
            });

            await alert.present();
        });
    }

    async alert(header: string, message: string) {
        return new Promise<boolean>(async (resolve) => {
            const alert = await this.alertController.create({
                header: header,
                message: message,
                buttons: [
                    {
                        text: 'OK',
                        handler: () => {
                            resolve(true);
                        },
                    },
                ],
                backdropDismiss: false,
            });

            await alert.present();
        });
    }

    async error(error: any) {
        const message = typeof error === 'object' ? error.error_description : error;
        return new Promise<boolean>(async (resolve) => {
            const alert = await this.alertController.create({
                header: 'Ошибка',
                message: message,
                buttons: [
                    {
                        text: 'OK',
                        handler: () => {
                            resolve(true);
                        },
                    },
                ],
                backdropDismiss: false,
            });
            await alert.present();
        });
    }

}
