<script>
  export let article;
  let fallback = "https://untemi.sirv.com/agrou/no-img.webp";
</script>

<div class="flex flex-col bg-base-100 rounded-md shadow-md overflow-hidden">
  <div class="relative w-full h-fit p-2">
    {#if article.discrate > 0}
      <span class="absolute top-0 right-0 badge badge-warning">
        -{article.discrate}%
      </span>
    {/if}
    <img
      class="m-auto w-full border-2 rounded-md"
      src={article.picurl}
      onerror="this.onerror=null;this.src='{fallback}'"
      alt="article"
    />
  </div>

  <div class="flex flex-col p-2 gap-2">
    <div class="font-karla truncate">
      {article.name}
    </div>

    <div class="flex flex-wrap gap-2">
      <div class="badge badge-secondary">NEW</div>
      <div class="badge badge-outline">{article.category}</div>
    </div>

    <div>
      {#if article.stock <= 0}
        <div class="badge badge-ghost w-full">rupture de stock</div>
      {/if}
    </div>
  </div>
</div>
