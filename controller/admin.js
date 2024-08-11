
const Admin=require('../model/adminModel')
exports.adminSignup=async(req,res)=>{
    try{
        const admin = new Admin({
            ...req.body
        });

        const existingAdminByEmail = await Admin.findOne({ email: req.body.email });
        const existingSchool = await Admin.findOne({ schoolName: req.body.schoolName });

        if (existingAdminByEmail) {
            res.send({ message: 'Email already exists' });
        }
        else if (existingSchool) {
            res.send({ message: 'School name already exists' });
        }
        
        let result = await admin.save();
        result.password = undefined;
       return res.send(result);
    }
    catch(e){
        console.log(e)
      return  res.status(500).json(e);
    }
}
exports.adminSignin=async(req,res)=>{
    try{
        if (req.body.email && req.body.password) {
            let admin = await Admin.findOne({ email: req.body.email });
            if (admin) {
                if (req.body.password === admin.password) {
                    admin.password = undefined;
                    res.send(admin);
                } else {
                    res.send({ message: "Invalid password" });
                }
            } else {
                res.send({ message: "User not found" });
            }
        } else {
            res.send({ message: "Email and password are required" });
        }
    }
    catch(err){
        console.log(err)
        return res.status(400).json({
             
            message:"Something went wrong while signin"
        })
    }
}
exports.getAdmin=async(req,res)=>{
    try{
     const {id}=req.params;
     let admin=await Admin.findById(id);
     if(!admin){
        return res.status(400).json({
            message:"Admin not found"
        })
     }
     admin.password = undefined;
     return res.send(admin);
    }
    catch(err){
        res.status(500).json(err);
    }
}