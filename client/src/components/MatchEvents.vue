<template>
  <div class="match-event-envelope">
    <h3>{{placeholder}}</h3>
    <div class="events">
        <div v-for="event in timelineData" v-bind:key="event.id" class="event-item">
            <div class="back-cell">
                <div class="event-dot">
                </div>
            </div>
            <!-- <div>{{event}}</div> -->
            <div>
              <span v-if="event.eventName != undefined">{{event.eventName}} - {{event.minute}}</span>
              <span v-if="event.eventName != 'Game-Start'">{{event.teamName}}</span>
              <span v-if="event.eventName == 'Sustitution'">Player in: {{event.playerIn}} - Player out: {{event.playerOut}}</span>
              <span v-else-if="event.eventName == 'Assist-Goal'">Player: {{event.players[0].playerName}}</span>
              <span v-else-if="event.eventName == undefined">Goal! Scored by {{event.player}}</span>
            </div>
        </div>
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
}
.events{
    margin-bottom: 1em;
}
.event-item{
    display: flex;
    flex-direction: row;
}
.event-dot{
    height: 1em;
    width: 1em;
    background-color: #2da719;
    border-radius: 50%;
    display: inline-block;
    margin: 0.5em 1em 0.5em 1em;
}
.back-cell{
    background: linear-gradient(to right,transparent 0%, transparent calc(50% - 0.05em), green calc(50% - 0.05em), green calc(50% + 0.05em), transparent calc(50% + 0.05em), transparent 100%);
}
</style>
