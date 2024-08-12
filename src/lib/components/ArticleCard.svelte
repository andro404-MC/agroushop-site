<script>
  export let article;
  let fallback = "https://untemi.sirv.com/agrou/no-img.webp";
</script>

<div
  style="view-transition-name: card-{article.id};"
  class="flex flex-col h-full bg-base-100 overflow-hidden"
>
  <div class="relative w-full h-fit p-2">
    {#if article.discrate > 0}
      <span class="absolute top-0 right-0 badge badge-warning">
        -{article.discrate}%
      </span>
    {/if}
    {#if !article.picurl}
      <img
        class="m-auto w-full border-2 rounded-md"
        src={fallback}
        alt="article"
      />
    {:else}
      <img
        class="m-auto w-full h-auto aspect-square border-2 rounded-md"
        src={article.picurl}
        on:error={(ev) => (ev.target.src = fallback)}
        alt="article"
      />
    {/if}
  </div>

  <div class="flex flex-col p-2 gap-1">
    <div class="font-karla truncate line-clamp-2">
      {article.name}
    </div>

    <div>
      {#if article.discrate > 0}
        <span class="font-karla text-xl text-red-800">
          {article.price - (article.price * article.discrate) / 100} DH
        </span>
        <span class="font-karla text-md line-through text-zinc-500"
          >{article.price}</span
        >
      {:else}
        <span class="font-karla text-xl"> {article.price} DH</span>
      {/if}
    </div>

    <div class="flex flex-wrap gap-2">
      <div class="badge badge-secondary">NEW</div>
      <div class="badge badge-outline">{article.category}</div>
    </div>

    <div>
      <div class="badge badge-ghost w-full">
        {#if !article.stock}
          out of stock
        {:else}
          {article.stock} left
        {/if}
      </div>
    </div>
  </div>
</div>
