<script>
	export let data;
</script>

<svelte:head>
	<title>Agrou Shop - About</title>
</svelte:head>

{#each data.users as user}
	<div>id : {user.id} | name : {user.name} | age : {user.age}</div>
{/each}
