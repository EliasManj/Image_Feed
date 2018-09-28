<template>
  <div id="body">
    <navbar @goToNavLink="changeContext"/>
    <div id="app">
          <div id="new-post" v-show="newPostState">
            <NewPost v-on:newPostEvent="createNewPost" />
          </div>
          <div id="feed" v-show="feedState">
            <Feed @makeAppoinment="passAppointmentToProfile" v-bind:posts="posts"/>
          </div>
          <div id="profile" v-show="profileState">
            <Profile v-bind:appointments="userAppointments" />
          </div>
    </div>
  </div>
</template>

<script>
import Feed from './components/Feed.vue';
import NewPost from './components/NewPost.vue';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

export default {
  name: 'app',
  data(){
    return {
      showFeed: true,
      showAddNewPost: false,
      userAppointments: [],
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
          desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem',
          bloodType: 'O+',
          img: "https://pbs.twimg.com/profile_images/472457799977689088/pwdC20sR.jpeg",
          hospital: 'MD Andreson'
      }
    ]
    }
  },
  components: {
    Feed,
    Navbar,
    NewPost,
    Profile
  },
  computed: {
      feedState: function() {
        return this.showFeed == true && this.showAddNewPost == false;
      },
      newPostState: function(){
        return this.showFeed == false && this.showAddNewPost == true;
      },
      profileState: function(){
        return this.showFeed == false && this.showAddNewPost == false;
      }

  },
  methods: {
    createNewPost(post){
      this.posts.push(post);
    },
    changePage(){
      this.showFeed = !this.showFeed;
    },
    goToFeedMethod(){
      this.showFeed = true;
      this.showAddNewPost = false;
    },
    goToProfileMethod(){
      this.showFeed = false;
      this.showAddNewPost = false;
    },
    goToAddNewPostMethod(){
      this.showFeed = false;
      this.showAddNewPost = true;
    },
    changeContext(label){
      if(label==="Feed"){
        this.goToFeedMethod();
      } else if(label==="Profile"){
        this.goToProfileMethod();
      } else {
        this.goToAddNewPostMethod();
      }
    },
    passAppointmentToProfile(post){
      this.userAppointments.push(post);
      console.log(this.userAppointments);
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

#body {
  background-color: #eaeded;
  margin: 0px;
}

html {
  background-color: #eaeded;
  margin: 0px;
}
</style>
