<script>
	import { writable } from 'svelte/store';
	import Component from '../lib/Component.svelte';
	import getData from '../lib/getData.js';
	import { TEST_KEY } from '../config.js';

	const DATA_STORE = writable({});

	$: process = (data) => {
		const { [TEST_KEY]: prop } = data;
		return { [TEST_KEY]: prop };
	};

	$: getData(DATA_STORE);
</script>

<Component data={$DATA_STORE} let:data {process}>
	{data[TEST_KEY]}
</Component>
