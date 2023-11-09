<script>
  import { onMount } from 'svelte';
  import '../landing.css';
  import Header from './Header.svelte';
  import Product from './Product.svelte';
  import Functionality from './Functionality.svelte';
  import Features from './Features.svelte';
  import AboutUs from './AboutUs.svelte';

  onMount(() => {
    const mediaList = document.querySelector('ul.media-list');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        mediaList?.classList.remove('hidden');
        mediaList?.classList.add('animation');
      } else {
        mediaList?.classList.remove('animation');
        mediaList?.classList.add('hidden');
      }
    });
  });
</script>

<Header />
<main>
  <Product />
  <Functionality />
  <Features />
  <AboutUs />
  <ul class="media-list">
    <a href="https://www.instagram.com/pasturapp_/" target="_blank"
      ><li><img src="/icons/instagram.png" alt="Instagram logo" /></li></a
    >
    <a href="mailto:pasturappofficial@gmail.com" target="_blank"
      ><li><img src="/icons/gmail.png" alt="Gmail logo" /></li></a
    >
  </ul>
  <!-- <footer>
    <div class="footer-wrapper">
      <div class="top-content">
        <a href="/">
          <img
            src="/icons/pasturapp-logo-gray.png"
            class="w-8"
            alt="PasturApp logo"
          />
          <span>PasturApp</span>
        </a>
        <ul>
          <li>
            <a href="#about-us" class="mr-4 hover:underline md:mr-6"
              >Sobre nosotros</a
            >
          </li>
          <li>
            <a
              href="https://www.instagram.com/pasturapp_/"
              class="mr-4 hover:underline md:mr-6">Instagram</a
            >
          </li>
          <li>
            <a
              href="mailto:pasturappofficial@gmail.com"
              class="mr-4 hover:underline md:mr-6">Email</a
            >
          </li>
        </ul>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <span class="details"
        >© 2023 <a href="/" class="hover:underline">PasturApp™</a>. All Rights
        Reserved.</span
      >
    </div>
  </footer> -->
</main>

<style lang="postcss">
  .media-list {
    @apply fixed hidden md:grid px-3 bottom-0 left-0 justify-items-center;
    transform: translateY(-10%);
  }

  .media-list::after {
    @apply w-0.5 h-20;
    content: '';
    background-color: var(--dark-green);
  }

  .media-list img {
    @apply h-8 mb-3;
  }

  /* .footer-wrapper {
    @apply w-full max-w-screen-xl mx-auto p-4 md:py-8;
  }

  .top-content {
    @apply sm:flex sm:items-center sm:justify-between;
  }

  .top-content a {
    @apply flex items-center mb-4 sm:mb-0;
  }

  .top-content span {
    @apply self-center text-2xl font-semibold whitespace-nowrap dark:text-white;
  }

  footer ul {
    @apply flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400;
  }

  .details {
    @apply block text-sm text-gray-500 sm:text-center dark:text-gray-400;
  } */
</style>
