<style scoped>

@media (max-width: 500px){
	ul {
		list-style: none;
		display: flex;
		justify-content: space-around;
		background-color: var(--dark);
		width: 100%;
		padding: 0;
		margin: 0;
		position: fixed;
		bottom: 0;
		border-top: 3px solid var(--pink);
		color: white;	
		font-size: 2rem;
		text-align: center;
	}

	li {
		padding: 0.5rem 0;
		width: 30%;
	}

	.desktop {
		display: none;
	}

}

@media (min-width: 500px){
	.mobile {
		display: none;
	}

	ul {
		display: flex;
		justify-content: center;
		list-style: none;
		position: fixed;
		left: 0;
		flex-direction: column;
		background-color: var(--dark);
		border-right: 3px solid var(--pink);
		height: 100vh;
		padding: 0;
		margin: 0;
		color: white;
		font-weight: bold;
	}

	li {
		transform: rotate(-90deg);
		padding: 8vh 0;
	}
}

</style>

<template>
	<aside>
		<ul class="mobile">
			<li><i class="fa fa-facebook" aria-hidden="true"></i></li>
			<li><i class="fa fa-instagram" aria-hidden="true"></i></li>
			<li><i class="fa fa-linkedin" aria-hidden="true"></i></li>
		</ul>
		<ul class="desktop">
			<li>Facebook</li>
			<li>Instagram</li>
			<li>Linkedin</li>
		</ul>
	</aside>
</template>