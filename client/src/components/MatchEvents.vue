<template>
  <div class="match-event-envelope">
    <h3>{{placeholder}}</h3>
    <div class="events">
        <div v-for="event in timelineData" v-bind:key="event.id" class="event-item">
            <span class="minute">{{event.minute}}</span>
            <div class="back-cell">
                <div class="event-dot">
                </div>
            </div>
            <!-- <div>{{event}}</div> -->
            <div class="event-data">
              <span v-if="event.eventName != undefined" class="event-name"><b>{{event.eventName}}</b></span>
              <span v-if="event.eventName != 'Game-Start'">{{event.teamName}}</span>
              <div v-if="event.eventName == 'Sustitution'">Player in: {{event.playerIn}} - Player out: {{event.playerOut}}</div>
              <div v-else-if="event.eventName == 'Assist-Goal'">Player: {{event.players[0].playerName}}</div>
              <span v-else-if="event.eventName == undefined">
                <img class="ball" src="../assets/football.png">
                <b>Goal!</b> 
                <div>Scored by {{event.player}}</div>
              </span>
            </div>
        </div>
        <div class="end">End of match!</div>
    </div>
  </div>
</template>
<script>
import MatchEventService from '@/services/MatchEventService'
import MatchGoalsService from '@/services/MatchGoalsService'
import { eventgoals } from '@/mixin/EventService'
export default {
  name: 'MatchEvents',
  mixins: [eventgoals],
  data () {
    return {
      placeholder: 'Match Events',
      events: [],
      goals: [],
      timelineData: []
    }
  },
  mounted () {
    this.getEventData()
  },
  methods: {
    async getEventData () {
      const eventData = MatchEventService.fetchEvents()
      const goalData = MatchGoalsService.fetchGoals()
      const res = await Promise.all([eventData, goalData])
      const events = res[0].data[0]
      const goals = res[1].data[0]
      const mergedData = await this.totalData(events, goals, this.parser, this.bubble, this.dupChecker)
      this.timelineData = mergedData
    }
  }
}
</script>
<style scoped>
.match-event-envelope{
    margin-top: 1em;
    border: 1px solid gray;
    border-radius: 10px;
    max-width: 50em;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
}
.events{
    margin-bottom: 1em;
    margin-left: 1em;
}
.event-item{
    display: flex;
    flex-direction: row;
}
.event-item:first-child{
  margin-left: 0.55em;
}
.event-dot{
    height: 1em;
    width: 1em;
    background-color: #2da719;
    border-radius: 50%;
    display: inline-block;
}
.minute{
  font-weight: bold;
}
.event-data{
  padding: 0 0 1em 1em;
  text-align: left;
}
.ball{
  width: 1em;
  height: auto;
}
.back-cell{
  background: linear-gradient(to right,transparent 0%, transparent calc(50% - 0.05em), green calc(50% - 0.05em), green calc(50% + 0.05em), transparent calc(50% + 0.05em), transparent 100%);
  padding-bottom: 1em;
}
.end{
  text-align: left;
  font-weight: bold;
}
</style>
