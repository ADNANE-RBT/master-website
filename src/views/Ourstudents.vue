<template>
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div class="max-w-2xl">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Students</h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">Meet our exceptional students, the driving force behind our academic community. With their unwavering dedication and passion for learning, they are at the forefront of innovation and excellence. Our diverse student body represents a wealth of backgrounds and experiences, creating a dynamic and enriching environment for collaborative learning.</p>
        </div>
        <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols- md:grid-cols-3 2xl:grid-cols-4 sm:gap-y-16 xl:col-span-2">
          <li v-for="student in people" :key="student.name">
            <div class="flex items-center gap-x-6">
              <img class="h-16 w-16 rounded-full" :src="student.imageUrl" alt="" />
              <div>
                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">{{ student.name }}</h3>
                <p class="text-sm font-semibold leading-6 text-indigo-600">{{ student.role }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
const people = [
  {
    name: 'Riyadi Adnane',
    role: 'Student',
    imageUrl: '/students/Riyadi_Adnane.png',
  },
  {
    name: 'Daghmoumi Marwan',
    role: 'Student',
    imageUrl: '/students/Daghmoumi_Marwan.png',
  },
  {
    name: 'Abdelali IBN TABET',
    role: 'Student',
    imageUrl: '/students/IBN TABET_ABDELALI.png',
  },
  {
    name: 'Ahmed Samady',
    role: 'Student',
    imageUrl: '/students/Samady_Ahmed.png',
  },
  {
    name: 'Aicha Kharbach',
    role: 'Student',
    imageUrl: '/students/Kharbach_Aicha.png',
  },
  {
    name: 'Aymen Boufarhi',
    role: 'Student',
    imageUrl: '/students/Boufarhi_Ayman.png',
  },
  {
    name: 'Ismail Drief',
    role: 'Student',
    imageUrl: '/students/DRIEF_ISMAIL.png',
  },
  {
    name: 'Loubna El Ghazi',
    role: 'Student',
    imageUrl: '/students/EL_GHAZI_Loubna.png',
  },
  {
    name: 'Mohamed Amine Sabbahi',
    role: 'Student',
    imageUrl: '/students/SABBAHI_Mohamed_Amine.png',
  },
  {
    name: 'Yasmina Hachhouch',
    role: 'Student',
    imageUrl: '/students/hachhouch_yasmina.png',
  },
  {
    name: 'AACHABI mohammed',
    role: 'Student',
    imageUrl: '/students/AACHABI_mohammed.png',
  },
  {
    name: 'El Meziane Chaima',
    role: 'Student',
    imageUrl: '/students/El_Meziane_Chaima.png',
  },
  {
    name: 'fakher-eddine mohamed amine',
    role: 'Student',
    imageUrl: '/students/fakher-eddine_mohamed_amine.png',
  },
  {
    name: 'Imasbahen khaoula',
    role: 'Student',
    imageUrl: '/students/Imasbahen_khaoula.png',
  },
  {
    name: 'Liefrid Chihab-Eddine',
    role: 'Student',
    imageUrl: '/students/Liefrid_Chihab-Eddine.png',
  },
  {
    name: 'Omar Nouih',
    role: 'Student',
    imageUrl: '/students/NOUIH_Omar.png',
  },
  {
    name: 'Hanane Zaoui',
    role: 'Student',
    imageUrl: '/students/ZAOUI_Hanane.png',
  },
  {
    name: 'Yasmine Zerbet',
    role: 'Student',
    imageUrl: '/students/ZERBET_Yasmine.png',
  },
  {
    name: 'Abdelmajid Benjelloun',
    role: 'Student',
    imageUrl: '/students/Abdelmajid_benjelloun.png',
  },
  {
    name: 'Aymane Mahri',
    role: 'Student',
    imageUrl: '/students/Mahri_Aymane.png',
  },
  {
    name: 'Mohamed Mohidine',
    role: 'Student',
    imageUrl: '/students/Mohidine_mohamed.png',
  },
  {
    name: 'Salma Nidar',
    role: 'Student',
    imageUrl: '/students/nidar_salma.png',
  },
  {
    name: 'Nouhaila Bezzar',
    role: 'Student',
    imageUrl: '/students/Nouhaila_BEZZAR.png',
  },
  {
    name: 'ARICHI_Fatima zahra',
    role: 'Student',
    imageUrl: '/students/ARICHI_Fatima zahra.png'
  },
  {
    name: 'Aymen_AitAhmed',
    role: 'Student',
    imageUrl: '/students/Aymen_AitAhmed.png'
  },
  {
    name: 'BAKKALI_AYOUB',
    role: 'Student',
    imageUrl: '/students/BAKKALI_AYOUB.png'
  },
  {
    name: 'chibani_fahd',
    role: 'Student',
    imageUrl: '/students/chibani_fahd.png'
  },
  {
    name: 'Elaoufi_Imane',
    role: 'Student',
    imageUrl: '/students/Elaoufi_Imane.png'
  },
  {
    name: 'Essetti_Widad',
    role: 'Student',
    imageUrl: '/students/Essetti_Widad.png'
  },
  {
    name: 'Hanae_Elmrabet',
    role: 'Student',
    imageUrl: '/students/Hanae_Elmrabet.png'
  },
  {
    name: 'Idrissi_hamza',
    role: 'Student',
    imageUrl: '/students/Idrissi_hamza.png'
  },
  {
    name: 'Idriss_khattabi',
    role: 'Student',
    imageUrl: '/students/Idriss_khattabi.png'
  },
  {
    name: 'KRIMEL_NOUHAILA',
    role: 'Student',
    imageUrl: '/students/KRIMEL_NOUHAILA.png'
  },
  {
    name: 'ZAOUI_Hanane',
    role: 'Student',
    imageUrl: '/students/ZAOUI_Hanane.png'
  }
];

  </script>