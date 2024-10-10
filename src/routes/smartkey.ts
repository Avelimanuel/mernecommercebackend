import {Router} from 'express'





const router = Router();


router.get("/smartkeys",(req,res)=>{
    return res.status(200).json({message:"All smart keys"})
})

export { router as smartkeyRouter };