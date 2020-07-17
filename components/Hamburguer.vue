<style scoped>
.close {
	width: 5rem;
	height: 5rem;
	text-align: center;
	vertical-align: middle;
}

a {
	font-size: 4rem;
	transform: scaleX(10);
}

</style>

<template>
	<div>
		<div v-if="active">
			<a>x</a>
			<div class="menu" style="font-weight: bold ;text-align: left;line-height: 1rem; align-self: stretch; padding: 0 1.2rem; ">
				<a>x</a>
			</div>
		</div>
		<div v-if="!active">
			<div class="menu" style="font-weight: bold ;text-align: left;line-height: 1rem; align-self: stretch; padding: 0 1.2rem; ">
				<span>_&nbsp;</span><br>
				<span>__</span><br>
				<span>&nbsp;&nbsp;_</span><br>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		props: ['active']
	}
</script>