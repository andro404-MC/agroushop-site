<script>
	import ArticleCard from '$lib/components/ArticleCard.svelte';
	export let data;
</script>

<svelte:head>
	<title>Agrou Shop - Articles</title>
</svelte:head>

<div class="flex flex-wrap gap-5 m-5">
	{#each data.articles as article}
		<ArticleCard {article} />
	{/each}
</div>
