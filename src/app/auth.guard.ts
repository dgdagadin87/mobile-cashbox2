import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Observable, } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router:Router) {}

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        this.router.navigate(['/auth'])
        return true;
    }
}
