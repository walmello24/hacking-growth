export { default as About } from '../../components/About.vue'
export { default as Aside } from '../../components/Aside.vue'
export { default as Hamburguer } from '../../components/Hamburguer.vue'
export { default as Hero } from '../../components/Hero.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as Menu } from '../../components/Menu.vue'
export { default as Navbar } from '../../components/Navbar.vue'

export const LazyAbout = import('../../components/About.vue' /* webpackChunkName: "components/About'}" */).then(c => c.default || c)
export const LazyAside = import('../../components/Aside.vue' /* webpackChunkName: "components/Aside'}" */).then(c => c.default || c)
export const LazyHamburguer = import('../../components/Hamburguer.vue' /* webpackChunkName: "components/Hamburguer'}" */).then(c => c.default || c)
export const LazyHero = import('../../components/Hero.vue' /* webpackChunkName: "components/Hero'}" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo'}" */).then(c => c.default || c)
export const LazyMenu = import('../../components/Menu.vue' /* webpackChunkName: "components/Menu'}" */).then(c => c.default || c)
export const LazyNavbar = import('../../components/Navbar.vue' /* webpackChunkName: "components/Navbar'}" */).then(c => c.default || c)
