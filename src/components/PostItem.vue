<template>
<div class="container">
	 <div id="blog" class="row"> 
         <div class="col-md-1"></div>
            <div class="col-md-10 blogShort">
            <h1>{{post.name}}</h1>
                <em>{{post.bloodType}} <a href="http://bootsnipp.com/snippets/featured/sexy-sidebar-navigation" target="_blank">{{post.hospital}}</a></em>
                <br><div class="bold-text">{{post.status}}</div>
            <article><p>
                {{post.desc}}
                </p></article>
            <a class="btn btn-blog pull-right marginBottom10" @click="makeAppointment">MAKE APPOINTMENT</a> 
            <div class="bold-text" v-show="scheduled">Scheduled</div>
        </div>  
        <div class="col-md-1"></div> 
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            scheduled: false
        }
    },
    props: {
    post: Object
    },
    methods: {
    makeAppointment(){
        if(this.scheduled == false){
            this.scheduled = true;
            this.$emit('makeAppointment', this.post);
        }
    }
 }
}
</script>

<style>
#blog {
    padding:10px;
}
.blogShort{ border-bottom:1px solid #ddd;}
.add{background: #333; padding: 10%; height: 300px;}

.btn-blog {
    color: #ffffff;
    background-color: #37d980;
    border-color: #37d980;
    border-radius:0;
    margin-bottom:10px
}
.btn-blog:hover,
.btn-blog:focus,
.btn-blog:active,
.btn-blog.active,
.open .dropdown-toggle.btn-blog {
    color: white;
    background-color:#34ca78;
    border-color: #34ca78;
}
 h2{color:#34ca78;}
 .margin10{margin-bottom:10px; margin-right:10px;}

 .bold-text{
     font-weight:bold;
 }
</style>
