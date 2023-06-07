import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-information-principale',
  templateUrl: './information-principale.component.html',
  styleUrls: ['./information-principale.component.css']
})
export class InformationPrincipaleComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }


//****consulter + voir en urgence */
consulterOne(){
  this.router.navigate(['verification']);
}
voirOne(){
  Swal.fire({
    title: 'Services Urgences!',
    text: 'Chef de bloc : Bechir Salhi  Nombre de medecins :6 medecins , Nombre des infermieres : 4 infermiere(s) , 3 Aid soignants.',
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
}

//** ///consulter + voir partie chirugie */
consulterTwo(){
this.router.navigate(["verification"]);
}
voirTwo(){
  Swal.fire({
    title: 'Services Chirugie Generale!',
    text: 'Chef de bloc : Mohamed Hamdi  Nombre de medecins :20 medecins , Nombre des infermieres : 10 infermiere(s) , 6 Aid soignants.',
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
}
///**** consulter + voir partie Gynecologue//// */
consulterThree(){
  this.router.navigate(["verification"]);
  }
  voirThree(){
    Swal.fire({
      title: 'Services Gynecologie!',
      text: 'Chef de Gynecologue : Chef(e)Pricipale: Leila Mahmoudi , Nombre de medecins :20 medecins , Nombre des sage de femme : 20 sage femme(s) , 6 Aid soignants.',
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }
  /////****consulter + voir partie orthopedique *////
  consulterFor(){
    this.router.navigate(["verification"]);
    }
    voirFor(){
      Swal.fire({
        title: 'Services Orthopedique!',
        text: 'Chef de Service : Karimi Hasni  Nombre de medecins :20 medecins , Nombre des Infermiere(s) : 10 infermiere(s) , 6 Aid soignants.',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    }
    ///***consulter + voir partie Urologie  */
    consulterFive(){
      this.router.navigate(["verification"]);
      }
      voirFive(){
        Swal.fire({
          title: 'Services Urologie!',
          text: 'Chef de Service : Helmi Hamdi  Nombre de medecins :15 medecins , Nombre des Infermiere(s) : 7 infermiere(s) , 6 Aid soignants.',
          imageUrl: 'https://unsplash.it/400/200',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
        })
      }
      ///*** consulter + voir partie cardio  */
      consulterSix(){
        this.router.navigate(["verification"]);
        }
        voirSix(){
          Swal.fire({
            title: 'Services Cardio!',
            text: 'Chef de Service : karima kouki  Nombre de medecins :10 medecins , Nombre des Infermiere(s) : 7 infermiere(s) , 4 Aid soignants.',
            imageUrl: 'https://unsplash.it/400/200',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
        }
        ///*** consulter + voir partie  orl  */
        consulterSeven(){
          this.router.navigate(["verification"]);
          }
          voirSeven(){
            Swal.fire({
              title: 'Services ORL!',
              text: 'Chef de Service : Dhafer Mnif  Nombre de medecins :10 medecins , Nombre des Infermiere(s) : 7 infermiere(s) , 4 Aid soignants.',
              imageUrl: 'https://unsplash.it/400/200',
              imageWidth: 400,
              imageHeight: 200,
              imageAlt: 'Custom image',
            })
          }
          //** consulter + voir partie pediatrique *///
          consulterHeight(){
            this.router.navigate(["verification"]);
            }
            voirHeight(){
              Swal.fire({
                title: 'Services Pediatrique!',
                text: 'Chef de Service : karima Farhani  Nombre de medecins :4 medecins , Nombre des Infermiere(s) : 3 infermiere(s) , 4 Aid soignants.',
                imageUrl: 'https://unsplash.it/400/200',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            }
            ///*** consulter + voir partie reanimation */
            consulterNine(){
              this.router.navigate(["verification"]);
              }
              voirNine(){
                Swal.fire({
                  title: 'Services Reanimation!',
                  text: 'Chef de Service : Aloui Rafaa  Nombre de medecins :4 medecins , Nombre des Infermiere(s) : 7 infermiere(s) , 4 Aid soignants.',
                  imageUrl: 'https://unsplash.it/400/200',
                  imageWidth: 400,
                  imageHeight: 200,
                  imageAlt: 'Custom image',
                })
              }
              ///*** consulter + voir partie laboratoires */
              consulterTen(){
                this.router.navigate(["verification"]);
                }
                voirTen(){
                  Swal.fire({
                    title: 'Services Labortoires Medicales!',
                    text: 'Chef de Service : Manel Naifer  Nombre de Techniciens :4 Technicies , Type Analyses : Tous les Types Medicales.',
                    imageUrl: 'https://unsplash.it/400/200',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                  })
                }
                //***Consulter + Voir Les publications**//// */
                consulterPublication(){
                  this.router.navigate(["addPublication"])
                }
                voirPublication(){
                  Swal.fire({
                    title: 'Creation Des Publications!',
                    text: 'Ecrire un(e) publications concerne les sujets medecins dons mon site polyclique les secours',
                    imageUrl: 'https://unsplash.it/400/200',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                  })
                }
}
