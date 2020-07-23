export { default as Clientes } from '../../components/Clientes.vue'
export { default as Counters } from '../../components/Counters.vue'
export { default as Faq } from '../../components/Faq.vue'
export { default as Get } from '../../components/Get.vue'
export { default as Hero } from '../../components/Hero.vue'
export { default as Navbar } from '../../components/Navbar.vue'
export { default as Products } from '../../components/Products.vue'
export { default as Row } from '../../components/Row.vue'
export { default as Testimonial } from '../../components/Testimonial.vue'
export { default as Toggle } from '../../components/Toggle.vue'
export { default as Tripwire } from '../../components/Tripwire.vue'

export const LazyClientes = import('../../components/Clientes.vue' /* webpackChunkName: "components/Clientes'}" */).then(c => c.default || c)
export const LazyCounters = import('../../components/Counters.vue' /* webpackChunkName: "components/Counters'}" */).then(c => c.default || c)
export const LazyFaq = import('../../components/Faq.vue' /* webpackChunkName: "components/Faq'}" */).then(c => c.default || c)
export const LazyGet = import('../../components/Get.vue' /* webpackChunkName: "components/Get'}" */).then(c => c.default || c)
export const LazyHero = import('../../components/Hero.vue' /* webpackChunkName: "components/Hero'}" */).then(c => c.default || c)
export const LazyNavbar = import('../../components/Navbar.vue' /* webpackChunkName: "components/Navbar'}" */).then(c => c.default || c)
export const LazyProducts = import('../../components/Products.vue' /* webpackChunkName: "components/Products'}" */).then(c => c.default || c)
export const LazyRow = import('../../components/Row.vue' /* webpackChunkName: "components/Row'}" */).then(c => c.default || c)
export const LazyTestimonial = import('../../components/Testimonial.vue' /* webpackChunkName: "components/Testimonial'}" */).then(c => c.default || c)
export const LazyToggle = import('../../components/Toggle.vue' /* webpackChunkName: "components/Toggle'}" */).then(c => c.default || c)
export const LazyTripwire = import('../../components/Tripwire.vue' /* webpackChunkName: "components/Tripwire'}" */).then(c => c.default || c)
