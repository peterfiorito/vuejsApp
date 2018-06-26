<template>
  <div class="envelope">
    <h1>Match Stats</h1>
    <div class="match">
        <div v-for="match in matches" v-bind:key="match.id" class="match-item">
            <div v-if="match.teamName == 'Russia'" class="match-flag" v-on:click="getStats(match.teamName)">
                <img src="../assets/russia.png">
            </div>
            <div v-else-if="match.teamName == 'Saudi Arabia'" class="match-flag" v-on:click="getStats(match.teamName)">
                <img src="../assets/saudi-arabia.png">
            </div>
            <span class="team-name" v-on:click="getStats(match.teamName)">{{ match.teamName }}</span>
            <span class="score">{{match.goals.length}}</span>
            <div v-for="goal in match.goals" v-bind:key='goal.id' class="goal-list">
                <span>{{goal.minute + ' ' + goal.player}}</span>
            </div>
        </div>
    </div>
    <div v-show="teamStats" class="stats-envelope">
            <div class="close"><span class="close-cross" v-on:click="teamStats = false">X</span></div>
            <h2>Match stats</h2>
            <div v-for="(value, key) in stats" v-bind:key="value.id" class="stats">
                <span>{{ key }}: {{ value }}</span>
            </div>
    </div>
  </div>
</template>
<script>
import MatchSummaryService from '@/services/MatchSummaryService'
import MatchStatsService from '@/services/MatchStatsService'
export default {
  name: 'MatchSummary',
  data () {
    return {
      matches: [],
      stats: [],
      teamStats: false
    }
  },
  mounted () {
    this.getMatchData()
  },
  methods: {
    async getMatchData () {
      const matchData = await MatchSummaryService.fetchSummary()
      this.matches = matchData.data[0]
    },
    async getStats (team) {
      const matchStats = await MatchStatsService.fetchStats()
      let dataStats = matchStats.data[0]
      dataStats.team1.teamName === team ? this.stats = matchStats.data[0].team1.teamStats : this.stats = matchStats.data[0].team2.teamStats
      this.teamStats = !this.teamStats
    }
  }
}
</script>
<style scoped>
.envelope{
    border: 1px solid #e8e8e8;
    border-radius: 20px;
    background: radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 61%, rgba(237,237,237,1) 100%);
}
.match{
    display: inline-flex;
}
.match-flag{
    display: inline-flex;
    cursor: pointer;
}
.match-flag img{
    height: 1.5em;
    border: 1px solid #6d6d6d;
}
.match-item{
    margin: 0.5em;
}
.team-name{
    font-size: 1.5em;
}
.team-name:hover{
    cursor: pointer;
}
.score{
    background-color: white;
    font-size: 1.5em;
    border: 1px #cccaca solid;
    padding: 0 0.5em;
    border-radius: 10px;
}
.goal-list{
    padding-top: 0.5em;
}
.stats-envelope{
    width: 98%;
    margin: 0.5em auto;
    background-color: white;
    border-radius: 10px;
}
.close{
    margin: 1em;
    display: flex;
    flex-direction: row;
}
.close-cross{
    margin-left: auto;
    margin-top: 1em;
    cursor: pointer;
    font-weight: bold;
}
.stats{
    padding: 0.5em;
}
</style>
