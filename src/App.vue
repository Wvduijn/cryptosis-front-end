<template>
	<div id="app">
		<app-header />
		<router-view />
	</div>
</template>
<script>
import Header from '@/components/header/Header.vue'

export default {
	components: {
		'app-header': Header,
	},
	created() {
		this.$store.dispatch('getCoins')
	},
}
</script>

<style lang="scss"></style>
