<script>
  import "../app.css";
  import Icon from "@iconify/svelte";
  import { onNavigate } from "$app/navigation";
  import NProgress from "nprogress";
  import { navigating } from "$app/stores";

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });

  NProgress.configure({
    showSpinner: false,
    minimum: 0.16,
  });

  $: {
    if ($navigating) {
      NProgress.start();
    }
    if (!$navigating) {
      NProgress.done();
    }
  }
</script>

<div class="navbar min-h-fit sticky top-0 z-10 bg-base-100 shadow-sm">
  <div class="flex-1">
    <a href="/" class="btn btn-ghost text-3xl font-bold italic text-red-600">
      PC-IA
    </a>
  </div>

  <div class="flex-none">
    <a href="/shop" class="btn btn-square btn-ghost">
      <Icon width="1.4rem" icon="ic:outline-shopping-cart" />
    </a>
  </div>
</div>

<slot />
