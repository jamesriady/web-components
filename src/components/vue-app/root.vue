<template>
	<div>
        <h3>Title: {{ title }}</h3>
        <p>Greeting: {{ hello }}</p>
    </div>
</template>

<script>
	export default {
		name: 'root',
		props: ['title'],
		data() {
			return {
				hello: 'Vue Web Component'
			}
		}
	}
</script>	