import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { KeyFeaturesComponent } from './components/key-features/key-features.component';
import { WithMedicalComponent } from './components/with-medical/with-medical.component';
import { KeyDepartmentComponent } from './components/key-department/key-department.component';
import { BlogComponent } from './components/blog/blog.component';
import { CopyComponent } from './components/copy/copy.component';
import { HommeComponent } from './components/homme/homme.component';
import { SpecialiteComponent } from './components/specialite/specialite.component';
import { ActionneursComponent } from './components/actionneurs/actionneurs.component';
import { InfoActionneursComponent } from './components/info-actionneurs/info-actionneurs.component';
import { ArticleComponent } from './components/article/article.component';
import { StructureComponent } from './structure/structure.component';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';
import { SignupPatientsComponent } from './components/signup-patients/signup-patients.component';
import { SignupMedecinsComponent } from './components/signup-medecins/signup-medecins.component';
import { LoginComponent } from './components/login/login.component';
import { BannerComponent } from './components/banner/banner.component';
import { AsterixPipe } from './pipes/asterix.pipe';
import { GenderPipe } from './pipes/gender.pipe';
import { CvPipe } from './pipes/cv.pipe';
import { MyFilterPipe } from './pipes/my-filter.pipe';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InformationPrincipaleComponent } from './components/information-principale/information-principale.component';
import { VerificationComponent } from './components/verification/verification.component';
import { RendezVousComponent } from './components/rendez-vous/rendez-vous.component';
import { ValiderRendezVousComponent } from './components/valider-rendez-vous/valider-rendez-vous.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminTableComponent } from './components/admin-table/admin-table.component';
import { MedecinsTableComponent } from './components/medecins-table/medecins-table.component';
import { PatientsTableComponent } from './components/patients-table/patients-table.component';
import { PublicationsTableComponent } from './components/publications-table/publications-table.component';
import { RendezVousTableComponent } from './components/rendez-vous-table/rendez-vous-table.component';
import { JwPaginationModule } from 'jw-angular-pagination';
import { ModifierMedecinsComponent } from './components/modifier-medecins/modifier-medecins.component';
import { ModifierPatientsComponent } from './components/modifier-patients/modifier-patients.component';
import { ModifierRendezVousComponent } from './components/modifier-rendez-vous/modifier-rendez-vous.component';
import { PublicationComponent } from './components/publication/publication.component';
import { VoirPublicationsComponent } from './components/voir-publications/voir-publications.component';
import { ConsulterPublicationsComponent } from './components/consulter-publications/consulter-publications.component';
import { ContacterComponent } from './components/contacter/contacter.component';
import { SearchComponent } from './components/search/search.component';
import { ContactProblemComponent } from './components/contact-problem/contact-problem.component';
import { EspacePatientsComponent } from './components/espace-patients/espace-patients.component';
import { ResultatComponent } from './components/resultat/resultat.component';
import { ResultatTableComponent } from './components/resultat-table/resultat-table.component';
import { VoirResultatsComponent } from './components/voir-resultats/voir-resultats.component';
import { EnvoieNotificationComponent } from './components/envoie-notification/envoie-notification.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    KeyFeaturesComponent,
    WithMedicalComponent,
    KeyDepartmentComponent,
    BlogComponent,
    CopyComponent,
    HommeComponent,
    SpecialiteComponent,
    ActionneursComponent,
    InfoActionneursComponent,
    ArticleComponent,
    StructureComponent,
    SignupAdminComponent,
    SignupPatientsComponent,
    SignupMedecinsComponent,
    LoginComponent,
    BannerComponent,
    AsterixPipe,
    GenderPipe,
    CvPipe,
    MyFilterPipe,
    InformationPrincipaleComponent,
    VerificationComponent,
    RendezVousComponent,
    ValiderRendezVousComponent,
    AdminComponent,
    AdminTableComponent,
    MedecinsTableComponent,
    PatientsTableComponent,
    PublicationsTableComponent,
    RendezVousTableComponent,
    ModifierMedecinsComponent,
    ModifierPatientsComponent,
    ModifierRendezVousComponent,
    PublicationComponent,
    VoirPublicationsComponent,
    ConsulterPublicationsComponent,
    ContacterComponent,
    SearchComponent,
    ContactProblemComponent,
    EspacePatientsComponent,
    ResultatComponent,
    ResultatTableComponent,
    VoirResultatsComponent,
    EnvoieNotificationComponent,
   
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,   //saisir manuellement et aussi pour importation
    FormsModule,
    ReactiveFormsModule,
    JwPaginationModule,

    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
