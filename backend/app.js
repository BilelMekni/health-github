///----------Module Importation--------///
// import express module
const express = require("express");
// import body-parser module
const bodyParser = require("body-parser");
// import path module
const path = require("path");
// import multer module
const multer = require("multer");
// import bcrypt module
const bcrypt = require("bcrypt");
// import axios module
const axios = require("axios");
//import jsonwebtoken module
const jsonwebtoken = require("jsonwebtoken");
// import mongoose module
const mongoose = require("mongoose");
// import ObjectID
const { ObjectId } = require("mongodb");
// Connect APP to DB (projetCliniqueDB)
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/projetCliniqueDB');

////----------Express Application--------////
// creates express application //
const app = express();
//---------Model Importation-------------//
const User = require("./models/user");
const Rendez = require("./models/rendez");
const rendez = require("./models/rendez");
const Publication = require("./models/publication");
const Authenticate = require("./models/authenticate");
const Contact = require("./models/contact");
const Resultat = require("./models/resultat");


// send JSON responses
app.use(bodyParser.json());
// Get Objects from Request
app.use(bodyParser.urlencoded({ extended: true }));

// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
// Folder confiquration
app.use('/images', express.static(path.join('backend/images')));

const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',
    'application/pdf': 'pdf',



};
const storageConfig = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});

////---------Buisness Logic----------////

//****** signup Admin*********//////
app.post("/admin/signup", multer({ storage: storageConfig }).single('img'), (req, res) => {
    console.log("Here into BL: Signup");
    const url = req.protocol + "://" + req.get("host");
    let path = req.file
        ? url + "/images/" + req.file.filename
        : url + "/images/" + "bilel.jpg";
    console.log("URL", url);
    // http://localhost:3002
    bcrypt.hash(req.body.password, 8).then((cryptedPwd) => {
        console.log("Here crypted Pwd", cryptedPwd);

        let admin = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            telephone: req.body.telephone,
            email: req.body.email,
            password: cryptedPwd,
            adresse: req.body.adresse,
            role: req.body.role,
            gender: req.body.gender,
            avatar: path,
        });
        admin.save((error, doc) => {
            console.log("Here error", error);
            console.log("Here doc", doc);
            if (error) {
                if (error.errors.email) {
                    res.json({ message: "Email exist" });
                }

            } else {
                res.json({ message: "Added with success" });

            }
        });
    });

});

//****** signup Medecins***////// */
app.post("/medecins/signup", multer({ storage: storageConfig }).fields([{ name: 'img', maxCount: 1 }, { name: 'cv', maxCount: 1 }]), (req, res) => {
    console.log("Here into BL: Signup");
    const url = req.protocol + "://" + req.get("host");
    console.log("URL", url);
    let avatar = "";
    if (req.files.img) {
        avatar = url + '/images/' + req.files.img[0].filename;
    } else {
        avatar = url + '/images/' + "bilel.jpg"
    }
    // http://localhost:3003
    bcrypt.hash(req.body.password, 8).then((cryptedPwd) => {
        console.log("Here crypted Pwd", cryptedPwd);

        let medecin = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            telephone: req.body.telephone,
            status: req.body.status,
            email: req.body.email,
            password: cryptedPwd,
            adresse: req.body.adresse,
            experience: req.body.experience,
            specialite: req.body.specialite,
            matricule: req.body.matricule,
            role: req.body.role,
            status: req.body.status,
            gender: req.body.gender,
            img: avatar,
            cv: url + "/images/" + req.files.cv[0].filename,

        });
        medecin.save((error, doc) => {
            console.log("Here error", error);
            console.log("Here doc", doc);
            if (error) {
                if (error.errors.email && !error.errors.telephone) {
                    res.json({ message: "Email exist", emailExist: true, telephoneExist: false });


                } else if (!error.errors.email && error.errors.telephone) {
                    res.json({ message: "Telephone exist", emailExist: false, telephoneExist: true });

                } else {
                    res.json({ message: "Email & Tel exist", emailExist: true, telephoneExist: true });
                }
            } else {
                res.json({ message: "Medecins added with success" });
            }

        });

    });

});
//****** signup Patients ***////** */ */
app.post("/patients/signup", multer({ storage: storageConfig }).single('img'), (req, res) => {
    console.log("Here into BL: Signup");
    const url = req.protocol + "://" + req.get("host");
    let path = req.file
        ? url + "/images/" + req.file.filename
        : url + "/images/" + "bilel.jpg";
    console.log("URL", url);
    // http://localhost:3002
    bcrypt.hash(req.body.password, 8).then((cryptedPwd) => {
        console.log("Here crypted Pwd", cryptedPwd);

        let patient = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            telephone: req.body.telephone,
            email: req.body.email,
            password: cryptedPwd,
            adresse: req.body.adresse,
            role: req.body.role,
            status: req.body.status,
            gender: req.body.gender,
            avatar: path,
        });
        patient.save((error, doc) => {
            console.log("Here error", error);
            console.log("Here doc", doc);
            if (error) {
                if (error.errors.email) {
                    res.json({ message: "Email exist" });
                }

            } else {
                res.json({ message: "Added with success" });

            }
        });
    });

});


