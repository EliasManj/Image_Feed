<template>
	<form @submit.prevent="addTask">
    		<div class="input-group">
    			<input v-model="newTask" type="text" class="form-control">
    			<div class="input-group-btn">
    				<button type="submit" class="btn btn-warning">
    					Add
    				</button>
    			</div>
    		</div>
    	</form>
</template>

<script>
export default {
	props: {
		listTasks: {
			required: true
		}
	},
	methods: {
		addTask (task) {
			this.$emit('addTask', newTask)
		}
	}
}
</script>

<style>
	
</style>