<template>
    <div class="bg-pattern">
        <div class="h-full overflow-hidden relative flex items-center justify-center p-12">
            <div class="px-12 text-[10vw] text-center font-bold bg-gradient-to-r from-lime-400 to-teal-400 bg-clip-text text-transparent" :class="font">Google <i class="font-thin">Font</i> Preview <br/> <i class="font-thin">Made</i> Easy</div>
            
            <span class="bg-gradient-to-r from-lime-400 to-teal-400 opacity-75 absolute top-0 left-0 w-[250px] h-[250px] rounded-full blur-[14em]"></span>
            <span class="bg-gradient-to-r from-lime-400 to-teal-400 opacity-75 absolute bottom-0 right-0 w-[180px] h-[180px] rounded-full blur-[14em]"></span>

            <div class="hidden md:block absolute bottom-20 right-10 w-[200px] rounded-xl shadow-xl bg-zinc-900/50 backdrop-blur-lg overflow-hidden animate-bounce hover:animate-none">
                <button 
                    class="w-full text-left py-3 px-5 hover:bg-teal-950 text-zinc-300 text-sm" 
                    :class="font === 'font-exo' ? 'bg-teal-950' : '' " 
                    @click="font = 'font-exo'"
                >Exo</button>
                <button 
                    class="w-full text-left py-3 px-5 hover:bg-teal-950 text-zinc-300 text-sm" 
                    :class="font === 'font-indie' ? 'bg-teal-950' : '' " 
                    @click="font = 'font-indie'"
                >Indie</button>
                <button 
                    class="w-full text-left py-3 px-5 hover:bg-teal-950 text-zinc-300 text-sm" 
                    :class="font === 'font-kalam' ? 'bg-teal-950' : '' " 
                    @click="font = 'font-kalam'"
                >Kalam</button>
                <button 
                    class="w-full text-left py-3 px-5 hover:bg-teal-950 text-zinc-300 text-sm" 
                    :class="font === 'font-rubik' ? 'bg-teal-950' : '' " 
                    @click="font = 'font-rubik'"
                >Rubik</button>
            </div>
        </div>

        <!-- Templates -->
        <section class="h-full border-b border-zinc-900">
            <div class="max-w-6xl mx-auto md:py-20 py-4 px-4 md:px-0">
                <h2 class="text-3xl font-bold md:mb-10 mb-4">Templates</h2>
                <div class="grid grid-cols-1 gap-6">
                    <NuxtLink to="/preview/template-one">
                        <figure class="border-8 border-zinc-800 rounded-xl shadow-xl overflow-hidden group relative">
                            <img src="/preview-one.png" class="w-full object-cover h-full group-hover:scale-110 cursor-pointer transition duration-700 ease-in-out group-hover:grayscale" />
                        </figure>
                    </NuxtLink>
                    <NuxtLink to="/preview/template-two">
                        <figure class="border-8 border-zinc-800 rounded-xl shadow-xl overflow-hidden group relative">
                            <img src="/preview-two.png" class="w-full object-cover h-full group-hover:scale-110 cursor-pointer transition duration-700 ease-in-out group-hover:grayscale" />
                        </figure>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- Google Font Collection -->
        <section class="h-full">
            <div class="max-w-6xl mx-auto md:py-20 py-6 px-6 md:px-0">
                <h2 class="text-3xl font-bold mb-5 md:mb-10">Google font collections</h2>
                <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
                    <div class="w-full">
                        <UCarousel 
                            v-slot="{ item }" 
                            :items="items" 
                            :ui="{ item: 'basis-full' }" 
                            class="rounded-lg overflow-hidden" 
                            arrows
                        >
                            <div 
                                class="card md:h-[50vh] h-[30vh] w-full flex items-center justify-center bg-pattern" 
                                :class="item.style"
                            >
                                <h2 class="text-xl font-bold">{{ item.name }}</h2>
                            </div>
                        </UCarousel>
                        <div class="flex justify-between items-center text-sm mt-4">
                            <div class="flex items-center gap-2">
                                <img src="/influencer/uiadrian.jpeg" alt="uiadrian" class="rounded-full w-10 h-10 border-2 border-yellow-100 shadow-lg">
                                <div>
                                    <h4>Adrian Kuleszo</h4>
                                    <a class="text-xs text-zinc-400 hover:text-yellow-500" target="_blank" href="https://www.instagram.com/uiadrian">@uiadrian</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full">
                        <UCarousel 
                            v-slot="{ item }" 
                            :items="uxrobin" 
                            :ui="{ item: 'basis-full' }" 
                            class="rounded-lg overflow-hidden" 
                            arrows
                        >
                            <div 
                                class="card md:h-[50vh] h-[30vh] w-full flex items-center justify-center bg-pattern" 
                                :class="item.style"
                            >
                                <h2 class="text-xl font-bold">{{ item.name }}</h2>
                            </div>
                        </UCarousel>
                        <div class="flex justify-between items-center text-sm mt-4">
                            <div class="flex items-center gap-2">
                                <img src="/influencer/uxrobin.png" alt="uiadrian" class="rounded-full w-10 h-10 border-2 border-yellow-100 shadow-lg">
                                <div>
                                    <h4>Robin van Zessen</h4>
                                    <a class="text-xs text-zinc-400 hover:text-yellow-500" target="_blank" href="https://www.instagram.com/ux.robin">@ux.robin</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer class='p-4 bg-transparent rounded-lg shadow flex md:items-center md:justify-between md:p-6 w-full border-t-4 border-zinc-700'>
            <span class='text-sm text-zinc-500 sm:text-center dark:text-zinc-400 hidden md:block'>© 2024 JustGoogleFont</span>
            <div class='flex flex-wrap gap-2 items-center justify-center text-xs text-zinc-500 dark:text-zinc-400'>
                Inked By : 
                <img src="/images/vimal.png" alt="VimalBharti" class="rounded-full w-7 grayscale h-7">
                <a href="https://twitter.com/vimal_bharti" target="_blank" class="underline hover:text-green-300">Vimal Bharti</a>
            </div>
        </footer>
    </div>
  </template>
  
  <script setup>
    const font = ref('font-exo')

    const items = [{
        name: 'Ubranist',
        style: 'bg-zinc-300 text-zinc-900',
    }, {
        name: 'DM Sans',
        style: 'bg-orange-500 text-zinc-900',
    }, {
        name: 'Manrope',
        style: 'bg-zinc-300 text-zinc-900',
    }, {
        name: 'Outfit',
        style: 'bg-zinc-800 text-zinc-100',
    }, {
        name: 'Public Sans',
        style: 'bg-blue-500 text-white',
    }, {
        name: 'Inter',
        style: 'bg-purple-600 text-white',
    }, {
        name: 'Sora',
        style: 'bg-orange-500 text-zinc-900',
    }, {
        name: 'Cabin Grotesk',
        style: 'bg-zinc-800 text-white',
    }]
    const uxrobin = [
        { name: 'Playfair Display', style: 'bg-orange-500 text-zinc-900'}, 
        { name: 'Roboto', style: 'bg-zinc-300 text-zinc-900'}, 
        { name: 'Arvo Regular', style: 'bg-blue-500 text-white'}, 
        { name: 'PT Sans', style: 'bg-zinc-800 text-zinc-100'}, 
        { name: 'Oswald Medium', style: 'bg-orange-500 text-zinc-900'},
        { name: 'Cinzel Bold',style: 'bg-purple-600 text-white'},
    ]
  </script>
  
  <style scoped>
  .bg-pattern{
    background-color: 'transparent';
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23e3e3e3' fill-opacity='0.1'%3E%3Cpath opacity='.3' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  .bg-lines{
    background-color: transparent;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%23989898' fill-opacity='0.1'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  </style>