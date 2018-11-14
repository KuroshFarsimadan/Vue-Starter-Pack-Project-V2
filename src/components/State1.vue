<template>
<div>
  <!-- template for the modal component -->
  <div class="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="videoModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="videoModalLabel">Forgetting something?</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Please choose one of the available videos from the table by selecting a row using radio button.
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="form-holder">
          <!-- Create a component for table with sorting possibility, automatic th header generation and looping of data -->
          <div class="table-responsive">
            <table class="table table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Filename</th>
                  <th scope="col">Selection</th>
                </tr>
              </thead>
              <tbody v-for="item in videoTable" :key="item.id">
                <tr>
                  <td>{{item.date}}</td>
                  <td>{{item.time}}</td>
                  <td>{{item.fileName}}</td>
                  <th>
                    <div class="form-check-inline">
                      <label class="form-check-label">
                        <input type="radio" v-model="radioValue" v-bind:value="item" class="form-check-input" name="optradio">
                      </label>
                    </div>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>   
      </div> <!-- End of column -->
    </div> <!-- End of row -->

    <div class="row">
      <div class="col-5">
      </div> <!-- End of column -->
      <div class="col-1">
        <button type="button" class="btn btn-primary" @click="next">Next</button>
      </div> <!-- End of column -->
    </div> <!-- End of row -->
  </div>
</div>
</template>

<script>
import { bus } from "../main";

export default {
  name: "State1",
  data() {
    return {
      radioValue: null,
      showModal: false,

      // Different ways to return a time and date. I prefer a functional programming approach unlike below, where
      // we initialize array of JSON data datetime utc zulu into readable format.
      videoTable: [
        {
          id: 1,
          date:
            new Date().getDate() +
            "." +
            (new Date().getMonth() + 1) +
            "." +
            new Date().getFullYear(),
          time:
            new Date().getHours() +
            ":" +
            new Date().getMinutes() +
            ":" +
            new Date().getSeconds(),
          fileName: "CV.pdf"
        },
        {
          id: 2,
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
          fileName: "CoverLetter.docx"
        },
        {
          id: 3,
          date: new Date().toLocaleString("en-US"),
          time: new Date().toISOString(),
          fileName: "What do we say to spaghetti code? Not today."
        },
        {
          id: 4,
          date: new Date().toLocaleString("en-US"),
          time:
            new Date().getTime() +
            " (this needs to be formatted inside a function)",
          fileName: "What_is_love.mp3"
        }
      ]
    };
  },

  methods: {
    // Emit the state to parent component
    next() {
      if (this.radioValue) {
        bus.$emit("next", "State2");
        bus.$emit("chosenVideo", this.radioValue);
        this.$router.push("/State2");
      } else {
        $("#videoModal").modal("show");
      }
    }
  }
};
</script>