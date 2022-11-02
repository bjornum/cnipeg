<template>
  <div>
    <v-container>

      
      <v-row>
        <v-col cols="6" v-for="(points, pointsIndex) in myData" :key="pointsIndex">
          <v-card>

            <p class="title">{{points.title}}</p>

            <v-textarea v-model="points.textArea" ref="email"></v-textarea>


            <p>{{points.textArea}}</p>
            <pre>{{points.content}}</pre>

            <v-row>
              <v-col cols="12" v-for="(epicContent, epicContentIndex) in points.content" :key="epicContentIndex">
                <p>{{epicContent}}</p>
                <v-btn @click="removeEpicEntry(pointsIndex, epicContentIndex)">X</v-btn>
              </v-col>
            </v-row>
            <v-btn @click="submitThis(points.textArea, pointsIndex)">Submit This</v-btn>
          </v-card>
        </v-col>
      </v-row>
      
    </v-container>
  </div>
</template>

<script>
export default {
  data(){
    return {
      myData: [
        {title: "Strenghts", id: 1, textArea: "", content: []},
        {title: "Weakness", id: 2, textArea: "", content: []},
        {title: "Resources", id: 3, textArea: "", content: []},
        {title: "Drains", id: 4, textArea: "", content: []},
      ]
    }
  },
  methods: {
    // Adds the entry then clean the field
    submitThis(messageSubmited, fromWhichIndex){
      if(messageSubmited){

        const test = {contentMessage: messageSubmited};
        this.myData[fromWhichIndex].content.push(test)
        this.myData[fromWhichIndex].textArea = "";
      } else {
        console.log("no")
      }

    },

    // Removes the Entry
    removeEpicEntry(fromWhichIndex, contentIndex){
      // this.myData[fromWhichIndex].content.splice(this.myData[fromWhichIndex].content.indexOf(contentIndex));
      this.myData[fromWhichIndex].content.splice(contentIndex, 1);

      // const removed = myFish.splice(3, 1);


      // const filtersList = this.myData[fromWhichIndex].content.filter(element => element !== contentIndex)
      // this.myData[fromWhichIndex].content=filtersList

    },
  }
}
</script>