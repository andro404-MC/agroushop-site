<script>
  import { PUBLIC_WAT_NUM } from "$env/static/public";
  import Icon from "@iconify/svelte";

  /** @type {import('./$types').PageData} */
  export let data;

  let fallback = "https://untemi.sirv.com/agrou/no-img.webp";
</script>

<svelte:head>
  <title>INFORMATIQUE-IA - {data.name}</title>
</svelte:head>

<div class="sm:px-16 sm:py-6">
  <div
    style="view-transition-name: card-{data.id};"
    class="flex flex-col bg-base-100 sm:rounded-lg shadow-2xl p-5"
  >
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div class="w-full h-fit">
        {#if !data.picurl}
          <img
            class="m-auto w-full border-2 rounded-md"
            src={fallback}
            alt="data"
          />
        {:else}
          <img
            class="m-auto w-full h-auto aspect-square border-2 rounded-md"
            src={data.picurl}
            on:error={(ev) => (ev.target.src = fallback)}
            alt="data"
          />
        {/if}
      </div>

      <div class="flex flex-col p-2 gap-3">
        <div>
          <div>
            {#if data.discrate > 0}
              <span class="font-karla text-4xl text-red-800">
                {data.price - (data.price * data.discrate) / 100} DH
              </span>
              <span class="font-karla text-md line-through text-zinc-500">
                {data.price}
              </span>
            {:else}
              <span class="font-karla text-4xl"> {data.price} DH</span>
            {/if}
          </div>

          <div class="flex flex-wrap gap-1">
            <div class="badge badge-secondary">NEW</div>

            {#if data.discrate > 0}
              <div class="badge badge-warning">
                -{data.discrate}%
              </div>
            {/if}

            <div class="badge badge-outline">{data.category}</div>

            <div class="badge badge-ghost">
              {#if !data.stock}
                out of stock
              {:else}
                {data.stock} left
              {/if}
            </div>
          </div>
        </div>

        <div class="font-karla text-2xl">
          {data.name}
        </div>

        <a
          target="_blank"
          href="https://wa.me/{PUBLIC_WAT_NUM}?text=I am interested in {data.name}"
          class="btn btn-success w-full text-xl"
        >
          <Icon class="text-2xl float-left" icon="ic:baseline-whatsapp" /> Buy Now
        </a>

        <div class="whitespace-pre-line font-karla">
          {data.description}
        </div>
      </div>
    </div>
  </div>
</div>
