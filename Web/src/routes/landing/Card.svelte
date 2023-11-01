<script>
	export let card = {
		title: '',
		image: '',
		steps: []
	};
</script>

<div class="card">
	<div class="card-side card-side--front glass">
		<div class="card-picture">
			<img class="h-full w-full object-cover" src={card.image} alt="Producer header card" />
		</div>
		<div class="card-body default-text">
			<h2 class="card-title">{card.title}</h2>
		</div>
	</div>
	<div class="card-side card-side--back glass">
		<div class="card-body default-text">
			<ul class="steps steps-vertical">
				{#each card.steps as step}
					<li class="step">{step}</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<style lang="postcss">
	.card {
		perspective: 150rem;
		-moz-perspective: 150rem;
		display: relative;
		height: 35rem;
	}

	.card-side {
		height: 35rem;
		transition: all 0.8s ease;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		border-radius: 3px;
		overflow: hidden;
		box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
	}

	.card-side--back {
		transform: rotateY(180deg);
	}

	.card-side--back .card-body {
		@apply h-full;
	}

	.card-side--front .card-body {
		@apply h-auto;
	}

	.card:hover .card-side--front {
		transform: rotateY(-180deg);
	}

	.card:hover .card-side--back {
		transform: rotateY(0deg);
	}

	.card-body {
		color: var(--white-background);
	}

	.card-picture {
		@apply shadow-2xl;
		background-size: cover;
		height: 27rem;
		background-blend-mode: screen;
		-webkit-clip-path: polygon(0 0, 100% 0, 100% 88%, 0% 100%);
		clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%);
		overflow: hidden;
	}

	.card-title {
		@apply text-4xl justify-center bg-clip-text text-transparent p-1;
		background-image: linear-gradient(var(--cream), var(--white-background));
		font-family: var(--font-header);
	}

	.card-body ul {
		@apply h-full;
	}
	.card-body ul li {
		@apply text-xl text-left;
	}

	.card-body ul li::before {
		@apply h-full;
		background-color: var(--dark-green);
	}

	.card-body ul li::after {
		@apply text-xl;
		font-family: var(--font-header);
		color: var(--white-background);
		background-color: var(--dark-green);
	}
</style>
