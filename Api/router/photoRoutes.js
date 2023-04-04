const {Router}= require('express');
const {createPhotos, getPhotos, updatePhoto, switchPhoto}=require('../Controllers/photoController.js')

photoRouter= Router()

//Ruta en la que traigo todas las fotos
photoRouter.get('/photo', async(req, res) => {
   try{
    const photo= await getPhotos();
    return res.status(200).json(photo);
   }catch(error){
    res.status(404).json(error.message);
   }
});

//ruta co la que creo
photoRouter.post('/photo', createPhotos);

//funcion para cambiar dato
photoRouter.put('/photo/:id', async (req,res) =>{
    const {id}=req.params;
    const update=req.body;
    try{
        const updatePhot= await updatePhoto(id, update);
        res.status(200).json(updatePhot);
    } catch(error) {
        res.status(404).json(error.message);
    }
})

//funcion para activar o desactivar photo. Borrado logico con petición patch (también lo revierte)
photoRouter.patch('/photo/:id', async (req,res) =>{
    const {id}=req.params;
    const { active }=req.body;
    try{
        const activePhoto= await switchPhoto(id, active);
        res.status(200).json(activePhoto);
    } catch(error) {
        res.status(404).json(error.message);
    }
})

module.exports = photoRouter;