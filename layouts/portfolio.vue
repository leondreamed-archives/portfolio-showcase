<template>
	<div class="slidev-layout">
		<div id="content" class="column justify-stretch h-full">
			<div class="h-1 bg-orange-400 mb-4"></div>
			<slot></slot>
			<div class="h-1 bg-orange-400 mt-auto"></div>
		</div>
	</div>
</template>

<style>
#content p {
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
}
</style>
