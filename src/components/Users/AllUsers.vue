<template>
  <div>
    <!--<h1>All Users({{ $store.getters.allUsersCount }})</h1>-->
    <!--<h1>All Users({{ allUsersCount }})</h1>-->
    <h1>All Users({{ count }})</h1>
    <!--<h3>Seoul Users({{ $store.getters.countOfSeoul }})({{ $store.getters.percentOfSeoul }} %)</h3>-->
    <!--<h3>Seoul Users({{ countOfSeoul }})({{ percentOfSeoul }} %)</h3>-->
    <h3>Seoul Users({{ seouls }})({{ percent }} %)</h3>
    <v-list two-line>
      <!--<v-list-item v-for="(user, index) in $store.state.allUsers" :key="index">-->
      <v-list-item v-for="(user, index) in allUsers" :key="index">
        <v-list-item-avatar small color="grey lighten-3">
          <v-img :src="user.src" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-html="user.name"></v-list-item-title>
          <v-list-item-subtitle>id:#{{index}} / {{user.address}} 거주</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { EventBus } from "@/main.js";
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      /* 'store.js' 파일의 'state' 항목으로 이동
      allUsers: [
        {
          userId: "hoza123",
          password: "123",
          name: "Hoza",
          address: "Seoul",
          src: "https://goo.gl/oqLfJR"
        },
        {
          userId: "max123",
          password: "456",
          name: "Max",
          address: "Berlin",
          src: "https://goo.gl/Ksk9B9"
        },
        {
          userId: "lego123",
          password: "789",
          name: "Lego",
          address: "Busan",
          src: "https://goo.gl/x7SpCD"
        }
      ]
      */
    };
  },
  computed: {
    // ...mapGetters(["allUsersCount", "countOfSeoul", "percentOfSeoul"])
    ...mapGetters({
      count: "allUsersCount",
      seouls: "countOfSeoul",
      percent: "percentOfSeoul"
    }),
    ...mapState(["allUsers"])
  },
  mounted() {
    EventBus.$on("signUp", users => {
      this.$store.state.allUsers.push(users);
    });
  }
};
</script>
