<template>
<div class="container">
    <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <div class="table">
            <tr>
                <th scope="row">Name</th>
                <td>Alan Alvarez</td>
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
                <th scope="row">Units Donated</th>
                <td>4</td>
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
        </div>
        <div class="col-md-4"></div>
    </div>
    <div class="row">
        <div class="appointments">
            <div class="table">
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Time</th>
                    <th scope="col">Hospital</th>
                <tbody>
                    <div v-for="app in appointments" v-bind:key="app.name" class="appointment-item">
                        <tr>
                            <th scope="row">2</th>
                            <td>{{ app.name }}</td>
                            <td>7:00 AM</td>
                            <td>{{ app.hospital }}</td>
                        </tr>
                    </div>
                </tbody>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        appointments: Array
    },
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
