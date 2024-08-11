<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<!-- <div> -->
<!--   <div>{data.name}</div> -->
<!--   <div>{data.price}</div> -->
<!--   <div>{data.stock}</div> -->
<!--   <div>{data.category}</div> -->
<!--   <div>{data.picurl}</div> -->
<!--   <div>{data.discrate}</div> -->
<!--   <div>{data.description}</div> -->
<!--   <div>{data.created_at}</div> -->
<!-- </div> -->

<div class="flex min-w-full h-full justify-center">
  <div class="m-auto w-10 h-10 bg-base-100 shadow-sm border">{data.name}</div>
</div>
