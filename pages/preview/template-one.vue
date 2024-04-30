<template>
  <div class="h-full w-full bg-zinc-100">

    <!-- Fonts Button -->
    <button class="fixed right-0 top-[20vh] z-30 bg-gradient-to-r from-lime-400 to-green-400 text-white h-12 w-12 flex items-center justify-center rounded-l-xl" @click="isOpen = true">
      <Icon name="material-symbols:settings-rounded" class="w-7 h-7" />
    </button>

    <USlideover v-model="isOpen" :overlay="false" class="h-[50vh] md:h-full">
      <aside class="bg-zinc-950 h-full overflow-y-auto">
        <div v-if="pending">
          <div class="flex items-center justify-center h-full p-20 text-2xl">
            Loading Fonts...
          </div>
        </div>
        <div v-else>
          <div class="flex items-center justify-between gap-4 px-3 border-b border-zinc-700 py-4">
            <div class="flex items-center gap-2">
              <h3>Selected Font:</h3>
              <span class="text-yellow-500">{{ selectedFont }}</span>
            </div>
            <button class="text-white bg-zinc-900 flex items-center justify-center px-2 py-2 rounded-lg" @click="isOpen = false">
              <Icon name="material-symbols:close" />
            </button>
          </div>
          <div class="grid grid-cols-3 gap-3 p-3">
            <button 
              v-for="font in fonts.items" 
              class="w-full h-16 flex items-center justify-center rounded-xl shadow-xl bg-zinc-900 text-sm text-zinc-300"
              @click="emitFontSelected(font.family)"
            >
              {{ font.family }}
            </button>
          </div>
        </div>
      </aside>
    </USlideover>

    <!-- Recommendation button -->
    <button class="fixed left-0 bottom-[20vh] z-30 bg-gradient-to-r from-gray-800 to-slate-600 text-white h-12 w-12 flex items-center justify-center rounded-r-xl" @click="recommendTab = true">
      <Icon name="material-symbols:order-approve-sharp" class="w-7 h-7" />
    </button>
    <USlideover v-model="recommendTab" :overlay="false" side="left" class="h-[50vh] md:h-full">
      <aside class="bg-zinc-950 h-full overflow-y-auto">
        <div class="grid grid-cols-1 gap-3 p-3">

          <!-- Adam Dannaway -->
          <section class="bg-zinc-900 p-3 rounded-xl">
            <div class="flex justify-between items-center text-sm">
              <div class="flex items-center gap-2">
                <img src="/influencer/AdamDannaway.jpeg" alt="uiadrian" class="rounded-full w-9 h-9 border border-yellow-100 shadow-lg">
                <div>
                    <h4>Adam Dannaway</h4>
                    <a class="text-xs text-zinc-400 hover:text-yellow-500" target="_blank" href="https://www.linkedin.com/in/adhamdannaway">@adhamdannaway</a>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-2 mt-3">
              <button class="text-xs border p-1 rounded border-zinc-800 hover:border-zinc-700 text-zinc-400" @click="emitFontSelected('Figure')">Figure</button>
              <button class="text-xs border p-1 rounded border-zinc-800 hover:border-zinc-700 text-zinc-400" @click="emitFontSelected('Satoshi')">Satoshi</button>
              <button class="text-xs border p-1 rounded border-zinc-800 hover:border-zinc-700 text-zinc-400" @click="emitFontSelected('DM+Sans')">DM Sans</button>
              <button class="text-xs border p-1 rounded border-zinc-800 hover:border-zinc-700 text-zinc-400" @click="emitFontSelected('Plus+Jakarta+Sans')">Plus Jakarta Sans</button>
              <button class="text-xs border p-1 rounded border-zinc-800 hover:border-zinc-700 text-zinc-400" @click="emitFontSelected('Inter')">Inter</button>
              <button class="text-xs border p-1 rounded border-zinc-800 hover:border-zinc-700 text-zinc-400" @click="emitFontSelected('Manrope')">Manrope</button>
              <button class="text-xs border p-1 rounded border-zinc-800 hover:border-zinc-700 text-zinc-400" @click="emitFontSelected('Open+Sans')">Open Sans</button>
              <button class="text-xs border p-1 rounded border-zinc-800 hover:border-zinc-700 text-zinc-400" @click="emitFontSelected('Urbanist')">Urbanist</button>
              <button class="text-xs border p-1 rounded border-zinc-800 hover:border-zinc-700 text-zinc-400" @click="emitFontSelected('Lato')">Lato</button>
              <button class="text-xs border p-1 rounded border-zinc-800 hover:border-zinc-700 text-zinc-400" @click="emitFontSelected('Quicksand')">Quicksand</button>
            </div>
          </section>

          <!-- Adrian Kuleszo -->
          <section class="bg-zinc-900 p-3 rounded-xl">
            <div class="flex justify-between items-center text-sm">
              <div class="flex items-center gap-2">
                <img src="/influencer/uiadrian.jpeg" alt="uiadrian" class="rounded-full w-9 h-9 border border-yellow-100 shadow-lg">
                <div>
                    <h4>Adrian Kuleszo</h4>
                    <a class="text-xs text-zinc-400 hover:text-yellow-500" target="_blank" href="https://www.instagram.com/uiadrian">@uiadrian</a>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-2 mt-3">
              <button class="text-xs border p-1 rounded border-zinc-800 hover:border-zinc-700 text-zinc-400" @click="emitFontSelected('Ubranist')">Ubranist</button>
              <button class="text-xs border p-1 rounded border-zinc-800 hover:border-zinc-700 text-zinc-400" @click="emitFontSelected('DM Sans')">DM Sans</button>
              <button class="text-xs border p-1 rounded border-zinc-800 hover:border-zinc-700 text-zinc-400" @click="emitFontSelected('Manrope')">Manrope</button>
              <button class="text-xs border p-1 rounded border-zinc-800 hover:border-zinc-700 text-zinc-400" @click="emitFontSelected('Public Sans')">Public Sans</button>
              <button class="text-xs border p-1 rounded border-zinc-800 hover:border-zinc-700 text-zinc-400" @click="emitFontSelected('Inter')">Inter</button>
              <button class="text-xs border p-1 rounded border-zinc-800 hover:border-zinc-700 text-zinc-400" @click="emitFontSelected('Sora')">Sora</button>
              <button class="text-xs border p-1 rounded border-zinc-800 hover:border-zinc-700 text-zinc-400" @click="emitFontSelected('Cabin+Grotesk')">Cabin Grotesk</button>
            </div>
          </section>

        </div>
      </aside>
    </USlideover>

    <!-- Web Page -->
    <section class="w-full h-full overflow-y-auto">
        <template v-if="changingFontLoading">
          <div>Changing Font...</div>
        </template>
        <template v-else>
          <div class="h-full" :style="{ fontFamily: selectedFont }">
            <div class="header md:h-screen h-[60vh] relative">
              <nav class="flex items-center justify-between md:px-12 px-3 md:py-6 py-3 absolute top-0 left-0 right-0">
                <button class="bg-zinc-900 text-white flex items-center justify-center h-12 w-12 rounded-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M4 2.8A3.6 3.6 0 1 0 4 10a3.6 3.6 0 0 0 0-7.2m7.6 0v18.4h7.2a5.2 5.2 0 1 1 0-10.4a4 4 0 1 1 0-8zm7.2 0v8a4 4 0 1 0 0-8m0 8v10.4A5.2 5.2 0 0 0 24 16a5.2 5.2 0 0 0-5.2-5.2m-7.7-7.206L0 21.199h8.8l2.3-3.64Z"/></svg>
                </button>
                <NuxtLink to='/' class="logo text-2xl font-bold text-zinc-900 flex items-center gap-1">
                  <img src="/images/logo.png" alt="just-google-font" class="w-12 ">
                  JustGoogleFont
                </NuxtLink>
              </nav>
              <div class="hero-text flex flex-col items-center justify-center w-full h-full overflow-hidden md:leading-[40vh] leading-[20vh]">
                <p class="md:text-[40vh] text-[13vh] uppercase text-center font-bold text-zinc-900">Google</p>
                <p class="md:text-[40vh] text-[16vh] uppercase text-center font-bold text-zinc-900">Fonts</p>
              </div>
              <button class="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] md:w-[300px] md:h-[300px] w-[160px] h-[160px] rounded-full bg-lime-300 p-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-zinc-900" viewBox="0 0 24 24"><path fill="currentColor" d="M14.36 14.23a3.76 3.76 0 0 1-4.72 0a1 1 0 0 0-1.28 1.54a5.68 5.68 0 0 0 7.28 0a1 1 0 1 0-1.28-1.54M9 11a1 1 0 1 0-1-1a1 1 0 0 0 1 1m6-2a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-3-7a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8"/></svg>
              </button>
            </div>

            <section class="w-full md:h-[30vh] h-[20vh] overflow-hidden bg-lime-300 text-zinc-900 text-clip flex items-center justify-center">
              <p class="md:text-[5.5vw] text-[6vw] font-bold uppercase">SELECTED FONTS - {{ selectedFont }}</p>
            </section>

            <section class="h-full w-full overflow-hidden md:p-20 p-6">
              <p class="text-zinc-900 font-bold md:text-[14em] text-[5em] leading-[1em] text-center">LEARNING TYPE DESIGN HAS NEVER BEEN SO EASY</p>
            </section>

            <section class="h-full w-full bg-zinc-900 flex flex-col gap-3 py-6">
              <div class="text-[14vw] bg-zinc-900 md:px-20 md:py-12 px-5 py-5 leading-[70%] text-white hover:bg-white hover:text-zinc-900 cursor-pointer italic font-thin">Learn</div>
              <div class="font-bold text-[14vw] bg-zinc-900 md:px-20 md:py-12 px-5 py-5 leading-[70%] text-white hover:bg-white hover:text-zinc-900 cursor-pointer">How to</div>
              <div class="font-bold text-[14vw] bg-zinc-900 md:px-20 md:py-12 px-5 py-5 leading-[70%] text-white hover:bg-white hover:text-zinc-900 cursor-pointer">Select Fonts</div>
              <div class="text-[14vw] bg-zinc-900 md:px-20 md:py-12 px-5 py-5 leading-[70%] text-white hover:bg-white hover:text-zinc-900 cursor-pointer italic font-thin">Like a</div>
              <div class="font-bold text-[14vw] bg-zinc-900 md:px-20 md:py-12 px-5 py-5 leading-[70%] text-white hover:bg-white hover:text-zinc-900 cursor-pointer">Pro</div>
            </section>

            <section class="w-full md:h-[30vh] h-[12vh] overflow-hidden bg-lime-300 text-zinc-900 text-clip flex items-center justify-center">
              <p class="text-[5.1vw] font-bold uppercase">KICKSTART YOUR FONT JOURNEY</p>
            </section>

            <section class="md:h-screen grid md:grid-cols-2 md:p-12 p-5 overflow-hidden">
              <img src="https://illustrations.popsy.co/gray/home-office.svg" alt="">
              <div class="flex flex-col items-center justify-center">
                <p class="text-zinc-900 font-bold md:text-[5vw] text-[10vw] leading-[1em] text-center uppercase">ALL YOU NEED TO KNOW TO DESIGN FONTS LIKE A PRO</p>
                <p class="text-zinc-700 md:text-2xl text-center mt-5">That’s why we created this font previewer especially for designers like you</p>
              </div>
            </section>

            <footer class='p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-zinc-800 w-full'>
              <span class='text-sm text-zinc-500 sm:text-center dark:text-zinc-400 hidden md:block'>© 2024 JustGoogleFont. All Rights Reserved.</span>
              <div class='flex flex-wrap gap-2 items-center justify-between text-xs text-zinc-500 dark:text-zinc-400'>
                Inked By : <a href="https://twitter.com/vimal_bharti" target="_blank" class="underline hover:text-purple-300">Vimal Bharti</a>
              </div>
            </footer>
          </div>
          
        </template>
      </section>
  </div>
</template>

<script setup>
  const config = useRuntimeConfig()
    const search = ref('Acme') 
    const selectedFont = ref('Acme');

    const isOpen = ref(false)
    const recommendTab = ref(false)

    const changingFontLoading = ref(false)

    const { pending, count, data: fonts } = await useFetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${config.public.googleApi}`, {
      lazy: true,
      pick: ['items'],
    })

    onMounted(() => {
      const link = document.createElement('link');
      link.href = `https://fonts.googleapis.com/css?family=${selectedFont.value}&display=swap`;
      link.rel = 'stylesheet';
      link.id= 'googleFontLink';
      document.head.appendChild(link);
    })

    const emitFontSelected = (font) => {
      changingFontLoading.value = true;

      selectedFont.value = font.replace(/\s/g, '+')
      // change Google Font 
      let getLink = document.getElementById("googleFontLink");
      getLink.getAttribute("href");
      getLink.setAttribute("href", `https://fonts.googleapis.com/css?family=${selectedFont.value}&display=swap`);

      changingFontLoading.value = false;
    };
</script>

<style>

</style>