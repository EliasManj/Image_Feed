<template>
<div class="container">
	 <div id="blog" class="row"> 
         <div class="col-md-1"></div>
            <div class="col-md-10 blogShort">
            <h1>{{post.name}}</h1>
            <img src="http://www.kaczmarek-photo.com/wp-content/uploads/2012/06/guinnes-150x150.jpg" alt="post img" class="pull-left img-responsive thumb margin10 img-thumbnail">
                <em>This snippet use <a href="http://bootsnipp.com/snippets/featured/sexy-sidebar-navigation" target="_blank">Sexy Sidebar Navigation</a></em>
            <article><p>
                {{post.desc}}
                </p></article>
            <a class="btn btn-blog pull-right marginBottom10">READ MORE</a> 
        </div>  
        <div class="col-md-1"></div> 
    </div>
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
</style>
