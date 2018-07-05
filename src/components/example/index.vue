<template>
	<p class="greeting" :class="className"><slot>Example</slot></p>
</template>

<script>
	export default {
		name: 'Example',
		props: {
			className: {
				type: String,
				default: '',
			}
		},
	}
</script>

<style scoped>
	.greeting {
		font-size: 12px;
		font-family: Arial, sans-serif;
		border: 1px solid rgba(255,0,0,1);
		background-color: rgba(255,0,0,0.1);
		padding: 12px;
		display: inline-block;
	}
	.greeting--success {
		border: 1px solid rgba(0,255,0,1);
		background-color: rgba(0,255,0,0.1);
	}
</style>