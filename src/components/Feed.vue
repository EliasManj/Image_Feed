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
                    title: 'post',
                    desc: 'some desc',
                    username: 'someone55',
                    img: null,
                    likes: 3
                },
                {
                    title: 'post2',
                    desc: 'some descsda',
                    username: 'someone55',
                    img: null,
                    likes: 3
                }
            ]
        }
    }
}
</script>

<style>

</style>
