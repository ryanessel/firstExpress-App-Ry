const express = require(`express`)
const router = express.Router();
const Animal = require(`../../models/Animal`);

// form with post method will return the info from the form in the req.body
// for with get method will return info from form in the req.query.


//Create Route
router.post(`/create`, (req, res, next) => {
   

    const animalToCreate ={

        ...req.body,
        isMale: !!req.body.isMale,
        isFemale: !!req.body.isFemale
    }


    // console.log({body: req.body,  animalToCreate});

    Animal.create(animalToCreate)
    .then(()=> {
        // console.log({newMadeAnimal})
        res.redirect(`/animals/details/${animalToCreate._id}`);
    }).catch(err => {
        console.log({err})
    })




})

//Read Route
router.get(`/`, (req, res, next) => {
    console.log({query: req.query, params: req.params})
    Animal.find()
    .then((animalsFromDb) => {
        data = {
            animals: animalsFromDb
        }
        console.log({animalsFromDb});
        res.render(`animals/list`, data);

    })
    .catch(err => {
        console.log({err})
    })
   
})

router.get(`/details/:animalId`, (req, res, next)=> {
    console.log({params: req.params.animalId})
    Animal.findById(req.params.animalId).then(animaldb => {
        console.log({animaldb});

        res.render(`animals/details`, animaldb);
    }).catch(err => {console.log({err})})

})


module.exports = router;
