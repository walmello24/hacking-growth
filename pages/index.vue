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

.image {
  width: 100%;
  height: 30vh;
  background-color: var(--dark);
}

section.dark{
  background-color: #ddd;
}

</style>

<template>
  <div>
    <header class="container">
      <div class="container">
        <h1 class="main-text">TEXTO INTERÁTIVO SOBRE O BANNER</h1>
        <p class="secondary-text">
          AQUI  USAR  UM BANNER COM IMAGEM DE FUNDO
        </p>
      </div>
    </header>
    <section class="dark">
      <div class="container">
        <div class="image flex center">
          <p class="secondary-text" style="text-align: center; width: 100%">IMAGEM</p>
        </div>
        <h2 class="main-text text-center">TEXTO</h2>
      </div>
    </section>
    <section>
      <div class="container text-center">
        <h2 class="main-text">TITULO</h2>
        <p class="secondary-text">
          TEXTO LONGO
        </p>
        <p class="main-text" style="color: #ddd">NOSSOS CLIENTES</p>
        <p class="main-text" style="color: #ddd">NOSSOS CLIENTES</p>
        <p class="main-text" style="color: #ddd">NOSSOS CLIENTES</p>
        <p class="main-text" style="color: #ddd">NOSSOS CLIENTES</p>
        <button>CASES DE SUCESSO</button>
      </div>
    </section>
  </div>
</template>