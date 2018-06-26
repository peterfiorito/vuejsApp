function getTeam (team) {
  return team.events.map((x) => {
    return {
      eventName: x.eventName,
      minute: x.minute,
      players: x.players,
      teamName: team.teamName
    }
  })
}
function getTeamScore (team) {
  team.goals.forEach((x) => {
    x.teamName = team.teamName
  })
  return team.goals
}

function teamEvent (obj) {
  const team1 = getTeam(obj.team1)
  const team2 = getTeam(obj.team2)
  let items = [...team1, ...team2]
  return items
}

function goalEvent (obj) {
  var team1 = getTeamScore(obj.team1)
  var team2 = getTeamScore(obj.team2)
  let items = [...team1, ...team2]
  return items
}

function parser (obj, obj2) {
  let teamEvents = teamEvent(obj)
  let goalEvents = goalEvent(obj2)
  var item = []
  var item2 = []
  Object.keys(teamEvents).forEach(function (k, i) {
    item[i] = (teamEvents[k])
  })
  Object.keys(goalEvents).forEach(function (k, i) {
    item2[i] = (goalEvents[k])
  })
  var mer1 = [].concat.apply([], item)
  var mer2 = [].concat.apply([], item2)
  var merged = mer1.concat(mer2)
  merged.shift()
  return merged
}

function bubble (obj) {
  return obj.sort(function compare (a, b) {
    if (a.minute < b.minute) {
      return -1
    } else if (a.minute > b.minute) {
      return 1
    } else {
      return 0
    }
  })
}

function dupChecker (obj) {
  for (let i = 0; i + 1 < obj.length; i++) {
    const a = obj[i]
    const b = obj[i + 1]
    const dif = (a && b) ? parseFloat(a.minute) - parseFloat(b.minute) : 1
    const eventTracker = (a.eventName && b.eventName)

    if (dif === 0 && eventTracker) {
      const playerNameA = a.players[0].playerName
      const playerNameB = b.players[0].playerName

      const playerIn = a.eventName === 'In' ? playerNameA : playerNameB
      const playerOut = b.eventName === 'Out' ? playerNameB : playerNameA
      const tryThis =
      {
        minute: a.minute,
        players: [{ playerName: playerNameA }, { playerName: playerNameB }],
        playerIn,
        playerOut,
        eventName: 'Sustitution',
        teamName: a.teamName
      }

      obj.splice(obj.indexOf(a), 1, tryThis)
      obj.splice(obj.indexOf(b), 1)
    }
  }

  return obj
}

async function totalData (events, goals, parser, bubble, dupChecker) {
  let parseObj = parser(events, goals)
  let sortedObj = bubble(parseObj)
  let filterobj = dupChecker(sortedObj)
  console.log(filterobj)
  return filterobj
}

export const eventgoals = {
  methods: {
    parser: parser,
    bubble: bubble,
    dupChecker: dupChecker,
    totalData: totalData
  }
}
