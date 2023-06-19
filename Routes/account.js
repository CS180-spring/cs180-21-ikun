//handle all player requests
const express = require("express")
const fs = require('fs');

const dataPath = './jsonDB/player.json'            //local path to json file

//JSON Handling for read and write to local path
const getPlayer = () => {
    const jsonData = fs.readFileSync(dataPath)       //read from our player.json
    return JSON.parse(jsonData)    
}

const savePlayer = (data) => {
    const stringifyData = JSON.stringify(data)      //stringify converts js text to JSON string
    fs.writeFileSync(dataPath, stringifyData)       //store to our player.json
}

const userRoutes = express.Router();

// READ - using get, gets all JSON objects 
userRoutes.get('/player/list', (req, res) => {
    const player = getPlayer()
    res.send(player)
  })

// read player by ID
//   userRoutes.get('/player/:id', (req, res) => {
//     const requestId = req.params.id;
//     const player = getPlayer()
//     const findPlayer = player.find((findPlayer) => player[findPlayer.id === requestId])   //issue with ref. JSON object returned from getPlayer method, not sure how to parse object correctly
//     res.send(findPlayer)
//   })

// CREATE - using post, create new JSON entry
userRoutes.post('/player/addPlayer', (req, res) => {
    const newPlayerId = Math.floor(100000+Math.random()*300000)
    var existPlayers = getPlayer()
   
    existPlayers[newPlayerId] = req.body
    console.log(existPlayers);

    savePlayer(existPlayers);
    res.send({success: true, msg: 'player added with id:' + newPlayerId})
})

// UPDATE - using Put method, update specific JSON entry
userRoutes.put('/player/:id', (req, res) => {
   var existAccexistPlayersounts = getPlayer()
   fs.readFile(dataPath, 'utf8', (err, data) => {
    const getId = req.params['id'];
    var existPlayers = getPlayer();
    existPlayers[getId] = req.body;

    savePlayer(existPlayers);
    res.send(`players with id ${getId}  updated`)
  }, true);
});

//delete - using delete method
userRoutes.delete('/player/delete/:id', (req, res) => {
   fs.readFile(dataPath, 'utf8', (err, data) => {
    var existPlayers = getPlayer()

    const getId = req.params['id'];

    delete existPlayers[getId];  
    savePlayer(existPlayers);
    res.send(`accounts with id ${getId} deleted`)
  }, true);
})

//To implement
//Search by player ID, filter by req.params.id, parse JSON object by specifc id
//Filter by req. params, 
module.exports = userRoutes;