/////-----Buisness Logic ----//////
/****////*****Login ////*** */ */ */
app.post("/patients/login", (req, res) => {
    console.log("Here into login", req.body);
    let user;
    User.findOne({ $or: [{ email: req.body.email }, { telephone: req.body.telephone }] }).then((doc) => {
        if (!doc) {
            res.json({ msg: "0" });

        }
        user = doc;
        return bcrypt.compare(req.body.password, doc.password);
    }).then(
        (pwdResponse) => {
            console.log("here pwdResponse ", pwdResponse);
            if (!pwdResponse) {
                res.json({ msg: "1" });

            } else {
                // send user information {id , fName, lName, role}
                let userTosend = {
                    id: user._id,
                    fName: user.firstName,
                    lName: user.lastName,
                    role: user.role,
                };
                res.json({ user: userTosend, msg: "2" });

            }
        });


});

//// --- Buisness Logic ----////
// Business Logic Get All Medecins
app.get("/medecins", (req, res) => {
    console.log("Here into BL: Get All medecins");
    User.find({ "role": { "$in": "medecins" } }).then((docs) => {
        // console.log("Here data after search all patients", docs);
        res.json({ medecins: docs });
    });
});
//// --- Buisness Logic ----////
// Business Logic Get All Patients
app.get("/patients", (req, res) => {
    console.log("Here into BL: Get All patients");
    User.find({ "role": { "$in": "patients" } }).then((docs) => {
        // console.log("Here data after search all patients", docs);
        res.json({ patients: docs });
    });
});
//// --- Buisness Logic ----////
// Business Logic Get All Rendez vous
// app.get("/rendezvous/rendez/all/all", (req, res) => {
//     console.log("Here into BL: Get All rendez vous");
//     rendez.find().then((docs) => {
//         console.log("Here data after search all rendez vous", docs);
//         res.json({ rendezadmin: docs });
//     });
// });
///***  get medecins by id //***** */   */
app.get("/medecins/:x", (req, res) => {
    let id = req.params.x;
    console.log("Here into BL: Get medecins By ID", id);
    User.findOne({ _id: id }).then((doc) => {
        console.log("Here doc", doc);
        doc
            ? res.json({ medecins: doc })
            : res.json({ message: "Medecins does not exist" });
    });


}

);
///****get patients by id ///***** */ */
app.get("/patients/:y", (req, res) => {
    let id = req.params.y;
    console.log("Here into BL : Get patients By ID", id);
    User.findOne({ _id: id }).then((doc) => {
        console.log("here doc", doc);
        doc
            ? res.json({ patients: doc })
            : res.json({ message: "Patients does not exist" });
    });
})


//****Prize de rendey Vous**////// */

// Business Logic:Rendez Vous
app.post("/rendezvous", (req, res) => {
    console.log("Here into BL: Rendez vous", req.body);
    let rendez = new Rendez({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        telephone: req.body.telephone,
        adresse: req.body.adresse,
        description: req.body.description,
        selection: req.body.selection,
        date: req.body.date,
    });
    rendez.save((error, doc) => {
        console.log("Here error", error);
        console.log("Here doc", doc);
        if (doc) {
            res.json({ message: "Added with success" });
        } else {
            res.json({ message: "Error" });
        }
    });
});

