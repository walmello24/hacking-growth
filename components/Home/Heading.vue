<style scoped>
header {
	padding-top: 3rem;
	color: white;
	background: url('../../static/BACKGROUND-WEBP.jpg');
	background-size: 850px;
	background-position: 60%;
	background-color: var(--dark);
}

h2 {
	font-size: 1rem;
	font-weight: normal;
}

span {
	display: block;
	font-weight: normal;
	font-size: 1.5rem;
}

strong {
	color: var(--pink);
}

@media (min-width: 700px){
	h1 {
		font-size: 3rem;
		max-width: 30rem;
	}

	span {
		width: 60%;
		margin: 3rem auto;
	}

	header {
		background-size: 120%;
		background-position: 30%;
		text-align: left;
	}


	.row {
		justify-content: space-between;
	}

	span {
		text-align: left;
		margin: 3rem 0;
	}
}

@media (min-width: 1000px){

	header {
		background-position: 50%;
		padding-top: 10rem;
	}

	a {
		max-width: 20rem;
	}
}

</style>

<template>
	<header id="promessa">
		<div class="fade-left">
			<h1 class="">
				Otimize seu marketing digital 
				<span>e aumente a taxa de conversão do seu negócio</span>
			</h1>
			<div class="row">
				<div>
					<h2>Conheça nossas soluções <strong>de marketing</strong> <br> baseadas em <strong>inteligência, otimização e dados.</strong></h2>
				</div>
				<div>
					<a>Fale agora mesmo com um especialista</a>
				</div>
			</div>
		</div>
	</header>
</template>
