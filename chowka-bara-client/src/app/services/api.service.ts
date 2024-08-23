import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

// Parent Class for any other service that makes use of the API
@Injectable({
    providedIn: 'root',
})
export class ApiService {
    protected http: HttpClient = inject(HttpClient);
    protected apiUrl: string = environment.apiUrl;
    protected defaultOptions: any = {
        observe: 'response',
        withCredentials: true,
    };

}
