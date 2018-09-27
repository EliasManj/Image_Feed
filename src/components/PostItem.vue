<template>
    <div class="card" id="post-item">
        {{post.name}}
        <br>
        {{post.surenames}}
        <br>
        {{post.status}}
        <br>
        {{post.desc}}
    </div>
</template>

<script>
export default {
 props: {
    post: Object
 }
}
</script>

<style>
#post-item { 
    background-color: #e9eef1;
    margin: 0px;
    padding: 0px;
}


</style>
