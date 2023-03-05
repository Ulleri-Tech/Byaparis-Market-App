import { NextApiRequest,NextApiResponse } from "next";
import jwt from 'jsonwebtoken';

const KEY = "c08d2fe8672ccde6ebc7ea2953a3e52731204097e2d87d3dff3e03f92086632e"

 export default async function handler(req:NextApiRequest,res:NextApiResponse) {
   try {
   if(!req.body){
      res.statusCode= 404
      res.end("Error")
      return
   }
    const {email,password} = req.body;

    res.status(200).json({
      token: jwt.sign({
         email,
         admin: email === 'admin@gmail.com' && password === "admin"
      },KEY),
      user: email
    })
   }
   catch (err) {
      console.log(err);
      return res.status(500).json({ err: "err.message" });
    }
 }