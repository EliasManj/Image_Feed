<template>
  <div id="app">
        <NewPost v-on:newPostEvent="createNewPost" />
        <div id="main">
          <Feed v-bind:posts="posts"/>
        </div>
  </div>
</template>

<script>
import Feed from './components/Feed.vue';
import NewPost from './components/NewPost.vue';

export default {
  name: 'app',
  data(){
    return {
      posts: [
      {
          name: 'Harold',
          surenames: 'Smith',
          status: 'yo waddup boiii',
          desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry printing and typesetting industry. Lorem Ipsum has been the industry printing and typesetting industry. Lorem Ipsum has been the industry',
          bloodType: 'O+',
          img: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg",
          hospital: 'Hospital 3333'
      },
      {
          name: 'Little Harold',
          surenames: 'The world',
          status: 'Severe ligma',
          desc: '',
          bloodType: 'O+',
          img: "https://pbs.twimg.com/profile_images/472457799977689088/pwdC20sR.jpeg",
          hospital: 'MD Andreson'
      }
    ]
    }
  },
  components: {
    Feed,
    NewPost
  },
  methods: {
    createNewPost(post){
      this.posts.push(post);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
