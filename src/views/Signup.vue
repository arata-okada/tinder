<template>
  <div class="signup">
    <div class="card">
      <p class="title">新規登録</p>
      <div class="form">
        <input v-model="name" type="text" placeholder="ユーザネーム" />
        <input v-model="email" type="email" placeholder="メールアドレス" />
        <input v-model="password" type="password" placeholder="パスワード" />
        <button @click="signup">登録</button>
        <p class="login">
          ログインの<a class="router" @click="$router.push('/signin')"
            >こちら</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../main";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    signup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          data.user.updateProfile({
            displayName: this.name,
          });
        });
    },
  },
};
</script>

<style scoped>
.card {
  margin: 100px auto;
  background: rgb(255, 255, 255);
  border-radius: 5px;
  padding: 20px;
  width: 300px;
}
.title {
  font-size: 20px;
  color: black;
  font-weight: bold;
  text-align: center;
}
.form {
  text-align: center;
}
input {
  margin-top: 15px;
  width: 80%;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid black;
  color: black;
}
button {
  width: 100px;
  text-align: center;
  padding: 8px 0 10px;
  color: #fff;
  background-color: #5419da;
  border-radius: 25px;
  cursor: pointer;
  margin: 15px;
}
.login {
  color: black;
}
.router {
  color: #1800ee;
  text-decoration: underline;
}
</style>
