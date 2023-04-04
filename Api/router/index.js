const {Router}= require('express');

const router= Router();
const photo= require('./photoRoutes.js')

// router.get('/', (req,res) => {
//     res.send('HOLA MUNDO')
// })

router.use('/', photo)

module.exports=router;