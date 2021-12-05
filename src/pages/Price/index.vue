<template>
  <div>
    <span>Select Range</span>
    <v-date-picker
      v-model="range"
      mode="date"
      :masks="masks"
      is-range
    >
      <template v-slot="{ inputValue, inputEvents }">
        <div style="display: flex">
          <div style="display: flex; align-items: center">
            <svg
              style="height: 20px; width: 20px"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="#000000"
            >
              <path
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            <input
              :value="inputValue.start"
              v-on="inputEvents.start"
            />
          </div>
          <span>
            <svg
              style="height: 20px; width: 20px; margin: 0 20px"
              viewBox="0 0 24 24"
              stroke="#000000"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
          <div style="display: flex; align-items: center">
            <svg
              style="height: 20px; width: 20px"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="#000000"
            >
              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <input
              :value="inputValue.end"
              v-on="inputEvents.end"
            />
          </div>
        </div>
      </template>
    </v-date-picker>
  </div>
  <div>
    Min Price - {{minPrice}}
  </div>
  <div>
    Max Price - {{maxPrice}}
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss">@import "style"</style>