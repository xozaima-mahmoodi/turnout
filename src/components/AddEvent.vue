<template>
<div class="">
  <h4>Add an Event <input type="checkbox" v-model="showForm"> </h4>
  <div class="form" v-if="showForm">
    <div class="form-group">
      <label>Title</label>
      <input type="text" class="form-control" v-model="event.title">
    </div>
    <div class="form-group">
      <label>description</label>
      <input type="text" class="form-control" v-model="event.description">
    </div>
    <div class="form-group">
      <label>Date</label>
      <input type="date" class="form-control" v-model="event.Date">
    </div>
    <div class="form-group">
      <label>location</label>
      <input type="text" class="form-control" v-model="event.location">
    </div>
    <button class="btn-sm btn-primary" @click="addEvent">Submit</button>
  </div>
</div>
</template>

<script>

import { eventsRef } from  '../firebaseApp'


export default {
  data() {
    return {
      event: {
        title: '',
        description:'',
        date: '',
        location: '',
        email: ''
      },
      showForm: false
    }
  },

  methods: {
    addEvent() {
      console.log(this.event)
      this.event.email = this.$store.state.user.email;
      eventsRef.push(this.event)
    }
  }
}
</script>