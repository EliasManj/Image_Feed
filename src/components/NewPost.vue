<template>
    <div>
        <div class="btn btn-primary" @click="openNav">open</div>
        <div class="sidenav" v-bind:style="{display: computedDisplay}">
            <span>Add new person</span>
            <form id="NewPost" action="">
                <span>Name</span>
                <input v-model="newPostInput.name" class="form-control" type="text">
                <span>Surename</span>
                <input v-model="newPostInput.surename" class="form-control" type="text">
                <span>Status</span>
                <textarea v-model="newPostInput.status" class="form-control" type="text"></textarea>
                <span>Desc</span>
                <textarea v-model="newPostInput.desc" class="form-control" type="text"></textarea>
                <span>Blood type</span>
                <select v-model="newPostInput.bloodType" class="form-control" name="Blood Type" id="">
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                </select>
                <span>Hospital</span>
                <input v-model="newPostInput.hospital" class="form-control" type="text">
                <br>
                <div class="form-control btn btn-primary" @click="submitNewPost">Submit</div>
            </form>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return {
            display: 'block',
            width: '0',
            marginLeft: '0',
            space: '250px',
            isClosed: true,
            newPostInput: {
                name: "",
                surenames: "",
                status: "",
                bloodType: "A+",
                img: "",
                hospital: ""
            }
        }
    },
    methods: {
        submitNewPost(){
            this.openNav();
            this.$emit('newPostEvent', this.newPostInput);
        },
        openNav(){
            if(this.isClosed){
                this.display = 'block';
                this.isClosed = false;
                this.width = this.space;
                this.marginLeft = this.space;
            } else {
                this.display = 'none';
                this.isClosed = true;
                this.width = "0";
                this.marginLeft = "0";
            }
        }
    },
    computed: {
        computedDisplay: function(){
            return this.display;
        },
        computedWidth: function(){
            return this.width;
        },
        computedMargin: function(){
            return this.marginLeft;
        },
        computedStyle: function(){
            console.log(`'{width:"${this.computedWidth}";marginLeft:"${this.computedMargin}"}'`);
            return `{width:"${this.computedWidth}";marginLeft:"${this.computedMargin}"}`;    
        }
    }
}
</script>


<style>
#NewPost {
    margin: 25px;
}
.sidenav {
    display: none;
    height: 100%;
    width: 250px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    padding-top: 0px;
}

.sidenav span {
    padding: 8px 8px 8px 8px;
    text-decoration: none;
    font-size: 15px;
    color: #818181;
    display: block;
}

.sidenav a:hover {
    color: #f1f1f1;
}

.sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}

</style>
