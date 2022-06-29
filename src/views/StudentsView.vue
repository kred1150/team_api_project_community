<script>
export default {
  data: function () {
    return {
      students: [],
      current_student: {},
    };
  },
  created: function () {
    this.students = [
      {
        id: 1,
        first_name: "Adam",
        last_name: "Sandler",
        photo: "https://st.depositphotos.com/1694341/1303/i/950/depositphotos_13037321-stock-photo-adam-sandler.jpg",
        short_bio: "I was in Big Daddy",
      },
      {
        id: 2,
        first_name: "Adam",
        last_name: "Driver",
        photo: "https://www.pajiba.com/assets_c/2019/12/Adam-Driver-1191616931-thumb-700x466-220140.jpg",
        short_bio: "Im Kylo Ren",
      },
      {
        id: 3,
        first_name: "Adam",
        last_name: "Scott",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT30m9AFELU3oy6YOQyO2GiAnp-5tY7LhOrlA&usqp=CAU",
        short_bio: "I married Leslie Knope",
      },
    ];
  },
  methods: {
    showMoreInfo: function (student) {
      this.current_student = student;
      console.log("http://localhost:8080/students/" + this.current_student["id"]);
      this.$router.push("/students/" + this.current_student.id);
    },
  },
};
</script>

<template>
  <div v-for="student in students" v-bind:key="student.id" class="card mb-3" style="max-width: 540px">
    <div class="row g-0">
      <div class="col-md-4">
        <img v-bind:src="student.photo" class="img-fluid rounded-start" alt="" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ student.first_name }} {{ student.last_name }}</h5>
          <p class="card-text">Bio: {{ student.short_bio }}</p>
          <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
        </div>
        <button v-on:click="showMoreInfo(student)" type="button" class="btn btn-primary btn-md">
          See More Info on {{ student.first_name }}
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.row {
  align: center;
  margin-bottom: 3rem;
  border: red, 3px;
}
button {
  align: right;
}
</style>

<!-- 
  Student.create(first_name:"Adam" last_name:"Heckathorn" email:"ajheckathorn01@gmail.com" phone_number:"479-305-9290" short_bio:"text" LinkedIn_URL:"https://www.linkedin.com/in/adam-heckathorn-202072210/" twitter_handle: personal_blog: online_resume_url: github_url: photo:) 
  -->
