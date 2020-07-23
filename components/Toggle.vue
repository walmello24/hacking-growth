<script>
	export default {
		data: () => ({
			open: false
		}),
		methods: {
			toggle(){
				this.open = !this.open;
			}
		}
	}
</script>

<template>
	<div>
		<div @click="toggle()">
			<slot name="title"></slot>
		</div>
		<div v-if="open">
			<slot name="content"></slot>
		</div>
	</div>
</template>