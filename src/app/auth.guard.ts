import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/AuthService';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router:Router,
        private authService:AuthService
    ) {}

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        console.log(this.authService.isAuth())
        if (!this.authService.isAuth()) {
            this.router.navigate(['/auth']);
        }
        else {
            this.router.navigate(['/main']);
        }
        
        return true;
    }
}
