import express from "express";
import gameFacade from "../facades/gameFacade";
const router = express.Router();
import { ApiError } from "../errors/apiError"


//import * as mongo from "mongodb"
import setup from "../config/setupDB"
import UserFacade from '../facades/userFacadeWithDB';

(async function setupDB() {
  const client = await setup()
  gameFacade.setDatabase(client)
})()

router.get('/', async function (req, res, next) {
  res.json({"msg":"Welcome to the Game API!"})
})

router.post('/nearbyplayers', async function (req, res, next) {
  try{
    const userName = req.body.userName
    const password = req.body.password
    const longitude: number = req.body.lon
    const latitude: number = req.body.lat
    const distance: number = req.body.distance
    const found = await gameFacade.nearbyPlayers(userName,password,longitude,latitude,distance)
    res.json(found)
  } catch(err) {
    next(err)
  }

})
router.post('/getPostIfReached', async function (req, res, next) {
    throw new Error("Not yet implemented")
})

module.exports = router;