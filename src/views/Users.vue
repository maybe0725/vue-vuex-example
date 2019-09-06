<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs6 pr-5>
        <AllUsers />
      </v-flex>
      <v-flex xs6>
        <SignUp />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
/***********************************************
'@' src Directory 즉 root 를 의미한다. 

views : 각 컴퍼넌트의 layout 을 잡아주는 역할 
components : 실제 기능구현
***********************************************/
import AllUsers from "@/components/Users/AllUsers";
import SignUp from "@/components/Users/SignUp";

export default {
  components: {
    AllUsers,
    SignUp
  }
};
</script>