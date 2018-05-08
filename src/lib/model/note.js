import mongoose from 'mongoose';

const noteSchema=mongoose.Schema({
    title:{
        type:string,
        required:true,
        unique:true,
    },
    content:{
        type:string,
        required:true,
        minlength:10,
    },
    timestamp:{
        type:Date,
        default:()=>new Date(),
    },
    });
export default mongoose.model('note',noteSchema);