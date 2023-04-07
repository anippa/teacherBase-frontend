import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Author } from '../components/author/author';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  path = environment.path

  constructor(private http:HttpClient) { }

  getAuthors():Observable<Author[]>{
    return this.http.get<Author[]>(this.path+'/author')
  }
}
