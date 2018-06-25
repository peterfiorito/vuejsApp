<template>
  <div class="match-event-envelope">
    <h3>{{placeholder}}</h3>
    <div class="events">
        <div v-for="event in events" v-bind:key="event.id" class="event-item">
            <div class="back-cell">
                <div class="event-dot">
                </div>
            </div>
            <span>{{event.minute+ ' ' + event.eventName}}</span>
        </div>
    </div>
  </div>
</template>
<script>
import MatchEventService from '@/services/MatchEventService'
export default {
  name: 'MatchEvents',
  data () {
    return {
      placeholder: 'Match Events',
      events: []
    }
  },
  mounted () {
    this.getEventData()
  },
  methods: {
    async getEventData () {
      const eventData = await MatchEventService.fetchEvents()
      var obj = eventData.data[0]
      this.parser(obj)
    },
    async parser (obj) {
      var item = []
      Object.keys(obj).forEach(function (k, i) {
        item[i] = (obj[k].events)
      })
      var merged = [].concat.apply([], item)
      merged.shift()
      merged.sort((a, b) => parseFloat(a.minute) - parseFloat(b.minute))
      this.events = merged
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
