const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/posts', (req, res) => {
  res.send(
    [{
      title: "Hello World!",
      description: "Hi there! How are you?"
    }]
  )
})

app.get('/summary', (req, res) => {
    res.send(
      [{
        "team1": {
          "teamName": "Russia",
          "goals": [
            {
              "minute": "12'",
              "player": "Yuri Gazinskiy",
              "isFromCorner": true,
              "isHead": true
            },
            {
              "minute": "42'",
              "player": "Denis Cheryshev",
              "isLeftFoot": true
            },
            {
              "minute": "71'",
              "player": "Artem Dzyuba",
              "isHead": true
            },
            {
              "minute": "91'",
              "player": "Denis Cheryshev",
              "isLeftFoot": true
            },
            {
              "minute": "94'",
              "player": "Aleksandr Golovin",
              "isFreekick": true,
              "isRightFoot": true
            }
          ]
        },
        "team2": {
          "teamName": "Saudi Arabia",
          "goals": []
        }
      }
      ]
    )
})

app.get('/stats', (req, res) => {
res.send(
    [{
        "team1": {
          "teamName": "Russia",
          "teamStats": {
            "touches": 543,
            "passesTotal": 343,
            "passesSuccessful": 250,
            "aerialsTotal": 50,
            "aerialsWon": 37,
            "cornersTotal": 6,
            "tacklesTotal": 31,
            "tackleSuccessful": 24,
            "tackleUnsuccesful": 7,
            "throwInsTotal": 29,
            "interceptions": 13,
            "clearances": 15,
            "offensiveAerials": 24,
            "defensiveAerials": 26,
            "shotsTotal": 14,
            "shotsOffTarget": 3,
            "shotsBlocked": 4,
            "shotsOnTarget": 7,
            "dribblesLost": 4,
            "dribblesAttempted": 14,
            "dribblesWon": 10,
            "dribbledPast": 7,
            "dispossessed": 21,
            "foulsCommited": 22,
            "foulsWon": 10,
            "offsidesCaught": 3,
            "possessionMins": 38,
            "goals": 5,
            "crossesTotal": 15,
            "assists": 3
          }
        },
        "team2": {
          "teamName": "Saudi Arabia",
          "teamStats": {
            "totalSaves": 2,
            "touches": 754,
            "passesTotal": 558,
            "passesSuccessful": 452,
            "aerialsTotal": 50,
            "aerialsWon": 13,
            "cornersTotal": 2,
            "tacklesTotal": 35,
            "tackleSuccessful": 25,
            "tackleUnsuccesful": 10,
            "throwInsTotal": 30,
            "interceptions": 8,
            "clearances": 21,
            "offensiveAerials": 26,
            "defensiveAerials": 24,
            "shotsTotal": 6,
            "shotsOffTarget": 3,
            "shotsBlocked": 3,
            "dribblesLost": 11,
            "dribblesAttempted": 18,
            "dribblesWon": 7,
            "dribbledPast": 10,
            "dispossessed": 13,
            "foulsCommited": 10,
            "foulsWon": 22,
            "offsidesCaught": 1,
            "possessionMins": 56,
            "crossesTotal": 6
          }
        }
      }
      ]
)
})

app.get('/events', (req, res) => {
    res.send(
      [{
        "team1": {
          "teamName": "Russia",
          "events": [
            {
              "minute": "0'",
              "eventName": "Game-Start"
            },
            {
              "minute": "11'",
              "players": [
                {
                  "playerName": "Aleksandr Golovin"
                }
              ],
              "eventName": "Assist-Goal"
            },
            {
              "minute": "23'",
              "players": [
                {
                  "playerName": "Denis Cheryshev"
                }
              ],
              "eventName": "In"
            },
            {
              "minute": "23'",
              "players": [
                {
                  "playerName": "Alan Dzagoev"
                }
              ],
              "eventName": "Out"
            },
            {
              "minute": "42'",
              "players": [
                {
                  "playerName": "Roman Zobnin"
                }
              ],
              "eventName": "Assist-Goal"
            },
            {
              "minute": "64'",
              "players": [
                {
                  "playerName": "Aleksandr Samedov"
                }
              ],
              "eventName": "Out"
            },
            {
              "minute": "64'",
              "players": [
                {
                  "playerName": "Daler Kuzyaev"
                }
              ],
              "eventName": "In"
            },
            {
              "minute": "69'",
              "players": [
                {
                  "playerName": "Fedor Smolov"
                }
              ],
              "eventName": "Out"
            },
            {
              "minute": "69'",
              "players": [
                {
                  "playerName": "Artem Dzyuba"
                }
              ],
              "eventName": "In"
            },
            {
              "minute": "71'",
              "players": [
                {
                  "playerName": "Aleksandr Golovin"
                }
              ],
              "eventName": "Assist-Goal"
            },
            {
              "minute": "87'",
              "players": [
                {
                  "playerName": "Aleksandr Golovin"
                }
              ],
              "eventName": "Yellow-Card"
            }
          ]
        },
        "team2": {
          "teamName": "Saudi Arabia",
          "events": [
            {
              "minute": "0'",
              "eventName": "Game-Start"
            },
            {
              "minute": "63'",
              "players": [
                {
                  "playerName": "Abdullah Otayf"
                }
              ],
              "eventName": "Out"
            },
            {
              "minute": "63'",
              "players": [
                {
                  "playerName": "Fahad Al Muwallad"
                }
              ],
              "eventName": "In"
            },
            {
              "minute": "68'",
              "eventName": "Game-Change"
            },
            {
              "minute": "73'",
              "players": [
                {
                  "playerName": "Yahya Al Shehri"
                }
              ],
              "eventName": "Out"
            },
            {
              "minute": "73'",
              "players": [
                {
                  "playerName": "Hattan Bahebri"
                }
              ],
              "eventName": "In"
            },
            {
              "minute": "84'",
              "players": [
                {
                  "playerName": "Mohammed Al Sahlawi"
                }
              ],
              "eventName": "Out"
            },
            {
              "minute": "84'",
              "players": [
                {
                  "playerName": "Mohannad Aseri"
                }
              ],
              "eventName": "In"
            },
            {
              "minute": "93'",
              "players": [
                {
                  "playerName": "Taiseer Al Jassam"
                }
              ],
              "eventName": "Yellow-Card"
            }
          ]
        }
      }
      ]
    )
})

app.get('/goals', (req, res) => {
  res.send(
    [{
      "team1": {
        "teamName": "Russia",
        "goals": [
          {
            "minute": "12'",
            "player": "Yuri Gazinskiy",
            "isFromCorner": true,
            "isHead": true
          },
          {
            "minute": "42'",
            "player": "Denis Cheryshev",
            "isLeftFoot": true
          },
          {
            "minute": "71'",
            "player": "Artem Dzyuba",
            "isHead": true
          },
          {
            "minute": "91'",
            "player": "Denis Cheryshev",
            "isLeftFoot": true
          },
          {
            "minute": "94'",
            "player": "Aleksandr Golovin",
            "isFreekick": true,
            "isRightFoot": true
          }
        ]
      },
      "team2": {
        "teamName": "Saudi Arabia",
        "goals": []
      }
    }
    ]
  )
})

app.listen(process.env.PORT || 8081)
