<template>
  
  <section class="w-full ">
    <div class="relative bg-hero-img bg-fixed bg-right md:bg-no-repeat md:bg-cover md:w-full md:h-screen flex flex-col justify-start items-start pt-12 md:pt-24 2xl:pt-44  ">
     <div class="w-1/3 md:mb-5 md:pl-20">

       <h1 class="text-white text-xl font-medium leading-6 ">IDEAS MADE TO MATTER</h1>

     </div>
     <div class="sm:w-2/3 md:w-2/3 mb-5 sm:mb-10 text-start  md:pl-20 ">
      <h1 class="xl:text-5xl md:text-4xl text-2xl font-semibold leading-10 text-start text-white sm:mb-0 mb-12">
        Empowering <span class=" text-main font-bold xl:text-6xl md:text-5xl text-3xl">Minds</span>, Transforming <span class=" text-main font-bold xl:text-6xl md:text-5xl text-3xl">Data</span>,<br class="md:block hidden" />
        Building a Hub of Excellence<br class="md:block hidden" />
        in <span class=" text-main font-bold xl:text-6xl md:text-5xl text-3xl">AI </span> and <span class=" text-main font-bold xl:text-6xl md:text-5xl text-3xl">Data Science</span> <br class="md:block hidden" />
        Education <br class="md:block hidden" />
            
        </h1>
      </div>
          <div class="flex justify-center items-center mb-10 sm:mb-20 md:pl-20">
            <button class=" font-poppins  bg-main transition duration-150 ease-in-out  rounded  text-white px-4 sm:px-8 py-1 sm:py-3 text-sm">Contact us</button>
          </div>
      </div>

      <!-- the stats -->
      <div class="container mx-auto flex justify-center  -mt-20 sm:-mt-30 md:-mt-30 ">
          <div class="relative sm:w-3/4 md:w-2/3 w-11/12">
            <div class="  bg-main rounded-md py-5 px-7 flex justify-around flex-wrap md:flex-nowrap text-white ">
              <div class=" text-center ">
                <p class=" text-4xl font-semibold leading-6 text-uppercase"> <span>#</span> 34 </p>
                <p class=" text-sm font-normal leading-7 tracking-tighter">hey hello there </p>

              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="2" height="50" viewBox="0 0 39 2909" fill="none">
  <path d="M1 19.4999V2889.5C1 2899.72 9.28273 2908 19.5 2908C29.7173 2908 38 2899.72 38 2889.5V19.5C38 9.28273 29.7173 1 19.5 1C9.28273 1 1 9.28267 1 19.4999Z" fill="white" stroke="white"/>
               </svg>
               <div class=" text-center ">
                <p class=" text-4xl font-semibold leading-6 text-uppercase"> <span>#</span> 34 </p>
                <p class=" text-sm font-normal leading-7 tracking-tighter">hey hello there </p>

              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="2" height="50" viewBox="0 0 39 2909" fill="none">
  <path d="M1 19.4999V2889.5C1 2899.72 9.28273 2908 19.5 2908C29.7173 2908 38 2899.72 38 2889.5V19.5C38 9.28273 29.7173 1 19.5 1C9.28273 1 1 9.28267 1 19.4999Z" fill="white" stroke="white"/>
               </svg>
               <div class=" text-center ">
                <p class=" text-4xl font-semibold leading-6 text-uppercase"> <span>#</span> 34 </p>
                <p class=" text-sm font-normal leading-7 tracking-tighter">hey hello there </p>

              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="2" height="50" viewBox="0 0 39 2909" fill="none">
  <path d="M1 19.4999V2889.5C1 2899.72 9.28273 2908 19.5 2908C29.7173 2908 38 2899.72 38 2889.5V19.5C38 9.28273 29.7173 1 19.5 1C9.28273 1 1 9.28267 1 19.4999Z" fill="white" stroke="white"/>
               </svg>
               <div class=" text-center ">
                <p class=" text-4xl font-semibold leading-6 text-uppercase"> <span>#</span> 34 </p>
                <p class=" text-sm font-normal leading-7 tracking-tighter">hey hello there </p>

              </div>
             
            </div>
          </div>
      </div>
    </section>


</template>

<script>
export default {
  name: "CentreAlignedWithImage",
  methods: {
      // Function to toggle header menu in mobile view.
      toggleMenu(flag) {
          let value = document.getElementById("menu");
          if (flag) {
              value.classList.remove("hidden");
          } else {
              value.classList.add("hidden");
          }
      },
  },
};
</script>
