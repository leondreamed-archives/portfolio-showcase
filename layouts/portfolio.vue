<template>
	<div class="slidev-layout">
		<div class="column justify-stretch h-full">
			<div class="h-2 bg-black mb-4"></div>
			<div id="content">
				<slot></slot>
			</div>
			<div class="flex-1"></div>
			<div class="h-2 bg-black mt-4"></div>
		</div>
	</div>
</template>

<style>
#content p {
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
}
</style>
