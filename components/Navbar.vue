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
}

.no-display {
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
	position: fixed;
	right: 1rem;
}

div {
	height: 3rem;
	width: 3rem;
}

.menu-open {
	height: 100vh;
	width: 100vw;
	max-width: 20rem;
	background-color: #000d;
	color: white;
	position: fixed;
	right: 0;
}

.menu img {
	height: 100%;
	width: 100%;
}

</style>

<template>
	<nav>
		<div></div>
		<img src="hg.png">
		<Toggle>
			<template v-slot:title>
				<div class="menu">
					<img src="MENU.svg">
				</div>
			</template>
			<template v-slot:content>
				<div class="menu-open">
					<ul>
						<li>Home</li>
						<li>Home</li>
						<li>Home</li>
					</ul>
				</div>
			</template>
		</Toggle>
	</nav>
</template>