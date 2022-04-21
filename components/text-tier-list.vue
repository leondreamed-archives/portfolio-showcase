<script setup lang="ts">
const tiers = [
	{
		letter: {
			symbol: 'S',
			class: 'bg-red-400',
		},
		texts: ['frankenstein', 'things-fall-apart'],
	},
	{
		letter: {
			symbol: 'A',
			class: 'bg-orange-400',
		},
		texts: ['odyssey', 'a-doll-house', 'othello', 'persepolis'],
	},
	{
		letter: {
			symbol: 'high-B',
			class: 'bg-yellow-300',
		},
		texts: [
			'the-cherry-orchard',
			'i-is-a-long-memoried-woman',
			'ligeia',
			'toni-morrison',
		],
	},
	{
		letter: {
			symbol: 'low-B',
			class: 'bg-green-400',
		},
		texts: ['penelopiad', 'whispers-of-immortality'],
	},
];
</script>

<template>
	<div class="column bg-gray-800">
		<div v-for="tier of tiers" class="column">
			<div class="row h-65">
				<div
					class="column items-center justify-center text-2xl font-bold w-30 h-full"
					:class="tier.letter.class"
				>
					{{ tier.letter.symbol }}
				</div>
				<div class="row flex-1">
					<div v-for="text of tier.texts" class="w-1/4">
						<img
							:src="`/assets/text-thumbnails/${text}.jpg`"
							class="h-full w-full"
						/>
					</div>
				</div>
			</div>
			<div class="h-[3px] w-full bg-black"></div>
		</div>
	</div>
</template>
