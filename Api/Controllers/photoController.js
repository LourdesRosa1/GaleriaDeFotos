
const Photo = require('../models/Photo.js')

//funcion con la que me traigo todos las fotos
const getPhotos= async () => {
    const allPhotos= await Photo.find({});
    return allPhotos
}

//fincion con la que creo foto
const createPhotos= async (req, res) => {
    try{
        const {title, description,imageURL,public_id} =req.body;
        const craetePhoto= new Photo({
            title,
            description,
            imageURL,
            public_id
        })
        const newPhoto= await craetePhoto.save()
        res.status(201).json(newPhoto)
    }catch(error) {
        res.status(400).json(error.message)
    }
    } 

//funcion para cmbiar dato
const updatePhoto= async(id, update) => {
    const photo=await Photo.findByIdAndUpdate(id, {$set: update}, {new:true})
    return photo
}

//funcion para activar o desactivar photo. Borrado logico
const switchPhoto= async(id, active) => {
    const photo= await Photo.findById(id);
    if(photo === null) throw new Error('not photo');
    await Photo.findByIdAndUpdate(id, {active:active})
}

    module.exports= {createPhotos, getPhotos, updatePhoto, switchPhoto}
