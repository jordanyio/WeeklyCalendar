<template>
  <div id="app">
    <WeeklyCalendar />
  </div>
</template>

<script>
import WeeklyCalendar from './components/WeeklyCalendar.vue';

export default {
  components: {
    WeeklyCalendar
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
