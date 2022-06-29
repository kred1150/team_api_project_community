<script>
export default {
  data: function () {
    return {
      students: [],
    };
  },
  created: function () {
    this.students = [
      {
        first_name: "Adam",
        last_name: "Sandler",
        photo: "https://st.depositphotos.com/1694341/1303/i/950/depositphotos_13037321-stock-photo-adam-sandler.jpg",
        short_bio: "I was in Big Daddy",
      },
      {
        first_name: "Adam",
        last_name: "Driver",
        photo: "https://www.pajiba.com/assets_c/2019/12/Adam-Driver-1191616931-thumb-700x466-220140.jpg",
        short_bio: "Im Kylo Ren",
      },
      {
        first_name: "Adam",
        last_name: "Scott",
        photo:
          "https://static.wikia.nocookie.net/sixfeetunder/images/9/91/Adam_Scott.jpeg/revision/latest/top-crop/width/360/height/360?cb=20201007101525",
        short_bio: "I married Leslie Knope",
      },
    ];
  },
  methods: {},
};
</script>

<template>
  <div class="home">
    <h1>{{ students }}</h1>
  </div>
</template>

<style></style>

<!-- 
  Student.create(first_name:"Adam" last_name:"Heckathorn" email:"ajheckathorn01@gmail.com" phone_number:"479-305-9290" short_bio:"text" LinkedIn_URL:"https://www.linkedin.com/in/adam-heckathorn-202072210/" twitter_handle: personal_blog: online_resume_url: github_url: photo:) 
  -->
