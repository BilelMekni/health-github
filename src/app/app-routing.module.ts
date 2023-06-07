import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HommeComponent } from './components/homme/homme.component';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';
import { SignupMedecinsComponent } from './components/signup-medecins/signup-medecins.component';
import { SignupPatientsComponent } from './components/signup-patients/signup-patients.component';
import { LoginComponent } from './components/login/login.component';
import { InformationPrincipaleComponent } from './components/information-principale/information-principale.component';
import { VerificationComponent } from './components/verification/verification.component';
import { RendezVousComponent } from './components/rendez-vous/rendez-vous.component';
import { ValiderRendezVousComponent } from './components/valider-rendez-vous/valider-rendez-vous.component';
import { AdminComponent } from './components/admin/admin.component';
import { ModifierMedecinsComponent } from './components/modifier-medecins/modifier-medecins.component';
import { ModifierPatientsComponent } from './components/modifier-patients/modifier-patients.component';
import { ModifierRendezVousComponent } from './components/modifier-rendez-vous/modifier-rendez-vous.component';
import { PublicationComponent } from './components/publication/publication.component';
import { ConsulterPublicationsComponent } from './components/consulter-publications/consulter-publications.component';
import { ContacterComponent } from './components/contacter/contacter.component';
import { SearchComponent } from './components/search/search.component';
import { EspacePatientsComponent } from './components/espace-patients/espace-patients.component';
import { ResultatComponent } from './components/resultat/resultat.component';
import { VoirResultatsComponent } from './components/voir-resultats/voir-resultats.component';
import { EnvoieNotificationComponent } from './components/envoie-notification/envoie-notification.component';


const routes: Routes = [
  //http://localhost : 4200/
  {path:"", component : HommeComponent},
  //http://localhost : 4200/Signup-Admin
  {path:"signupAdmin", component : SignupAdminComponent},
  //http://localhost : 4200/Signup-Medecins
  {path:"signupMedecins" , component : SignupMedecinsComponent},
  //http://localhost : 4200/Signup-Patients
  {path:"signupPatients" , component : SignupPatientsComponent},
  //http://localhost : 4200/login
  {path:"login" , component : LoginComponent},
  //http://localhost : 4200/Information Principale
  {path:"informationPrincipale", component : InformationPrincipaleComponent},
  //http://localhost : 4200/Verification
  {path:"verification" , component : VerificationComponent},
  //http://localhost : 4200/prise de rendez vous
  {path:"rendezVous" , component : RendezVousComponent},
  //http://localhost : 4200/ validation et confirmation les rendez-vous
  {path:"validerRendez-vous" , component : ValiderRendezVousComponent},
  //http://localhost : 4200/ Dashboard Admin
  {path:"admin" , component : AdminComponent},
  //http:localhost : 4200/ modifier medecins
  {path:"modifierMedecins/:id" , component : ModifierMedecinsComponent},
  //http:localhost  : 4200/ modifier patients
  {path:"modifierPatients/:id" , component : ModifierPatientsComponent},
  //http:localhost  : 4200/ modifier rendez vous
  {path:"modifierRendez-vous/:id" , component : ModifierRendezVousComponent},
  //http:localhost :4200/ ajouter publication
  {path:"addPublication", component : PublicationComponent},
  //http:localhost :4200/ consulter publications
  {path:"consulterPublication", component : ConsulterPublicationsComponent},
  //http: localhost : 4200/ Contacter
  {path:"contacter", component : ContacterComponent},
  //http: localhost : 4200/search
  {path:"search" , component : SearchComponent},
  //http: localhost : 4200/espace patients
  {path:"espacePatients" , component : EspacePatientsComponent},
  //http: localhost : 4200/envoie les resultats
  {path:"envoiResultats" , component : ResultatComponent},
  //http: localhost : 4200/voir resultat medecins
  {path: "voirResultats" , component : VoirResultatsComponent},
  //http: localhost : 4200/notification resultat
  {path: "envoieNotification" , component : EnvoieNotificationComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
