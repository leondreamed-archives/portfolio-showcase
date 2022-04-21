<template>
	<div class="slidev-layout">
		<div id="content" class="column justify-stretch h-full">
			<div class="h-2 bg-black mb-4"></div>
			<slot></slot>
			<div class="h-2 bg-black mt-auto"></div>
		</div>
	</div>
</template>

<style>
#content p {
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
}
</style>
