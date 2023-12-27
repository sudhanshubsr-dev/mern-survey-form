import Form from '../models/form.model.js';
export default class FormController{
    static async createForm(req,res){
        

        const{name, gender, nationality, email, phoneNumber, address, message} = req.body;
        try{
            const formDoc = await Form.create({
                name,
                gender,
                nationality,
                email,
                phoneNumber,
                address,
                message
            })
            res.status(201).json({message:'Form created successfully', formDoc});
            
        }catch(err){
            res.status(500).json(err);
        }
    }
}