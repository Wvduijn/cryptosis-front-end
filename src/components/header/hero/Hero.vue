<template>
	<section class="hero is-primary is-large gradient--night" :class="isHome ? '' : ''">
		<div class="hero-body">
			<div class="container">
				<h1 class="title">
					Cryptosis
				</h1>
				<h2 class="subtitle">
					A condition where one has to constantly check Crypto value
				</h2>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	name: 'Hero',
	props: {
		isHome: {
			type: Boolean,
			required: true,
		},
	},
}
</script>
<style lang="scss"></style>
