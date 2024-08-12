<script>
  import ArticleCard from "$lib/components/ArticleCard.svelte";
  export let data;
</script>

<svelte:head>
  <title>Agrou Shop - Articles</title>
</svelte:head>

<div
  class="m-4 gap-3 grid
  grid-cols-2 sm:grid-cols-3
  md:grid-cols-4 lg:grid-cols-6
  2xl:grid-cols-8"
>
  {#each data.articles as article}
    <a href="/shop/{article.id}">
      <ArticleCard {article} />
    </a>
  {/each}
</div>
