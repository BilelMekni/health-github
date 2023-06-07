import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {
  publUrl: string ="http://localhost:3003/publications"
  constructor(private http : HttpClient) { }
  // Request : Add Publication
  // Response : string
  addPublication(obj : any){
    return this.http.post<{message : string , isAdded : boolean}>(this.publUrl,obj);
  }

//****get all publications by aggregate//*** */ */
getAllPublications(){
  return this.http.get<{publications : any}>(`${this.publUrl}/all`);
}

  ///***Confirmation Publications */
  confirmePublication(id:any){
    return this.http.post<{message : string}>(`${this.publUrl}/status/${id}`,id);
  }

  ///***get Publication by id */
  getPublicationsById(id:any){
    return this.http.get<{pubs : string}>(`${this.publUrl}/${id}`);
  }
  //**** get publications confirmer/*/// */
  getPublicationsConfirme(){
    return this.http.get<{pubs : any}>(`${this.publUrl}`);
  }
  //****delete publication bu admin //**** */ */
  deletePublications(id: any){
    return this.http.delete<{isDeleted : boolean}>(`${this.publUrl}/${id}`);
  }
  ///***Notification acceptation votre demande de publications**//// */
  postNotif(obj:any){
    return this.http.put<{message : string}>(`${this.publUrl}/post/notif/active`,obj);
  }
}
