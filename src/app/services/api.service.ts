import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from 'src/models/myContacts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

   baseUrl:string = 'http://localhost:3000/contacts'

  constructor(private http:HttpClient) { }

  //function to  get allcontacts
  getallContacts():Observable<MyContact>{
    return this.http.get(this.baseUrl)
 }

//  function to view a particular contact
viewContact(contactId:string){
  return this.http.get(`${this.baseUrl}/${contactId}`) 
}

//function getting a particular groupname
getGroupName(groupId:string){
  return this.http.get('http://localhost:3000/groups/'+groupId)

}

// function for fetchall group from http://localhost:3000/groups
getAllGroups(){
  return this.http.get('http://localhost:3000/groups')
}

// function for adding new contact to 'http://localhost:3000/contacts'
addContact( contactBody:any){
 return this.http.post(this.baseUrl,contactBody)

}
}
