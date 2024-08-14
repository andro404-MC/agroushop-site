<script>
  import { PUBLIC_WAT_NUM } from "$env/static/public";
  import Icon from "@iconify/svelte";
</script>

<svelte:head>
  <title>INFORMATIQUE-IA</title>
</svelte:head>

<div
  class="hero h-[91vh]"
  style="background-image: url(https://untemi.sirv.com/agrou/agroubg.webp);"
>
  <div class="hero-overlay bg-opacity-60"></div>
  <div
    class="hero-content w-screen p-0 sm:p-4 text-center text-neutral-content"
  >
    <div class="w-screen sm:max-w-lg">
      <div class="bg-secondary py-6 px-5 sm:px-14 sm:rounded-3xl shadow-2xl">
        <h1 class="mb-5 text-5xl font-bold italic text-red-600">PC-IA</h1>
        <p class="mb-5 text-md">
          Nous proposons une assistance à distance, la création de sites web, et
          la maintenance informatique pour garder vos systèmes au top. On assure
          aussi la sécurité de vos données avec des solutions de cybersécurité
          et vous offre du matériel informatique de qualité.
        </p>
      </div>

      <a
        href="#services"
        class="animate-bounce btn rounded-full btn-square mt-6"
      >
        <Icon class="text-2xl" icon="ic:baseline-arrow-downward" />
      </a>
    </div>
  </div>
</div>

<section id="services" />

<div class="hero h-[100px] bg-primary">
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="text-2xl sm:text-4xl font-kanit tracking-widest">
        Nos Services
      </h1>
    </div>
  </div>
</div>

<div class="card md:card-side bg-base-300 shadow-xl p-3 sm:p-0">
  <figure class="shrink-0 m-2 md:m-0 shadow-2xl w-fit h-fit mx-auto">
    <img
      class="md:rounded-none rounded-2xl shadow-2xl"
      src="https://untemi.sirv.com/agrou/mater.webp"
      alt="Matériel informatique"
    />
  </figure>
  <div class="card-body">
    <div class="card-title text-4xl font-kanit mb-4 tracking-wider">
      Matériel informatique
    </div>
    <p>
      On propose une gamme complète de matériel informatique, allant des
      ordinateurs aux accessoires. On sélectionne des produits de qualité pour
      répondre à vos besoins professionnels et on vous aide à choisir le
      meilleur équipement.
    </p>

    <a href="/shop/" class="btn btn-primary">
      <Icon width="1.4rem" icon="ic:outline-shopping-cart" /> Shop
    </a>
  </div>
</div>

<div class="hero h-[5px] bg-primary"></div>

<div
  class="card md:card-side md:flex-row-reverse bg-base-300 shadow-xl p-3 sm:p-0"
>
  <figure class="shrink-0 m-2 md:m-0 shadow-2xl w-fit h-fit mx-auto">
    <img
      class="md:rounded-none rounded-2xl shadow-2xl"
      src="https://untemi.sirv.com/agrou/site.webp"
      alt="Conception sites"
    />
  </figure>
  <div class="card-body">
    <div class="card-title text-4xl font-kanit mb-4 tracking-wider">
      Conception sites
    </div>
    <p>
      On crée des sites web personnalisés pour vous. Qu'il s'agisse de design ou
      de fonctionnalités, on s'assure que votre site est beau, rapide et facile
      à utiliser. On se concentre sur l'expérience utilisateur et le
      référencement pour que vous soyez bien visible en ligne.
    </p>

    <a
      target="_blank"
      href="https://wa.me/{PUBLIC_WAT_NUM}?text=I am interested in Conception sites"
      class="btn btn-success"
    >
      <Icon class="text-2xl float-left" icon="ic:baseline-whatsapp" /> Demander
    </a>
  </div>
</div>

<div class="hero h-[5px] bg-primary"></div>

<div class="card md:card-side bg-base-300 shadow-xl p-3 sm:p-0">
  <figure class="shrink-0 m-2 md:m-0 shadow-2xl w-fit h-fit mx-auto">
    <img
      class="md:rounded-none rounded-2xl shadow-2xl"
      src="https://untemi.sirv.com/agrou/mat.webp"
      alt="Maintenance informatique"
    />
  </figure>
  <div class="card-body">
    <div class="card-title text-4xl font-kanit mb-4 tracking-wider">
      Maintenance informatique
    </div>
    <p>
      On garde vos systèmes en forme avec notre service de maintenance. On
      prévient les pannes, répare les problèmes et optimise vos équipements pour
      qu’ils durent plus longtemps. Avec nous, vous pouvez vous concentrer sur
      votre travail sans souci technique.
    </p>
    <a
      target="_blank"
      href="https://wa.me/{PUBLIC_WAT_NUM}?text=I am interested in Maintenance informatique"
      class="btn btn-success"
    >
      <Icon class="text-2xl float-left" icon="ic:baseline-whatsapp" /> Demander
    </a>
  </div>
</div>

<div class="hero h-[5px] bg-primary"></div>

<div
  class="card md:card-side md:flex-row-reverse bg-base-300 shadow-xl p-3 sm:p-0"
>
  <figure class="shrink-0 m-2 md:m-0 shadow-2xl w-fit h-fit mx-auto">
    <img
      class="md:rounded-none rounded-2xl shadow-2xl"
      src="https://untemi.sirv.com/agrou/assi.webp"
      alt="Assistance informatique"
    />
  </figure>
  <div class="card-body">
    <div class="card-title text-4xl font-kanit mb-4 tracking-wider">
      Assistance informatique
    </div>
    <p>
      Besoin d’aide technique ? On est là pour résoudre vos soucis logiciels,
      matériels ou réseau, à distance ou sur site. On agit vite pour garder vos
      activités en marche sans interruptions.
    </p>
    <a
      target="_blank"
      href="https://wa.me/{PUBLIC_WAT_NUM}?text=I am interested in Assistance informatique"
      class="btn btn-success"
    >
      <Icon class="text-2xl float-left" icon="ic:baseline-whatsapp" /> Demander
    </a>
  </div>
</div>

<div class="hero h-[5px] bg-primary"></div>

<div class="card md:card-side bg-base-300 shadow-xl p-3 sm:p-0">
  <figure class="shrink-0 m-2 md:m-0 shadow-2xl w-fit h-fit mx-auto">
    <img
      class="md:rounded-none rounded-2xl shadow-2xl"
      src="https://untemi.sirv.com/agrou/sec.webp"
      alt="Cyber sécurité"
    />
  </figure>
  <div class="card-body">
    <div class="card-title text-4xl font-kanit mb-4 tracking-wider">
      Cyber sécurité
    </div>
    <p>
      On protège vos données et systèmes contre les cyberattaques avec des
      solutions de cybersécurité avancées. On installe des pare-feu, surveille
      les menaces, et fait des audits pour sécuriser vos infos et défendre votre
      entreprise en ligne.
    </p>
    <a
      target="_blank"
      href="https://wa.me/{PUBLIC_WAT_NUM}?text=I am interested in Cyber sécurité"
      class="btn btn-success"
    >
      <Icon class="text-2xl float-left" icon="ic:baseline-whatsapp" /> Demander
    </a>
  </div>
</div>
