<template>
  <div>
    <h3>掲示板に投稿する</h3>
    <label for="name">ニックネーム: </label>
    <input type="text" id="name" v-model="name" />
    <br />
    <br />
    <label for="comment">コメント: </label>
    <textarea id="comment" cols="30" rows="10" v-model="comment"></textarea>
    <br />
    <br />
    <button @click="createcomment">コメントをサーバに送る</button>
    <h2>掲示板</h2>
    <div v-for="post in posts" :key="post.name">
      <div>名前: {{ post.fields.name.stringValue }}</div>
      <div>コメント: {{ post.fields.comment.stringValue }}</div>
      <br />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      comment: "",
      posts: []
    };
  },
  computed: {
    idToken() {
      return this.$store.getters.idToken;
    }
  },
  created() {
    axios
      .get("/comments", {
        headers: {
          Authorization: `Bearer ${this.idToken}`
        }
      })
      .then(response => {
        this.posts = response.data.documents;
        console.log(response);
      });
  },
  methods: {
    createcomment() {
      axios.post(
        "/comments",
        {
          fields: {
            name: {
              stringvalue: this.name
            },
            comment: {
              stringvalue: this.comment
            }
          }
        },
        {
          headers: {
            Authorization: `Bearer ${this.idToken}`
          }
        }
      );
      this.name = "";
      this.comment = "";
    }
  }
};
</script>