// Business Logic : Get All rendez vous //**** */
app.get("/rendezvous", (req, res) => {
    console.log("Here into BL: Get All rendezvous");
   rendez.find().then((docs) => {
        console.log("Here data after search all rendez vous", docs);
        res.json({ rendez: docs });
    });
});
///****get rendez vous by id ///***** */ */
app.get("/rendezvous/:z", (req, res) => {
    let id = req.params.z;
    console.log("Here into BL : Get rendez vous By ID", id);
    Rendez.findOne({ _id: id }).then((doc) => {
        console.log("here doc", doc);
        doc
            ? res.json({ rendez: doc })
            : res.json({ message: "Patients does not exist" });
    });
})
/// Buisness Logic Admin : Get all Admin Table//**** */
app.get("/admin", (req, res) => {
    console.log("Here into BL: Get All admin");
    User.find({ "role": { "$in": "admin" } }).then((docs) => {
        // console.log("Here data after search all admin", docs);
        res.json({ admin: docs });
    });
});

///******Buisness Logic Confirme admin****//////
// business logic: confirmed status patients
app.post("/patients/status/:id", (req, res) => {
    console.log("here id ", req.params.id);
    let id = req.params.id;
    User.updateOne({ _id: id }, { status: "confirmed" }).then((docs) => {
        (response) => {
            console.log("here response after update", response);
            if (response.modifiedCount == 1) {
                res.json({ message: `status N° : Edited with success` })
            } else {
                res.json({ message: `Not Edited` })
            }
        }
    })
})
///Buisness Logic :   */** confirmed status medecins///**** */ */
app.post("/medecins/status/:id", (req, res) => {
    console.log("here id confirme medecins", req.params.id);
    let id = req.params.id;
    User.updateOne({ _id: id }, { status: "confirmed" }).then((docs) => {
        (response) => {
            console.log("here response medecins confirme after update", response);
            if (response.modifiedCount == 1) {
                res.json({ message: `status N° : Edited with success` })

            } else {
                res.json({ message: `Not Edited` })

            }
        }
    })

})

