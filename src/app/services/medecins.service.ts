import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedecinsService {
  medecinUrl : string="http://localhost:3003/medecins";

  constructor(private http : HttpClient) { }
  // Request : Signup Admin
  // Response : String
  signup(obj:any , img:File , cv :File){
    let formData = new FormData();
    formData.append("firstName",obj.firstName);
    formData.append("lastName",obj.lastName);
    formData.append("telephone",obj.telephone);
    formData.append("email",obj.email);
    formData.append("password",obj.password);
    formData.append("adresse",obj.adresse);
    formData.append("experience",obj.experience);
    formData.append("specialite",obj.specialite);
    formData.append("matricule",obj.matricule);
    formData.append("role",obj.role);
    formData.append("status",obj.status);
    formData.append("gender",obj.gender);
    formData.append("img",img);
    formData.append("cv",cv);
return this.http.post<{message: string}>(`${this.medecinUrl}/signup`,formData)
  }
  //get medecins by id///
getMedecinById(id:any){
  
return this.http.get<{medecins : String, message : any}>(`${this.medecinUrl}/${id}`);
}
// Get All medecins**////
getAllMedecins(){
  return this.http.get<{medecins : any}>(this.medecinUrl);
}
//***confirmation medecins by admin ////*/
confirmeMedecins(id:any){
  return this.http.post<{message : string}>(`${this.medecinUrl}/status/${id}`,id);
}

//***delete medecins by id ****/
deleteMedecins(id:any){
  return this.http.delete<{isDeleted : boolean}>(`${this.medecinUrl}/${id}`);
}
//****Update medecins //*** */ */
updateMedecins(obj:any){
return this.http.put<{message : string}>(this.medecinUrl,obj)
}

//*** search by medecins**// */
searchMedecins(obj:any){
  return this.http.post<{searchTab : string}>(`${this.medecinUrl}/search`,obj);
}
}
