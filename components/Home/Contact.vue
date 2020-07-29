<style scoped>
h2, h3, p {
	text-align: center;
}

form {
	display: flex;
	flex-direction: column;
	font-size: 1.5rem;
	max-width: 30rem;
	margin: auto;
	text-align: left;
}

input, textarea {
	width: 100%;
	background-color: transparent;
	border: none;
	border-bottom: 3px solid pink;
}

input::placeholder, textarea::placeholder {
    color: var(--dark);
}

button {
  background-color: var(--pink);
  color: white;
  font-weight: bold;
  padding: 1rem;
  display: block;
  border-radius: 0.5rem;
  text-align: center;
  transition: 0.3s;
  border: none;
}

button:hover {
  background-color: var(--cyan);
  color: var(--dark);
  cursor: pointer;
}

</style>

<template>
	<section id="opt-in">
		<h2>COMECE HOJE A TRAÇAR O SUCESSO DE SEU NEGÓCIO</h2>
		<h3>AGUARDAMOS SEU CONTATO</h3>
		<p>Entre em contato conosco. Um de nossos consultores entrará em contato com você!</p>
		<form>
			<input placeholder="NOME">
			<input placeholder="EMAIL">
			<input placeholder="TELEFONE">
			<input placeholder="NOME DA EMPRESA">
			<textarea placeholder="MENSAGEM"></textarea>
			<button type="submit">ENVIAR</button>
		</form>
	</section>
</template>