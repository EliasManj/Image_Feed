<template>
    <div id="feed">
        This is the feed component
        <br>
        <ul class="list-group">
            <PostItem v-for="post in posts" v-bind:key="post.title" v-bind:post="post">
                
            </PostItem>
        </ul>
    </div>    
</template>


<script>
import PostItem from './PostItem'

export default {
    components: {
        PostItem
    },
    data(){
        return {
            posts: [
                {
                    name: 'Harold',
                    surenames: 'Smith',
                    status: 'yo waddup boiii',
                    desc: 'harold le gusta las caminatas en la playa y bailer',
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
    }
}
</script>

<style>

</style>
