<script>
	export let process;
	export let data;
	$: currentData = process(data);
</script>

<slot data={currentData} />
