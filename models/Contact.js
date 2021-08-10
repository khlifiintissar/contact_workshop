const mongoose=require("mongoose");
const schema=mongoose.Schema;
//définir la structure des documents avec un shema bine défini 
const contactSchema=new schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
       //required:true,
      // unique:true,
    },
    Phone:String,
});
module.exports=Contact=mongoose.model("contact",contactSchema);