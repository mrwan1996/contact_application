import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ContactsService {

  constructor(private http: HttpClient) { }

  createAuthHeader(headers: HttpHeaders) {
    const token = localStorage.getItem('AUTHTOKEN');
    headers = headers.append('Authorization', `Bearer ${token}`);
  }

  saveContact(contact:any): Observable<any> {
    let headers = new HttpHeaders();
    this.createAuthHeader(headers);

    return this.http.post('contacts/add', contact, { headers: headers })
      .pipe(map(resp => resp));
  }

  getContacts(query:any): Observable<any> {
    let headers = new HttpHeaders();
    this.createAuthHeader(headers);

    return this.http.post('contacts/list', query, { headers: headers })
      .pipe(map(resp => resp));
  }

  deleteContact(contactId:any): Observable<any> {
    let headers = new HttpHeaders();
    this.createAuthHeader(headers);

    const url = `contacts/remove/${contactId}`;
    return this.http.delete(url, { headers: headers })
      .pipe(map(resp => resp));
  }

}
