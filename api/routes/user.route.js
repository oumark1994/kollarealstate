import express from "express";
import {test,updateUser,deleteUser,signOut,getUserListings,getUser} from "../controllers/user.controller.js"
import { verifyToken } from "../utils/verifyUser.js";
 const router = express.Router();
router.get('/',test)
router.post('/update/:id',verifyToken,updateUser);
router.delete('/delete/:id',verifyToken,deleteUser);
router.get('/signout',signOut);
router.get('/listings/:id',verifyToken,getUserListings);
router.get('/:id',verifyToken,getUser);
export default router;