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
      twitter_handle: "AdamSandler",
      personal_blog: "",
      online_resume_url: "",
      github_url: "",
      photo: "https://st.depositphotos.com/1694341/1303/i/950/depositphotos_13037321-stock-photo-adam-sandler.jpg",
    };
  },
  $nextTick: function () {
    this.twitter_handle.widgets.load();
  },
  methods: {},
};
</script>

<template>
  <div class="home">
    <h1>{{ student.first_name }} {{ student.last_name }}</h1>
    <div class="card" style="width: 18rem">
      <img v-bind:src="student.photo" class="card-img-top" alt="" />
      <div class="card-body">
        <p>linkedin and github links will go here</p>
      </div>
    </div>
    <p>
      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseWidthExample"
        aria-expanded="false"
        aria-controls="collapseWidthExample"
      >
        Toggle Contact Information
      </button>
    </p>
    <div style="min-height: 120px">
      <div class="collapse collapse-horizontal" id="collapseWidthExample">
        <div class="card card-body" style="width: 300px">
          Email: {{ student.email }} Phone Number: {{ student.phone_number }}
        </div>
      </div>
    </div>
    <!-- <a class="twitter-timeline" href="https://twitter.com/AdamSandler?ref_src=twsrc%5Etfw">Tweets by AdamSandler</a> -->
    <div class="card-body">
      <a data-height="500px" href="https://twitter.com/AdamSandler?ref_src=twsrc%5Etfw" class="twitter-timeline">
        Adam Sandlers Twitter
      </a>
    </div>
  </div>
</template>

<style></style>

<!-- 
  Student.create(first_name:"Adam" last_name:"Heckathorn" email:"ajheckathorn01@gmail.com" phone_number:"479-305-9290" short_bio:"text" LinkedIn_URL:"https://www.linkedin.com/in/adam-heckathorn-202072210/" twitter_handle: personal_blog: online_resume_url: github_url: photo:) 
  -->

<!-- <a class="twitter-timeline" href="https://twitter.com/AdamSandler?ref_src=twsrc%5Etfw">Tweets by AdamSandler</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> -->
