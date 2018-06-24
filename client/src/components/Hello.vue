<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <match-summary></match-summary>
  </div>
</template>

<script>
import MatchSummary from './MatchSummary'
export default {
  name: 'WCViewer',
  data () {
    return {
      msg: 'World Cup Stats Viewer'
    }
  },
  components: {
    MatchSummary
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
