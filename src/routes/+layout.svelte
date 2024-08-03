<script>
	import '../app.css';
	import Icon from '@iconify/svelte';
</script>

<div class="bg-base-200 min-h-screen">
	<div class="navbar sticky top-0 z-50 bg-base-100 shadow-lg">
		<div class="flex-1">
			<a href="/" class="btn btn-ghost text-xl">Agrou Shop</a>
		</div>

		<div class="flex-none">
			<a href="/shop" class="btn btn-square btn-ghost">
				<Icon width="1.4rem" icon="ic:outline-shopping-cart" />
			</a>
			<a href="/about" class="btn btn-square btn-ghost">
				<Icon width="1.4rem" icon="ic:outline-info" />
			</a>
		</div>
	</div>

	<slot />
</div>
