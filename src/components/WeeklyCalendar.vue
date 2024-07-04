<template>
    <div class="weekly-calendar">
      <div v-for="day in weekDays" :key="day" class="day-column">
        <h3>{{ day }}</h3>
        <div v-for="event in getEvents(day)" :key="event.id" class="event">
          <p>{{ event.title }}</p>
          <p>{{ event.startTime }} - {{ event.endTime }}</p>
          <button @click="editEvent(event)">Edit</button>
          <button @click="deleteEvent(event.id)">Delete</button>
        </div>
        <button @click="addEvent(day)">Add Event</button>
      </div>
    </div>
  </template>
  
<script>
    import { db } from '../firebaseConfig';

// Your component code
    export default {
        data() {
            return {
            weekDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            events: []
            };
        },
        created() {
            this.fetchEvents();
        },
        methods: {
            fetchEvents() {
            db.collection('events').get().then(querySnapshot => {
                this.events = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            });
            },
            getEvents(day) {
                return this.events.filter(event => event.day === day);
            },
            addEvent(day) {
            const title = prompt('Event Title:');
            const startTime = prompt('Start Time: (e.g., 09:00)');
            const endTime = prompt('End Time: (e.g., 10:00)');
            db.collection('events').add({ title, startTime, endTime, day })
                .then(() => this.fetchEvents());
            },
            editEvent(event) {
            const title = prompt('Edit Event Title:', event.title);
            const startTime = prompt('Edit Start Time:', event.startTime);
            const endTime = prompt('Edit End Time:', event.endTime);
            db.collection('events').doc(event.id).update({ title, startTime, endTime })
                .then(() => this.fetchEvents());
            },
            deleteEvent(eventId) {
            db.collection('events').doc(eventId).delete()
                .then(() => this.fetchEvents());
            }
        }
    };  
</script>

<style>
    .weekly-calendar {
        display: flex;
    }
    .day-column {
        flex: 1;
        margin: 10px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    .event {
        background: #f9f9f9;
        margin: 5px 0;
        padding: 5px;
        border: 1px solid #ddd;
        border-radius: 3px;
    }
</style>
  