<style>
nav {
  background-color: #ddd;
  width: 100%;
  height: 5rem;
  font-size: 2.5rem;
  color: var(--pink);
  font-weight: 200;
}

header {
  height: 80vh;
  display: flex;
  align-items: center;
}

header h1 {
  font-size: 2.5rem;
}

header p {
  font-size: 1.5rem;
}

</style>

<template>
  <div>
  	<nav class="flex center">
  		<div>
  			<i class="fa fa-bars" aria-hidden="true"></i>
  		</div>
      <div>
        <img class="logo" src="hg.png">        
      </div>
      <div></div>
    </nav>
    <header class="container">
      <div class="container">
        <h1 class="text dark boldest">TEXTO INTERÁTIVO SOBRE O BANNER</h1>
        <p class="text pink">
          AQUI  USAR  UM BANNER COM IMAGEM DE FUNDO
        </p>
      </div>
    </header>
  </div>
</template>