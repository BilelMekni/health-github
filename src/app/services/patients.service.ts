import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  patUrl : string="http://localhost:3003/patients";
  constructor(private http:HttpClient) { }
 // Request : Signup Admin
  // Response : String
  signup(obj:any , img:File){
    let formData = new FormData();
    formData.append("firstName",obj.firstName);
    formData.append("lastName",obj.lastName);
    formData.append("telephone",obj.telephone);
    formData.append("email",obj.email);
    formData.append("password",obj.password);
    formData.append("adresse",obj.adresse);
    formData.append("role",obj.role);
    formData.append("status",obj.status);
    formData.append("gender",obj.gender);
    formData.append("img",img);
return this.http.post<{message: string}>(`${this.patUrl}/signup`,formData)
  }
  ///***  login */*** *///
  // Request : login
  // Response : string
login(user : any){
return this.http.post<{msg : String , user:any}>(`${this.patUrl}/login`,user);
}

//**** get all patients//// */
getAllPatients(){
  return this.http.get<{patients : any}>(this.patUrl);
}

///*****Confirme patients by admin *////
confirmePatients(id : any){
  return this.http.post<{message : string}>(`${this.patUrl}/status/${id}`,id);

}
///***delete patients by admin**///// */
deletePatients(id:any){
  return this.http.delete<{isDeleted : boolean}>(`${this.patUrl}/${id}`);
}
////***update patients by admin ///**** */ */
updatePatients(obj:any){
  return this.http.put<{message : string}>(this.patUrl,obj);
}
///***get patients by id//*** */ */
getPatientsById(id:any){
  return this.http.get<{patients : string , message : any}>(`${this.patUrl}/${id}`);
}
}
