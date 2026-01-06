import { Request, NextFunction,Response, json } from "express";
import jwt from 'jsonwebtoken'
import { TokenPayload } from "../../interface/TokenPayload"; 
const JWT_SECRET_KEY=process.env.JWT_SECRET_KEY || "k@erew"

export function authMiddleware(req:Request,res:Response,next:NextFunction){

const authHeader=req.headers.authorization
if(!authHeader){
    return res.status(401).json({message:"Token não fornecido"})
}

const [,token]=authHeader.split(" ");

try {
     const decoded=jwt.verify(token,JWT_SECRET_KEY) as TokenPayload
     req.userId=decoded.id
     return next()
} catch (error) {
    return res.status(401).json({ message: "Token inválido" });
}
}