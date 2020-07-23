<script>
	export default {
		data: () => ({
			open: false
		}),
		methods: {
			toggle(){
				alert('ok')
			}
		}
	}
</script>

<template>
	<section id="faq">
		<div>
			<dl>
				<dt @click="toggle">O que é Taxa de Conversão?</dt>
				<dd>
					<p v-if="open">
						Diferente da Taxa de Cliques (CTR) de uma página, a taxa de conversão expressa, em porcentagem, os visitantes que executaram a ação desejada na página. Por exemplo: Uma página tem o objetivo de vender um produto e recebe mensalmente 100 visitas. Destas 100 visitas, 20 compraram o produto, logo, a Taxa de Conversão desta página é de 20%.
					</p>
				</dd>
				<dt>O que é CRO? </dt>
				<dd>
					<p>
						A sigla CRO vem do inglês (Conversion Rate Optimization) e significa Otimização da Taxa de Conversão. A CRO tem a função de aumentar a conversão de uma página na internet, de forma estratégica e sem gastar tanto, levando o usuário a executar uma ação dentro do site, que geralmente tem o objetivo de vender um produto, promover o contato, ou simplesmente gerar visitas em uma página. 
					</p>
					<p>
						Esta otimização também pode se aplicar a outras ações de marketing, como campanhas pagas, e-mail marketing, inbound marketing, etc.
					</p>
				</dd>
				<dt>Quais são as etapas da Otimização da Taxa de Conversão?</dt>
				<dd>
					A primeira etapa consiste em analisar os dados da página e da empresa. Em seguida são formuladas hipóteses, e depois realizados testes (como Testes A/B, por exemplo).
					Por último, os resultados dos testes são analisados e aplicados em várias ações, baseadas em <b>Growth Hacking</b>, para otimizar a taxa de conversão.
				</dd>
				<dt>O que é Teste A/B?</dt>
				<dd>
					Teste A/B nada mais é do que criar 2 opções distintas de uma mesma página para entender qual delas gera mais resultado. Podemos entender isso observando o número de cliques, a taxa de conversão e outros pontos.
					No entanto, <b>CRO (Conversion Rate Optimization)</b> não se resume a apenas isso. Embora seja uma parte importante da estratégia de CRO, 
					o <b>Teste A/B</b> é apenas uma das técnicas que compõe o trabalho a ser desenvolvido. 
				</dd>
				<dt>O que é Growth Hacking?</dt>
				<dd>
					Growth Hacking é uma vertente do Marketing Digital e está relacionado ao crescimento de uma empresa através da internet. As empresas de Growth Hacking fazem todo o trabalho de crescimento digital de uma empresa, e baseiam-se em testes e resultados reais, sem achismos, para montar todas as ações de marketing.
				</dd>
			</dl>
		</div>
	</section>
</template>