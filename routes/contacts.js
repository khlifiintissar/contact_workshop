const express=require("express");
const router=express.Router();
const Contact=require("../models/Contact");
const controllers=require("../controllers/contact.controllers")
//test routing
router.get("/hello",(req,res)=>{
    res.send("hello routing");
});
//post contact
//get all contact
// get contact bi ID
//delete contact by Id 
//update contact by ID

//documentation swagger
//@post method
//@desc post a contact
//@path : http://localhost:5000/api/contact
//Params body
router.post("/",controllers.postContact);

//@Method GET
//@desc GET ALL contacts
//@path:http://localhost:5000/api/contact

router.get("/",async(req,res)=>{
    try {
        const result=await Contact.find();
        res.send({response:result,message:"getting contacts successifs"})
    } catch (error) {
        res.status(400).send({messsage:"can not get contacts"})
    }
})


//@Method GET one
//@desc GET one contact
//@path:http://localhost:5000/api/contact/:id (on a ajouté le parametre id)
//@params id

router.get("/:id",async(req,res)=>{
    try {
        const result=await Contact.findOne({ _id:req.params.id });
        res.send({response:result,message:"getting contacts successifs"})
    } catch (error) {
        res.status(400).send({messsage:"can not get contacts"})
    }
})

//@Method Delete
//@desc Delete one contact 
//@path:http://localhost:5000/api/contact/:id
//@params id 
router.delete("/:id",async(req,res)=>{
try {
    const result =await Contact.deleteOne({ _id:req.params.id });
    console.log(result);
    result.n? res.send("user deleted"):res.send("there is no user with this id");
} catch (error) {
    res.send("there is no user with this id");
}
});
//@Method PUT (update a contact by id)
//@desc update a contact by id
//@path : http://localhost:5000/api/contact/:id
//@Params id Body (kima fil post y3adiw l'objet fil body)
router.put("/:id",async(req,res)=>{
    try {
        const result = await Contact.updateOne({_id:req.params.id},{$set:{...req.body}});
        console.log(result)
        result.nModified?
        res.send({message:"user update"})
        :res.send({message:"contact already updated"});
    } catch (error) {
        res.status(400).send("there is no user with this id");
    }
})

module.exports=router;