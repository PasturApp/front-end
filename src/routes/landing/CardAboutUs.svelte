<script>
	export let card = {
		src: '',
		srcAlt: '',
		name: '',
		info: '',
		links: [
			{
				social: '',
				href: '',
				icon: '',
				alt: ''
			}
		]
	};
</script>

<div class="card glass">
	<div class="image-wrapper">
		<img src={card.src} alt={card.srcAlt} />
	</div>
	<div class="card-body">
		<h3 class="card-title">{card.name}</h3>
		<p>{card.info}</p>
	</div>
	<div class="card-actions">
		{#each card.links as link}
			<a href={link.href}>
				<li><img src={link.icon} alt={link.alt} /></li>
			</a>
		{/each}
	</div>
</div>

<style lang="postcss">
	.card {
		@apply flex flex-col items-center justify-center h-auto w-80 p-4 m-4;
		border-radius: 10px;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
	}

	.glass {
		background-image: linear-gradient(
				135deg,
				rgb(255 255 255 / var(--glass-opacity, 5%)) 0%,
				rgba(233, 247, 236, 0.356) 100%
			),
			linear-gradient(
				var(--glass-reflex-degree, 100deg),
				rgb(255 255 255 / var(--glass-reflex-opacity, 10%)) 25%,
				rgba(211, 216, 189, 0.224) 25%
			);
	}

	.image-wrapper {
		@apply flex items-start justify-center h-32 w-32 overflow-hidden rounded-full;
	}

	.card-title {
		@apply justify-center text-2xl font-bold;
	}

	.card-actions {
		@apply flex justify-end gap-2 pb-3;
	}

	li {
		@apply inline-block h-10 w-10;
	}
</style>
