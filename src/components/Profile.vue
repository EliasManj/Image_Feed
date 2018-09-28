<template>
<div class="container">
    <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <div class="table">
            <tr>
                <th scope="row">Name</th>
                <td>Scoopity Doo</td>
            </tr>
            <tr>
                <th scope="row">Date of Birth</th>
                <td>06/2/1995</td>
            </tr>
            <tr>
                <th scope="row">Gender</th>
                <td>Male</td>
            </tr>
            <tr>
                <th scope="row">Home Address</th>
                <td>Main ave. #3424 Irvine Cal.</td>
            </tr>
            <tr>
                <th scope="row">Email</th>
                <td>Scoopity@scoopity.com</td>
            </tr>   
            <tr>
                <th scope="row">Phone Number</th>
                <td>33-234-234324</td>
            </tr>
            </div>
            <div class="btn btn-blog">Make appointment</div>
        </div>
        <div class="col-md-4"></div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            profile: {
                name: "",
                bloodType: "",
                units: 3,
                lastDonation: ""
            }
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
