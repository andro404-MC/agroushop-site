<script>
  import { PUBLIC_WAT_NUM } from "$env/static/public";
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
      INFORMATIQUE-IA
    </a>
  </div>

  <div class="flex-none">
    <a href="/shop" class="btn btn-square btn-ghost">
      <Icon width="1.4rem" icon="ic:outline-shopping-cart" />
    </a>
  </div>
</div>

<slot />

<footer class="footer bg-neutral text-neutral-content p-10">
  <aside>
    <p class="select-none text-3xl font-bold italic text-red-600">
      INFORMATIQUE-IA
    </p>
    <p>address</p>
  </aside>
  <nav>
    <h6 class="footer-title">Social</h6>
    <div class="grid grid-flow-col gap-4">
      <a target="_blank" href="https://wa.me/{PUBLIC_WAT_NUM}">
        <Icon class="text-2xl" icon="ic:baseline-whatsapp" />
      </a>
      <a href="#"><Icon class="text-2xl" icon="ic:baseline-facebook" /></a>
    </div>
  </nav>
</footer>
