import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {
  rendezUrl : string="http://localhost:3003/rendezvous";


  constructor(private http : HttpClient) { }
  //****Rendey-vous**** */
rendezVous(obj:any){
  return this.http.post<{message : string , isAdded: boolean}>(this.rendezUrl,obj);
  }

  ///****Get All Rendez Vous */
  getAllRendezVous(){
    return this.http.get<{ rendez : any}>(this.rendezUrl);

  }
///****delete rendez vous patients by id//** */ */
delteRendezVous(id:any){
  return this.http.delete<{isDeleted : boolean}>(`${this.rendezUrl}/${id}`);
}
////******update rendey vous */
editRendezVous(rendez : any){
  return this.http.put<{message : String}>(this.rendezUrl, rendez);
}

///*******get rendez by id */
getrendezById(id: any){
  return this.http.get<{rendez : any , message : string}>(`${this.rendezUrl}/${id}`);

}



  ////** get all rendez vous admin */
  // getAllRenAdmin(){
  //   return this.http.get<{rendezadmin : any}>(`${this.rendezUrl}/rendez/all/all`);
  // }
}
