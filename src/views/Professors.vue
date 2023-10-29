<template>
    <div class="pb-16">
        <div class="container flex justify-center mx-auto md:pt-28 ">
            <div>
                <p class="text-gray-500 text-lg text-center font-normal pb-3">OUR PROFESSORS</p>
                <h1 class="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented People Behind this Program Courses</h1>
            </div>
        </div>
        <div v-for="index in 3" :key="index">
            <div class=" w-full rounded-l-lg bg-main py-2 sm:text-center md:text-left px-4 ">
            <p class="text-center text-white text-2xl font-semibold pt-3 pb-3"> Semester {{ index }} :</p>
        </div>
        <div class="w-full bg-gray-100 px-10 pt-10">
            <div class="container mx-auto">
                <div class="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                    <div  
                    v-for="index in 6"
                    :key="index"
                     class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                        <div class="h-300 rounded overflow-hidden shadow-md bg-white">
                            <div class="absolute -mt-20 w-full flex justify-center">
                                <div class="h-32 w-32">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" class="rounded-full object-cover h-full w-full shadow-md" fill="none">
<path opacity="0.4" d="M30.667 32.6172C30.492 32.5922 30.267 32.5922 30.067 32.6172C25.667 32.4672 22.167 28.8672 22.167 24.4422C22.167 19.9172 25.817 16.2422 30.367 16.2422C34.892 16.2422 38.567 19.9172 38.567 24.4422C38.542 28.8672 35.067 32.4672 30.667 32.6172Z" stroke="#292D32" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.34" d="M47.2147 49.1174C42.7647 53.1924 36.8647 55.6674 30.3647 55.6674C23.8646 55.6674 17.9646 53.1924 13.5146 49.1174C13.7646 46.7674 15.2646 44.4674 17.9396 42.6674C24.7896 38.1174 35.9897 38.1174 42.7897 42.6674C45.4647 44.4674 46.9647 46.7674 47.2147 49.1174Z" stroke="#292D32" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
<!-- <path d="M30.3652 55.667C44.1722 55.667 55.3652 44.474 55.3652 30.667C55.3652 16.8599 44.1722 5.66699 30.3652 5.66699C16.5581 5.66699 5.36523 16.8599 5.36523 30.667C5.36523 44.474 16.5581 55.667 30.3652 55.667Z" stroke="#292D32" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/> -->
</svg>
                                    <!-- <img src="@/assets/pdirector.jpeg" alt="" class="rounded-full object-cover h-full w-full shadow-md" /> -->
                                </div>
                            </div>
                            <div class="px-6 mt-16">
                                <div class="font-bold text-3xl text-center pb-1">Mostafa Ezziyyani</div>
                                <p class="text-gray-800 text-sm text-center">Program Director</p>
                               <div class="w-full flex justify-center pt-5 pb-5">
                                     <!--<a href="#" class="mx-5">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                            </svg>
                                        </div>
                                    </a>
                                    <a href="javascript:void(0)" class="mx-5">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter">
                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                            </svg>
                                        </div>
                                    </a>
                                    <a href="javascript:void(0)" class="mx-5">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram">
                                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                            </svg>
                                        </div>
                                    </a> -->
                                </div>
                            </div>
                        </div>
                    </div>
                

                </div>
            </div>
        </div> 
        </div>
       
    </div>
</template>

<script>
const Professors = [
  {
    name : "ziyani",

  }
  ]
</script>
