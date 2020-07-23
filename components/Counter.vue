<script>
	export default {
		props: ['total'],
		data(){
			return {
				real: 0,
			}
		},
		mounted(){
			setInterval(() => {
				if(this.real < this.total){
					this.real++
				}
			},30)
		}
	}
</script>

<template>
	<p>{{ real }}</p>
</template>