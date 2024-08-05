<script>
	export let article;
</script>

<div class="card bg-base-100 h-96 w-96 shadow-xl">
	<figure class="p-10">
		<img class="m-auto" height="150px" width="150px" src={article.picurl} alt="article" />
	</figure>

	<div class="card-body">
		<h2 class="card-title">{article.name}</h2>

		<div class="flex flex-wrap gap-1">
			<div class="badge badge-secondary">NEW</div>
			{#if article.discrate > 0}
				<div class="badge badge-warning">-{article.discrate}%</div>
			{/if}

			{#if article.stock <= 0}
				<div class="badge badge-ghost">rupture de stock</div>
			{/if}
		</div>
		<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo magni quisquam.</p>
		<div class="card-actions justify-end">
			<div class="badge badge-outline">{article.category}</div>
		</div>
	</div>
</div>
