<template>
	<div class="card">
		<div class="card-image" :class="{ 'card-image-iframe': isOpenedInIFrame }">
			<figure class="image is-4by3">
				<img :src="`/static/${cryptoCurrency.id}_logo.png`" />
			</figure>
		</div>
		<div class="card-content">
			<p class="title is-5" :class="{ 'title-iframe': isOpenedInIFrame }">{{ cryptoCurrency.name }}</p>
			<p class="title price-title is-5" :class="{ 'price-title-iframe': isOpenedInIFrame }">
				${{ getPriceEUR(cryptoCurrency) }}
				<span
					:class="{
						'positive-percent-change': cryptoCurrency.positivePercentChange,
						'negative-percent-change': !cryptoCurrency.positivePercentChange,
					}"
				>
					{{ getPercentChange(cryptoCurrency) }}%
					<b-icon pack="fas" icon="arrow-up" size="is-small"> </b-icon>
					<b-icon pack="fas" icon="arrow-down" size="is-small"> </b-icon>
					<icon class="arrow-up" name="arrow-up" height="9" width="9"></icon>
					<icon class="arrow-down" name="arrow-down" height="9" width="9"></icon>
				</span>
			</p>
		</div>
	</div>
</template>
<script>
export default {
	name: 'CoinCard',
}
</script>
