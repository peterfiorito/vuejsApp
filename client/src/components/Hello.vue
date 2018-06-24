<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <match-summary></match-summary>
    <match-events></match-events>
  </div>
</template>

<script>
import MatchSummary from './MatchSummary'
import MatchEvents from './MatchEvents'
export default {
  name: 'WCViewer',
  data () {
    return {
      msg: 'World Cup Stats Viewer'
    }
  },
  components: {
    MatchSummary,
    MatchEvents
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