////**** Les bouton modifier et supprimer /// */
///*** Buisness Logic : update and delete width Admin //*** */ */
app.delete("/medecins/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete Medecins By ID", id);
    User.deleteOne({ _id: id }).then((response) => {
        console.log("Here response after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })

});
///**** update medecins by admin  */
app.put("/medecins", (req, res) => {
    console.log("here into BL:Edit Medecins", req.body);

    User.updateOne({ _id: req.body._id }, req.body).then(
        (response) => {
            console.log('here is res', response);
            if (response.modifiedCount == 1) {
                res.json({ message: "User is edited with success" });
            } else {
                res.json({ message: "Error" });
            }
        });
});
///***  delete patients by id */
app.delete("/patients/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete Patients By ID", id);
    User.deleteOne({ _id: id }).then((response) => {
        console.log("Here response after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })

});
///****update patients by admin ///*** */ */
app.put("/patients", (req, res) => {
    console.log("here into BL:Edit Patients", req.body);

    User.updateOne({ _id: req.body._id }, req.body).then(
        (response) => {
            console.log('here is res', response);
            if (response.modifiedCount == 1) {
                res.json({ message: "User is edited with success" });
            } else {
                res.json({ message: "Error" });
            }
        });
});
///***delete validez rendez vous patients**/// */
app.delete("/rendezvous/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete RendezVous Patients By ID", id);
    rendez.deleteOne({ _id: id }).then((response) => {
        console.log("Here response after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })

});
///****update rendez vous by patient ///*** */ */
app.put("/rendezvous", (req, res) => {
    console.log("here into BL:Edit rendezvous", req.body);

    Rendez.updateOne({ _id: req.body._id }, req.body).then(
        (response) => {
            console.log('here is res', response);
            if (response.modifiedCount == 1) {
                res.json({ message: "User is edited with success" });
            } else {
                res.json({ message: "Error" });
            }
        });
});

//****Publication Patients ////**** */ */
// Business Logic:Add Publication
app.post("/publications", (req, res) => {
    console.log("Here into BL: Add Publication", req.body);
    let publication = new Publication({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        status: req.body.status,
        reservation: req.body.reservation,
        patientsId: req.body.patientsId,
    });
    console.log("here aded pub", publication);
    publication.save((error, doc) => {
        console.log("Here error", error);
        console.log("Here doc", doc);
        if (doc) {
            res.json({ message: "Added with success" });
        } else {
            res.json({ message: "Error" });
        }
    });
});
////Business Logic : Confirme Publication
app.post("/publications/status/:id", (req, res) => {
    console.log("here id ", req.params.id);
    let id = req.params.id;
    Publication.updateOne({ _id: id }, { status: "confirmed" }).then((docs) => {
        (response) => {
            console.log("here response after update", response);
            if (response.modifiedCount == 1) {
                res.json({ message: `status N° : Edited with success` })
            } else {
                res.json({ message: `Not Edited` })
            }
        }
    })
})
//**** Buisness Logic : get all publications by aggregate //*** */ */
app.get("/publications/all", (req, res) => {
    console.log("here publications with comments");
    Publication.aggregate(
        [

            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "patientsId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "publications", // output array field
                },
            },
        ],
        (error, docs) => {
            console.log("here all pubs", docs);
            res.status(200).json({
                publications: docs,
            });
        }
    );

})
///*** Buisness Logic : publications by id**/// */
app.get("/publications/:id", (req, res) => {
    console.log("here publications with id", req.params.id);
    Publication.aggregate(
        [
            {
                $match: { patientsId: ObjectId(req.params.id) }, ///$match:pour filtrer les documents d'une collection
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "patientsId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "patients", // output array field
                },
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "userId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "users", // output array field

                },

            },

        ],

        (error, docs) => {
            console.log("here  pubs by patient id", docs);
            res.status(200).json({
                pubs: docs,
            });
        }
    );

})
//*** Medecins : consultes les publications confirmer *////
app.get("/publications/", (req, res) => {
    console.log("here publications with id", req.params.id);
    Publication.aggregate(
        [
            {
                $match: { status: "confirmed" },
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "patientsId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "patients", // output array field
                },
            },


        ],
        (error, docs) => {
            console.log("here  pubs by patient id", docs);
            res.status(200).json({
                pubs: docs,
            });
        }
    );

})
//*****delete publication by admin //**** */ */
app.delete("/publications/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete RendezVous Patients By ID", id);
    Publication.deleteOne({ _id: id }).then((response) => {
        console.log("Here response publication after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })

});
///*** Accepter votte demande de publications ***///*/
app.put("/publications/post/notif/active", (req, res) => {
    console.log("here Notif");
    let userId = req.body.userId;
    let reservation = req.body.reservation;
    console.log("here new userId", userId);
    console.log("here new reserved", reservation);
    console.log("here ID",req.body._id);
    Publication.updateOne({ _id: req.body._id }, req.body).then(
      (response) => {
        console.log("here response after update", response);
        if (response.modifiedCount == 1) {
          res.json({ message: `User : Edited with success` });
        } else {
          res.json({ message: `Not Edited` });
        }
      });
  })

///****add Contacter */
///**Buisness Logic : ADD CONTACT ///*****/
app.post("/admin", (req, res) => {
    console.log("Here into BL: Add Contacter", req.body);
    let contacter = new Contact ({
        firstName: req.body.firstName,
        description : req.body.description,
        telephone: req.body.telephone,
        email : req.body.email,
       

    });
    console.log("here aded contact", contacter);
    contacter.save((error, doc) => {
        console.log("Here error", error);
        console.log("Here doc", doc);
        if (doc) {
            res.json({ message: "Added with success" });
        } else {
            res.json({ message: "Error" });
        }
    });
});
//**Buisness Logic : get all contact probleme in admin ****/
app.get("/admin/contact/all", (req, res) => {
    console.log("Here into BL: Get All Contact Problem");
    Contact.find().then((docs) => {
        // console.log("Here data after search all patients", docs);
        res.json({ contact: docs });
    });
});
//****Buisness Logic : delete contact probleme width admin//**** */ */
app.delete("/admin/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete RendezVous Patients By ID", id);
    Contact.deleteOne({ _id: id }).then((response) => {
        console.log("Here response contact probleme after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })

});

///****search  by medecins**///// */
app.post("/medecins/search", (req, res) => {
    let searchObj = req.body;
    console.log(searchObj);
    User.find({
      role: "medecins",
      status: "confirmed",
      //search by adreese ou experience
      $or: [
        { adresse: searchObj.adresse },
        {
          experience: {
            $lte: searchObj.experiencemax,
            $gte: searchObj.experiencemin,
           
          },
        },
      ],
    }).then((docs) => {
      res.json({ searchTab: docs });
    });
  });

  //****Resultats Reponses Medecins aux Patients ////**** */ */
// Business Logic:Add Reponse
app.post("/resultats", (req, res) => {
    console.log("Here into BL: Add Resultat", req.body);
    let resultat = new Resultat({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        specialite : req.body.specialite,
        telephone : req.body.telephone,
        status: req.body.status,
        accepter: req.body.accepter,
        medecinsId: req.body.medecinsId,
    });
    console.log("here aded pub", resultat);
    resultat.save((error, doc) => {
        console.log("Here error", error);
        console.log("Here doc", doc);
        if (doc) {
            res.json({ message: "Added with success" });
        } else {
            res.json({ message: "Error" });
        }
    });
});
////Business Logic : Confirme Resultat
app.post("/resultats/status/:id", (req, res) => {
    console.log("here id ", req.params.id);
    let id = req.params.id;
    Resultat.updateOne({ _id: id }, { status: "confirmed" }).then((docs) => {
        (response) => {
            console.log("here response after update", response);
            if (response.modifiedCount == 1) {
                res.json({ message: `status N° : Edited with success` })
            } else {
                res.json({ message: `Not Edited` })
            }
        }
    })
})
//**** Buisness Logic : get all resultats by aggregate //*** */ */
app.get("/resultats/result/all/pub", (req, res) => {
    console.log("here resultats with comments");
    Resultat.aggregate(
        [

            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "medecinsId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "resultats", // output array field
                },
            },
        ],
        (error, docs) => {
            console.log("here all pubs", docs);
            res.status(200).json({
                resultats: docs,
            });
        }
    );

})
///*** Buisness Logic : resultat by id**/// */
app.get("/resultats/envoie/:id", (req, res) => {
    console.log("here resultats with id", req.params.id);
    Resultat.aggregate(
        [
            {
                $match: { medecinsId: ObjectId(req.params.id) }, ///$match:pour filtrer les documents d'une collection
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "medecinsId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "medecins", // output array field
                },
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "userId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "users", // output array field

                },

            },

        ],

        (error, docs) => {
            console.log("here  pubs by patient id", docs);
            res.status(200).json({
                pubs: docs,
            });
        }
    );

})
//***voir reponse confirmer medecins par les patients ***///*/
app.get("/resultats/voir/accepter/tous/rest", (req, res) => {
    console.log("here resultats with id", req.params.id);
    Resultat.aggregate(
        [
            {
                $match: { status: "confirmed" },
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "medecinsId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "medecins", // output array field
                },
            },


        ],
        (error, docs) => {
            console.log("here  pubs by medecins id", docs);
            res.status(200).json({
                result: docs,
            });
        }
    );

})
//***delete resultat from admin**///// */
app.delete("/resultats/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete Resultas admin By ID", id);
    Resultat.deleteOne({ _id: id }).then((response) => {
        console.log("Here response resultats after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })

});

//*****Envoyer reponses notification  aux patiens  **//*/

app.put("/resultats/envoyer/notif/clean/accpt", (req, res) => {
    console.log("here Notif reponse resultat");
    let userId = req.body.userId;
    let accepter = req.body.accepter;
    console.log("here new userId", userId);
    console.log("here new reserved", accepter);
    console.log("here ID",req.body._id);
    Resultat.updateOne({ _id: req.body._id }, req.body).then(
      (response) => {
        console.log("here response after update", response);
        if (response.modifiedCount == 1) {
          res.json({ messages: `User : Edited with success` });
        } else {
          res.json({ messages: `Not Edited` });
        }
      });
  })

 

///---------App Exportation--------///
// make app importable from another files
module.exports = app;