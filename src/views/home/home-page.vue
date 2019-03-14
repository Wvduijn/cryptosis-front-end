<template>
	<div class="home">
		<hero :is-home="true"></hero>
		<!--  -->
		<!-- DISPLAY:
            RANK
            NAME 
            SYMBOL
            MARKET CAP
            PRICE
            Circulating supply
            %1h
            %24h

        expand to show SPARK CHART
        -->
		<marketdata></marketdata>
		<section>
			<b-table :data="data" :columns="columns" :selected.sync="selected"> </b-table>
			<pre>{{ selected }}</pre>
		</section>
	</div>
</template>

<script>
import Hero from '@/components/header/hero/Hero'
import MarketData from '@/components/market-data/MarketData'
const data = [
	{
		rank: 1,
		name: 'Bitcoin',
		market_cap: 689169999942,
		price: '3919',
		supply: 17585500,
		change1h: '0,52',
		change24h: '0,52',
	},
	{
		rank: 2,
		name: 'Bitcoin',
		market_cap: 689169999942,
		price: '3919',
		supply: 17585500,
		change1h: '0,52',
		change24h: '0,52',
	},
	{
		rank: 3,
		name: 'Bitcoin',
		market_cap: 689169999942,
		price: '3919',
		supply: 17585500,
		change1h: '0,52',
		change24h: '0,52',
	},
]
export default {
	name: 'HomePage',
	components: {
		hero: Hero,
		marketdata: MarketData,
	},
	data() {
		return {
			data,
			defaultOpenedDetails: [1],
			selected: data[1],
			columns: [
				{
					field: 'rank',
					label: '#',
					width: '40',
					numeric: true,
				},
				{
					field: 'name',
					label: 'Name',
				},
				{
					field: 'market_cap',
					label: 'Market Cap',
					numeric: true,
				},
				{
					field: 'price',
					label: 'Price',
					centered: true,
				},
				{
					field: 'supply',
					label: 'Supply',
					centered: true,
				},
				{
					field: 'change1h',
					label: 'Change (1h)',
				},

				{
					field: 'change24h',
					label: 'Change (24h)',
				},
			],
		}
	},
	methods: {
		toggle(row) {
			// this.$refs.table.toggleDetails(row)
		},
	},
}
</script>

<style lang="scss" scoped></style>
