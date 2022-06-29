<script>
export default {
  data: function () {
    return {
      student: {},
    };
  },
  created: function () {
    this.student = {
      first_name: "Adam",
      last_name: "Sandler",
      email: "adam.sandler@gmail.com",
      phone_number: "479-305-9290",
      short_bio: "I was in Big Daddy",
      LinkedIn_URL: "https://www.linkedin.com/in/adam-heckathorn-202072210/",
      twitter_handle: "@AdamSandler",
      personal_blog: "",
      online_resume_url: "",
      github_url: "",
      photo: "https://st.depositphotos.com/1694341/1303/i/950/depositphotos_13037321-stock-photo-adam-sandler.jpg",
    };
  },
  methods: {},
};
</script>

<template>
  <div class="home">
    <h1>{{ student }}</h1>
  </div>
</template>

<style></style>

<!-- 
  Student.create(first_name:"Adam" last_name:"Heckathorn" email:"ajheckathorn01@gmail.com" phone_number:"479-305-9290" short_bio:"text" LinkedIn_URL:"https://www.linkedin.com/in/adam-heckathorn-202072210/" twitter_handle: personal_blog: online_resume_url: github_url: photo:) 
  -->
