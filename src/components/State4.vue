<template>
<div>
  <div class="container">

    <div class="card">
      <div class="card-header">
        Personal information
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6 col-sm-7 col-xs-8">
            <div class="card" style="width: 18rem;">
              <img class="card-img-top rounded border border-secondary shadow p-3 mb-5 bg-white rounded" src="../../public/ext/img/icon.jpg" alt="Card image cap">
              <div class="card-body">
                <p class="card-text">Personal bio or similar content.</p>
              </div>
            </div>        
            <!-- <img src="../../public/ext/img/icon.jpg" alt="..." class="rounded border border-secondary shadow p-3 mb-5 bg-white rounded"> -->
          </div>
          <div class="col-md-6 col-sm-5 col-xs-4">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Sex</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                
                    <td>{{person.name}}</td>
                    <td>{{person.email}}</td>
                    <td>{{person.phone}}</td>
                    <td>{{selectedSex}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">FileName</th>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{chosenVideo.id}}</td>
                    <td>{{chosenVideo.fileName}}</td>
                    <td>{{chosenVideo.date}}</td>
                    <td>{{chosenVideo.time}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-5">
          </div> <!-- End of column -->
          <div class="col-1">
            <button type="button" class="btn btn-primary margin-top-10" @click="next">Submit</button>
          </div> <!-- End of column -->
        </div> <!-- End of row -->
      </div>
    </div>


  </div>

</div>
</template>

<script>
import { bus } from "../main";

export default {
  name: "State4",
  // props: ["person", "chosenVideo", "selectedSex"],
  data() {
    return {
      /* 
        We can access our parent data values using this.$parent. Using global scope variables similar to Angulars rootScope method
        should we avoided, but for a small test application like this, the solution should be ok. 
      */
      chosenVideo: this.$parent.chosenVideo, // null
      selectedSex: this.$parent.selectedSex, // null
      person: this.$parent.person // null
    };
  },

  created() {},

  methods: {
    next: function() {
      alert("Done");
    }
  }
};
</script>
