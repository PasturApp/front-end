<script>
	import Card from './Card.svelte';

	const dataCards = [
		{
			title: 'Productor',
			image: '/producer.png',
			steps: ['Regístrese', 'Ingrese datos', 'Conéctese con su asesor', 'Supervise su sistema']
		},
		{
			title: 'Asesor',
			image: '/advisory.png',
			steps: ['Regístrese', 'Conéctese con su productor', 'Visualice datos']
		}
	];
</script>

<section id="how-it-works">
	<article>
		<h2 class="heading">¿Cómo funciona?</h2>
		<p class="default-text">Identifique el rol con el cual hará uso de PasturApp</p>
		<div class="card-wrapper">
			{#each dataCards as card}
				<Card {card} />
			{/each}
		</div>
	</article>
</section>

<style lang="postcss">
	#how-it-works {
		@apply flex relative justify-center items-center py-20 px-20;
		transform: skewY(-3deg);
		background: url('/blurry-gradient-background.png') no-repeat;
		background-size: cover;
	}

	article {
		transform: skewY(3deg);
	}

	.heading {
		@apply mb-0;
		color: var(--white-background);
	}

	#how-it-works p {
		@apply flex justify-center items-center py-8;
		color: var(--white-background);
	}

	.card-wrapper {
		@apply grid grid-cols-1 gap-9 lg:grid-cols-2;
	}
</style>
