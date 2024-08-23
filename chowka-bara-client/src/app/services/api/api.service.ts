import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

// Parent Class for any other service that makes use of the API
@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private http: HttpClient = inject(HttpClient);
    private apiUrl: string = environment.apiUrl;
    private defaultOptions: any = {
        observe: 'response',
        withCredentials: true,
    };

    private combineOptions(userOptions : any) : any {
        return { ...this.defaultOptions, ...userOptions };
    }

    protected Get(endpoint : string, userOptions : any) : Observable<ArrayBuffer> {
        return this.http.get(this.apiUrl + endpoint, this.combineOptions(userOptions));
    }

    protected Post(endpoint : string, requestBody : any, userOptions : any) : Observable<ArrayBuffer> {
        return this.http.post(this.apiUrl + endpoint, requestBody, this.combineOptions(userOptions));
    }

    protected Put(endpoint : string, requestBody : any, userOptions : any) : Observable<ArrayBuffer> {
        return this.http.put(this.apiUrl + endpoint, requestBody, this.combineOptions(userOptions));
    }

    protected Delete(endpoint : string, userOptions : any) : Observable<ArrayBuffer> {
        return this.http.delete(this.apiUrl + endpoint, this.combineOptions(userOptions));
    }

    // Add further HTTP Methods if required
}
