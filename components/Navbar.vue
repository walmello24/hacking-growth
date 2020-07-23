<style scoped>
	nav {
		height: 4rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		width: 100%;
		background-color: var(--darkt);
	}

	ul {
		list-style: none;
		display: none;
	}

	li {
		display: inline-block;
	}

	img {
		height: 100%;
	}

	.menu {
		height: 3rem;
		width: 3rem;
	}

	div {
		height: 100%;
		width: 3rem;
	}
</style>

<template>
	<nav>
		<div></div>
		<img src="hg.png">
		<ul>
			<li>Home</li>
			<li>Home</li>
			<li>Home</li>
		</ul>
		<img class="menu" src="MENU.svg">
	</nav>
</template>