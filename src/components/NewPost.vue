<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <div class="btn btn-blog" @click="showForm">Add new person</div>
                <div>
                    <form id="NewPost" action="" v-show="isNinja">
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
                        <div class="form-control btn btn-blog" @click="submitNewPost">Submit</div>
                    </form>
                </div>
            </div>
            <div class="col-md-4"></div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return {
            isNinja: false,
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
                hospital: "",
                id: 0
            }
        }
    },
    methods: {
        showForm(){
            this.isNinja = !this.isNinja;
        },
        submitNewPost(){
            this.newPostInput.id = this.newPostInput.id + 1;
            this.$emit('newPostEvent', this.newPostInput);
        }
    }
}
</script>


<style>
.btn-blog:hover,
.btn-blog:focus,
.btn-blog:active,
.btn-blog.active,
.open .dropdown-toggle.btn-blog {
    color: white;
    background-color:#34ca78;
    border-color: #34ca78;
}
</style>
