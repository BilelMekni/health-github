import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminUrl : string="http://localhost:3003/admin";

  constructor(private http : HttpClient) { }
  // Request : Signup Admin
  // Response : String
  signup(obj:any , img:File){
    let formData = new FormData();
    formData.append("firstName",obj.firstName);
    formData.append("lastName",obj.lastName);
    formData.append("telephone",obj.telephone);
    formData.append("email",obj.email);
    formData.append("password",obj.password);
    formData.append("confirmPwd",obj.confirmPwd);
    formData.append("adresse",obj.adresse);
    formData.append("role",obj.role);
    formData.append("gender",obj.gender);
    formData.append("img",img);
return this.http.post<{message: string}>(`${this.adminUrl}/signup`,formData)
  }

  //*** get all admin *////
  getAllAdmin(){
    return this.http.get<{admin : any}>(this.adminUrl)
  }
  //**** get adlin by id ///**** */ */
  getAdminById(id : any){
    return this.http.get<{admin : any , message : string}>(`${this.adminUrl}/${id}`);
  }
  //*** add contacter ///****/
  addContacter(obj:any){
    return this.http.post<{message: string , isadded : boolean}>(this.adminUrl,obj);
  }
  //***get all contact problem widh admin//**** */ */
  getContactProblem(){
    return this.http.get<{contact : any}>(`${this.adminUrl}/contact/all`);
  }
  //*****delet contact problem widh admin//*** */ */
  deleteConatctProblem(id:any){
    return this.http.delete<{isDeleted : boolean}>(`${this.adminUrl}/${id}`);
  }
   
}
