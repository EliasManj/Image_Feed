<template>
    <div id="feed">
        <br>
        <ul class="list-group">
            <PostItem @makeAppointment="onMakeAppointment" v-for="post in posts" v-bind:key="post.title" v-bind:post="post">
                
            </PostItem>
        </ul>
    </div>    
</template>


<script>
import PostItem from './PostItem'

export default {
    props: {
        posts: Array
    },
    components: {
        PostItem
    },
    data(){
        return {
            
        }
    },
    methods: {
        onMakeAppointment(post){
            this.$emit('makeAppoinment', post);
        }
    }
}
</script>

<style>

</style>
