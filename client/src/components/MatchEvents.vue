<template>
  <div class="match-event-envelope">
    <h3>{{placeholder}}</h3>
  </div>
</template>
<script>
export default {
  name: 'MatchEvents',
  data () {
    return {
      placeholder: 'Match Events'
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
</style>
