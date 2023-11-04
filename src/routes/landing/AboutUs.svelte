<script>
	import CardAboutUs from './CardAboutUs.svelte';

	const dataCardsAboutUs = [
		{
			src: 'images/micaela-picco.jpg',
			srcAlt: 'Micaela Picco',
			name: 'Micaela Picco',
			info: 'Pica lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
			links: [
				{
					social: 'LinkedIn',
					href: 'https://www.linkedin.com/in/micaela-picco/',
					icon: '/icons/linkedin.png',
					alt: 'LinkedIn logo'
				},
				{
					social: 'GitHub',
					href: 'https://github.com/micaelapicco',
					icon: '/icons/github.png',
					alt: 'GitHub logo'
				},
				{
					social: 'Gmail',
					href: 'mailto:micaelaabril421@gmail.com',
					icon: '/icons/gmail.png',
					alt: 'Gmail logo'
				}
			]
		},
		{
			src: 'images/sol-puente.jpg',
			srcAlt: 'Sol Puente',
			name: 'Sol Puente',
			info: 'Solchu lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
			links: [
				{
					social: 'LinkedIn',
					href: 'https://www.linkedin.com/in/sol-puente/',
					icon: '/icons/linkedin.png',
					alt: 'LinkedIn logo'
				},
				{
					social: 'GitHub',
					href: 'https://github.com/solp22',
					icon: '/icons/github.png',
					alt: 'GitHub logo'
				},
				{
					social: 'Gmail',
					href: 'mailto:sol.puentereal@gmail.com',
					icon: '/icons/gmail.png',
					alt: 'Gmail logo'
				}
			]
		},
		{
			src: 'images/luz-saavedra.jpg',
			srcAlt: 'Luz Saavedra',
			name: 'Luz Saavedra',
			info: 'Looz lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
			links: [
				{
					social: 'LinkedIn',
					href: 'https://www.linkedin.com/in/ludasaadi/',
					icon: '/icons/linkedin.png',
					alt: 'LinkedIn logo'
				},
				{
					social: 'GitHub',
					href: 'https://github.com/vandriodd',
					icon: '/icons/github.png',
					alt: 'GitHub logo'
				},
				{
					social: 'Gmail',
					href: 'mailto:luzsaavedradri03@gmail.com',
					icon: '/icons/gmail.png',
					alt: 'Gmail logo'
				}
			]
		},
		{
			src: 'images/mateo-olivera.jpg',
			srcAlt: 'Mateo Olivera',
			name: 'Mateo Olivera',
			info: 'Mateo lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
			links: [
				{
					social: 'LinkedIn',
					href: 'https://www.linkedin.com/in/mateo-olivera-a90693266/',
					icon: '/icons/linkedin.png',
					alt: 'LinkedIn logo'
				},
				{
					social: 'GitHub',
					href: 'https://github.com/MateoOlv',
					icon: '/icons/github.png',
					alt: 'GitHub logo'
				},
				{
					social: 'Gmail',
					href: 'mailto:mateoolivera1@hotmail.com',
					icon: '/icons/gmail.png',
					alt: 'Gmail logo'
				}
			]
		},
		{
			src: 'images/patricio-benglian.jpg',
			srcAlt: 'Patricio Benglian',
			name: 'Patricio Benglian',
			info: 'Patricio lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
			links: [
				{
					social: 'LinkedIn',
					href: '',
					icon: '/icons/linkedin.png',
					alt: 'LinkedIn logo'
				},
				{
					social: 'GitHub',
					href: '',
					icon: '/icons/github.png',
					alt: 'GitHub logo'
				},
				{
					social: 'Gmail',
					href: '',
					icon: '/icons/gmail.png',
					alt: 'Gmail logo'
				}
			]
		}
	];
</script>

