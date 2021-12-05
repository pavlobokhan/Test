import { mapGetters } from "vuex";

export default {
    data() {
      return {
        range: {
          start: new Date(2021, 11, 1),
          end: new Date(2021, 11, 31),
        },
        masks: {
          input: 'YYYY-MM-DD',
        }
      }
    },
    computed: {
        ...mapGetters(['price']),
        minPrice() {
            // todo
            return this.price[0].price
        },
        maxPrice() {
            // todo
            return this.price[0].price
        }
    }
}