import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultatService {

  resultatUrl: string ="http://localhost:3003/resultats"

  constructor(private http :HttpClient) { }
  ///Add resultat pour envoi les reponses aux patients///
  ///Response : String/////
  addresultat(obj:any){
    return this.http.post<{message : string , isadded : boolean}>(this.resultatUrl,obj);
  }
  ///***Confirme Resultat/***** */ */
  confirmeResultat(id : any){
  return this.http.post<{message : string}>(`${this.resultatUrl}/status/${id}`,id)
  }
  //***get all resultat by admin pour envoie des responses **/// */
  getAllResultas(){
    return this.http.get<{resultats : any}>(`${this.resultatUrl}/result/all/pub`);
  }

  ///****get resultat by id**//// */
  getResultatById(id:any){
    return this.http.get<{pubs : string}>(`${this.resultatUrl}/envoie${id}`);
  }
  ///****voir reponse medecins  confirme par medecins ****/// */
  getConfirmeMedecins(){
    return this.http.get<{result : any}>(`${this.resultatUrl}/voir/accepter/tous/rest`);
  }

  //****notification envoyer reponse aux patients//*** */ */
  notificationMedecins(obj : any){
    return this.http.put<{messages : string}>(`${this.resultatUrl}/envoyer/notif/clean/accpt`,obj)
  }
  //**** get notification **/// */
  getNotificationById(id:any){
    return this.http.get<{notation : string}>(`${this.resultatUrl}/envoie/controls${id}`);
  }
  ///*****delete reseultat from admin by id//*** */ */
  deleteResultats(id:any){
    return this.http.delete<{isDeleted : boolean}>(`${this.resultatUrl}/${id}`);
  }

}