<section id="about-us">
	<article>
		<h2 class="heading">Sobre nosotros</h2>
		<div class="divider"><img src="/icons/grass.svg" alt="grass icon" /></div>
		<!--Team information-->
		<div class="team-info">
			<div>
				<p class="default-text">
					PasturApp es el resultado del trabajo de un apasionado equipo de desarrollo compuesto por
					estudiantes de Holberton School Uruguay. Aunque nuestra experiencia abarca una variedad de
					campos, contamos con la valiosa dirección de una ingeniera agrónoma que aporta un profundo
					conocimiento del sector lechero. Nuestra misión es proporcionar a productores y asesores
					una herramienta de autogestión que impulsará la eficiencia de los procesos y los
					resultados en el complejo mundo de la producción de leche. En PasturApp, nos comprometemos
					a innovar en el rubro y aportar soluciones que mejoren la producción, respaldando a
					quienes toman decisiones críticas en la industria lechera. Estamos ansiosos por ser parte
					de su éxito y ayudar a transformar el futuro de la agricultura.
				</p>
				<span class="details">
					<h4>PasturApp team</h4>
					<p>Lorem ipsum, dolor</p>
				</span>
			</div>
			<img src="images/team-photo.jpg" alt="team" />
		</div>
		<!--Personal cards-->
		<div class="personal-info">
			{#each dataCardsAboutUs as card}
				<CardAboutUs {card} />
			{/each}
		</div>
		<div class="footer">
			<img src="/icons/pasturapp-logo.png" alt="logo" />
		</div>
	</article>
</section>

<style lang="postcss">
	:global(.card:nth-child(1) .image-wrapper img) {
		background-color: #fff;
		object-position: -5px 100%;
	}

	.divider img {
		@apply w-9 h-9;
	}

	#about-us {
		@apply relative flex justify-center items-center pt-20 pb-14 px-20;
		background: url('images/gradient-background.png');
		background-size: cover;
	}

	#about-us > * {
		@apply flex-1;
	}

	.heading {
		@apply mb-6 mx-auto;
		color: var(--white-background);
	}

	.divider {
		justify-content: center;
	}

	.divider:before,
	.divider:after {
		/* height: 5px;
		max-width: 90px; */
		height: 2px;
		max-width: 20px;
	}

	.divider::before {
		background-color: var(--white-background);
	}

	.divider::after {
		background-color: var(--white-background);
	}

	.divider img {
		@apply h-5;
	}

	.team-info {
		@apply flex flex-col-reverse justify-between items-center gap-20 p-0 py-16 lg:flex-row xl:pt-8;
		width: 100%;
		margin: 0 auto;
	}

	.team-info img {
		@apply w-2/3 h-2/3 rounded-lg md:w-1/2 md:h-1/2 lg:w-1/3 lg:h-1/2 xl:w-1/3 xl:h-1/3;
		outline: 3px solid var(--green-background);
		outline-offset: 4px;
		animation: expand 1s infinite cubic-bezier(0.17, 0.67, 0.83, 0.67) alternate;
	}

	@keyframes expand {
		0% {
			outline-offset: 4px;
		}
		100% {
			outline-offset: 10px;
		}
	}

	.default-text {
		@apply text-justify text-base md:text-lg lg:text-2xl xl:text-lg xl:mb-0;
		color: var(--white-background);
	}

	.default-text::before {
		@apply block text-7xl h-10 font-extrabold pl-2;
		content: open-quote;
	}

	.default-text::after {
		@apply block text-7xl h-10 font-extrabold text-right pr-2;
		content: close-quote;
	}

	.personal-info {
		@apply flex flex-col items-center md:grid md:justify-items-center md:grid-cols-2 lg:grid-cols-3 lg:gap-0 xl:grid-cols-3 2xl:grid-cols-5;
	}

	.details {
		@apply text-left italic;
		color: var(--white-background);
	}

	.details::before {
		content: '—';
	}

	.details h4 {
		@apply text-xl font-bold;
	}

	.details p {
		@apply text-sm;
	}

	.footer {
		@apply flex justify-center items-center pt-10;
	}

	.footer img {
		@apply w-20 md:w-28;
	}
</style>
