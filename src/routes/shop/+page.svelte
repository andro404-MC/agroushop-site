<svelte:head>
	<title>Agrou Shop - Articles</title>
</svelte:head>

<div class="flex flex-wrap gap-5 m-5">
	<div class="card bg-base-100 h-96 w-96 shadow-xl">
		<figure class="p-10">
			<img
				class="m-auto"
				height="150px"
				width="150px"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgj7aIwiWXsDv6rXo6cx21dPXjZfQZLFtkRQ&s"
				alt="article"
			/>
		</figure>

		<div class="card-body">
			<h2 class="card-title">Test 1</h2>

			<div class="flex flex-wrap gap-1">
				<div class="badge badge-secondary">NEW</div>
			</div>
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo magni quisquam.</p>
			<div class="card-actions justify-end">
				<div class="badge badge-outline">Embalage</div>
			</div>
		</div>
	</div>

	<div class="card bg-base-100 h-96 w-96 shadow-xl">
		<figure class="p-10">
			<img
				class="m-auto"
				height="150px"
				width="150px"
				src="https://i5.walmartimages.com/seo/Pen-Gear-Recycled-Shipping-Boxes-15-L-x-12-W-x-10-H_225da5d7-293f-46f3-940f-a9c2cc866b9b.bde7926e490cc18230192efabe843b88.jpeg"
				alt="article"
			/>
		</figure>

		<div class="card-body">
			<h2 class="card-title">Test 2</h2>

			<div class="flex flex-wrap gap-1">
				<div class="badge badge-secondary">NEW</div>
				<div class="badge badge-warning">-50%</div>
				<div class="badge badge-ghost">rupture de stock</div>
			</div>
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo magni quisquam.</p>
			<div class="card-actions justify-end">
				<div class="badge badge-outline">Embalage</div>
			</div>
		</div>
	</div>
</div>
