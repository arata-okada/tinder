<template>
  <div class="home">
    <div>
      <input type="text" placeholder="name" v-model="name" />
    </div>
    <div>
      <input type="text" placeholder="age" v-model="age" />
    </div>
    <button @click="add">送信</button>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  data() {
    return {
      name: "",
      age: ""
    };
  },
  methods: {
    add() {
      var db = firebase.firestore();
      db.collection("users")
        .add({
          name: this.name,
          age: this.age
        })
        .then(doc => {
          console.log(doc);
        });
    }
  }
};
</script>