<template>
    <div id="feed">
        This is the feed component
        <br>
        <ul>
            <li v-for="post in posts" :key="post">
                {{ post }}
            </li>
        </ul>
    </div>    
</template>


<script>
export default {
    data(){
        return {
            posts: [
                {
                    title: "post 1",
                    desc: "soe decription",
                    username: "poop22",
                    img: null,
                    likes: 0
                },
                {
                    title: "post 2",
                    desc: "heyyy boiiii",
                    username: "poop22",
                    img: null,
                    likes: 9999
                }
            ]
        }
    }
}
</script>

<style>

</style>
