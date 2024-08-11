<script>
  import { page } from "$app/stores";
</script>

<div class="flex min-h-screen min-w-screen justify-center">
  <div class="font-mono text-2xl m-auto">
    ERROR : {$page.status} - {$page.error.message}
  </div>
</div>
