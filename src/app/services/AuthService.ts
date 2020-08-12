import { Injectable } from '@angular/core';
import { LocalStorageService } from './LocalStorageService';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private localStorageService:LocalStorageService
  ) {
  }

  login(token) {
    this.localStorageService.set('token', token);
  }

  logout() {
    /*ApiCacheService.clear();
    LocalStorageService.remove('token');
    LocalStorageService.remove('client_user_list');
    LastSearchBuyerService.clear();
    OrderCodeStoreService.clear();
    SettingsService.clearAll();*/
    this.localStorageService.remove('token');
    this.localStorageService.remove('client_user_list');
  }

  isAuth() {
    return Boolean(this.getToken());
  }

  getToken() {

    return this.localStorageService.getItem('token');
  }

}
