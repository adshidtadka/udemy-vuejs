<template>
  <div>
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>
    <LikeNumber :totalNumber="number" @my-click="incrementNumber"></LikeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component v-bind:is="currentComponent"></component>
    </keep-alive>
    <div style="padding: 10rem;">
      <h2>イベントのフォーム</h2>
      <EventTitle :value="eventData.title" @input="eventData.title = $event"></EventTitle>
      <label for="maxNumber">最大人数</label>
      <input id="maxNumber" type="number" v-model.number="eventData.maxNumber">
      <p>{{ typeof eventData.maxNumber }}</p>
      <label for="host">主催者</label>
      <input id="host" type="text" v-model.trim="eventData.host">
      <pre>{{ eventData.host }}</pre>
      <label for="detail">detail</label>
      <textarea name="" id="detail" rows="10" cols="30" v-model="eventData.detail"></textarea>
      <p style='white-space: pre;'>{{ eventData.detail }}</p>
      <input type="checkbox" name="" id="isPrivate" value="" v-model="eventData.isPrivate">
      <label for="isPrivate">非公開</label>
      <p>{{ eventData.isPrivate }}</p>
      <p>参加条件</p>
      <input type="checkbox" name="" id="10" value="10代" v-model="eventData.target">
      <label for="10">10代</label>
      <input type="checkbox" name="" id="20" value="20代" v-model="eventData.target">
      <label for="20">20代</label>
      <input type="checkbox" name="" id="30" value="30代" v-model="eventData.target">
      <label for="30">30代</label>
      <p>{{ eventData.target }}</p>
      <p>参加費</p>
      <input type="radio" name="" id="free" value="無料" v-model="eventData.price">
      <label for="free">無料</label>
      <input type="radio" name="" id="paid" value="有料" v-model="eventData.price">
      <label for="paid">有料</label>
      <p>開催地</p>
      <select name="location" id="location" v-model="eventData.location" multiple>
        <option v-for="location in locations" :key="location">{{ location }}</option>
      </select>
      <p>{{ eventData.location }}</p>



    </div>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import EventTitle from './components/EventTitle.vue';

export default {
  data() {
    return {
      number: 14,
      currentComponent: "Home",
      locations: ["東京", "大阪", "名古屋"],
      eventData: {
        title: "",
        maxNumber: 0,
        host: "",
        detail: "",
        isPrivate: false,
        target: [],
        price: "無料",
        location: [],
      }
    }
  },
  components: {
    LikeHeader,
    Home,
    About,
    EventTitle,
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    },
  },
}
</script>

