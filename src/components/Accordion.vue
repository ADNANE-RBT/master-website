<template>
    <div
    @mouseleave="closeAccordion">
      <button
      @mouseover="openAccordion"
      
        class="flex items-center justify-between w-full px-4 py-4 rounded-xl bg-main text-white "
        :aria-expanded="isOpen"
        :aria-controls="accordionId" 
      >
        <slot name="title" />
        <svg
          class="w-3 transition-all duration-200 transform"
          :class="{
            'rotate-180': isOpen,
            'rotate-0': !isOpen,
          }"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 10"
          aria-hidden="true"
        >
          <path
            d="M15 1.2l-7 7-7-7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
  
      <div v-show="isOpen" :id="accordionId" class="pt-6 pb-4 ">
        <slot name="content" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false,
        accordionId: `accordion-${Math.random().toString(36).substr(2, 9)}`, // Generate a unique identifier
      };
    },
  
    methods: {
        openAccordion() {
      this.isOpen = true;
    },

    closeAccordion() {
      this.isOpen = false;
    },
    },
  };
  </script>
  