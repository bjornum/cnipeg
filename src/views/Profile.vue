<template>
  <div class="homePageWidth">
    <v-row>
      <v-col cols="12" class="mt-8"></v-col>
      <v-col
        cols="12"
        v-for="(profile, profileIndex) in ProfileData"
        :key="profileIndex"
      >
        <v-row>
          <!-- Left: Profile, + Profile navigation -->
          <v-col cols="2">
            <v-row>
              <!-- Profile image, user and name -->
              <v-col cols="12" class="pt-5 sideBorder">
                <v-img
                  src="/img/logo.png"
                  max-width="90px"
                  class="imageStyling imagePositioning"
                ></v-img>
                <p class="text-center mt-5">{{ profile.UserName }}</p>
                <p class="text-center">{{ profile.FullName }}</p>
              </v-col>
              <!-- Menu -->
              <v-col cols="12" class="sideBorder">
                <v-list>
                  <v-list-item-group>
                    <v-list-item
                      v-for="(profmenu, profmenuIndex) in ProfileSideMenu"
                      :key="profmenuIndex"
                      :class="
                        profmenu.templateValue == ProfileView
                          ? 'activeButton'
                          : ''
                      "
                      @click="changeProfilePage(profmenu.templateValue)"
                    >
                      <v-list-item-icon>
                        <v-icon v-text="profmenu.icon"></v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title
                          v-text="profmenu.name"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-col>
              <!-- Extending the side border -->
              <v-col cols="12" class="sideBorder pb-15"></v-col>
            </v-row>
          </v-col>
          <!-- Templates based on Profile Navigation -->
          <v-col cols="9">
            <!-- Settings -->
            <template v-if="ProfileView == 0">
              <v-row>
                <!-- Profile image, stats, social medias -->
                <v-col cols="4" class="pt-10">
                  <v-img
                    src="/img/logo.png"
                    max-width="160px"
                    class="imageStyling imagePositioning"
                  ></v-img>
                  <v-card flat>
                    <p class="text-center pt-5">
                      <span>Change profile picture</span>
                      <span>
                        <v-icon>mdi-clipboard-outline</v-icon>
                      </span>
                    </p>
                    <v-divider
                      style="margin-left: 80px; margin-right: 80px"
                    ></v-divider>
                    <p class="text-center pt-5">Your points</p>
                    <p class="title text-center">
                      <span>
                        <v-icon large>mdi-star</v-icon>
                      </span>
                      <span style="padding-left: 10px">{{ TotalPoints }}</span>
                    </p>
                    <p class="text-center mb-0">
                      Likes: {{ profile.TotalLikes }}
                    </p>
                    <p class="text-center ma-0">
                      Comments: {{ profile.TotalComments }}
                    </p>
                    <p class="text-center ma-0">
                      Blog posts: {{ profile.TotalBlogPosts }}
                    </p>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        fab
                        small
                        v-for="(socialMedia, socialMediaIndex) in socialMedias"
                        :key="socialMediaIndex"
                        :href="socialMedia.link"
                        target="_blank"
                        class="socialMediaButtons"
                      >
                        <v-icon large>{{ socialMedia.icon }}</v-icon>
                      </v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-col>
                <!-- Form to change profile data + confirm data button -->
                <v-col cols="8" class="pt-10">
                  <p class="ma-0 pt-10 pl-2" style="font-size: 14px">
                    Name Surname
                  </p>
                  <v-text-field outlined></v-text-field>
                  <p class="ma-0 pl-2" style="font-size: 14px">Email</p>
                  <v-text-field outlined></v-text-field>
                  <v-row>
                    <v-col cols="6">
                      <p class="ma-0 pl-2" style="font-size: 14px">
                        Occupation
                      </p>
                      <v-text-field outlined></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <p class="ma-0 pl-2" style="font-size: 14px">Company</p>
                      <v-text-field outlined></v-text-field>
                    </v-col>
                  </v-row>
                  <p class="ma-0 pl-2" style="font-size: 14px">Bio</p>
                  <v-textarea outlined></v-textarea>
                </v-col>
              </v-row>
            </template>

            <!-- Blogs -->
            <template v-else-if="ProfileView == 1">
              <v-row>
                <!-- Title and description -->
                <v-col cols="12">
                  <p class="title text-center">Blogs</p>
                  <p class="text-center">
                    All the blogs you created, liked or following
                  </p>
                </v-col>
                <!-- Filter function -->
                <v-col cols="12"></v-col>
                <!-- Blog Cards -->
                <v-col
                  cols="6"
                  v-for="(blog, blogIndex) in ProfileBlogData"
                  :key="blogIndex"
                >
                  <v-card
                    style="background-color: #d8decb; border: 1px solid #2c5f2d"
                  >
                    <v-row>
                      <!-- Image, title, description and date -->
                      <v-col cols="12">
                        <v-row>
                          <v-col cols="3">
                            <v-img
                              :src="blog.image"
                              max-width="80px"
                              style="
                                border: 1px solid black;
                                border-radius: 10px;
                              "
                              class="ml-3 mt-3"
                            ></v-img>
                          </v-col>
                          <v-col cols="7">
                            <p
                              class="mt-3"
                              style="font-size: 16px; font-weight: bold"
                            >
                              {{ blog.name }}
                            </p>
                            <p
                              class="pt-0"
                              style="font-size: 14px; font-style: italic"
                            >
                              {{ blog.description }}
                            </p>
                          </v-col>
                          <v-col cols="2">
                            <p>{{ blog.created }}</p>
                          </v-col>
                        </v-row>
                      </v-col>
                      <!-- Author, verified, favorited and special button -->
                      <v-col cols="12">
                        <v-row>
                          <v-col cols="6">
                            <span>Shared by: {{ blog.author }}</span>
                            <v-icon>mdi-star</v-icon>
                            <span>{{ blog.totalFavorited }}</span>
                            <span v-if="blog.isVerified == true">
                              <v-icon>mdi-check-circle</v-icon>
                            </span>
                            <span v-else></span>
                          </v-col>
                          <v-col cols="3"></v-col>
                          <v-col cols="3">
                            <v-icon>mdi-check-circle</v-icon>
                            <v-btn>asd</v-btn>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                    <!-- <pre>{{blog}}</pre> -->
                  </v-card>
                </v-col>
              </v-row>
            </template>

            <!-- Webinars -->
            <template v-else-if="ProfileView == 2">
              <v-row>
                <!-- Title and Description -->
                <v-col cols="12">
                  <p class="title text-center">My webinar history</p>
                  <p class="text-center">Here are the webinars you created</p>
                </v-col>
                <!-- Filter and Search -->
                <v-col cols="12"></v-col>
                <!-- Webinar Cards -->
                <v-col
                  cols="6"
                  v-for="(webinar, webinarIndex) in ProfileWebinarData"
                  :key="webinarIndex"
                >
                  <v-card>
                    <pre>{{ webinar }}</pre>
                  </v-card>
                </v-col>
              </v-row>
            </template>

            <!-- Workrooms -->
            <template v-else-if="ProfileView == 3">
              <v-row>
                <!-- Title and Description -->
                <v-col cols="12">
                  <p class="title text-center">Workrooms</p>
                  <p class="text-center">Here are the webinars you created</p>
                </v-col>
                <!-- Filter and Search -->
                <v-col cols="12"></v-col>
                <!-- Workroom Cards -->
                <v-col
                  cols="6"
                  v-for="(workshop, workshopIndex) in ProfileWorkroomData"
                  :key="workshopIndex"
                >
                  <v-card>
                    <pre>{{ workshop }}</pre>
                  </v-card>
                </v-col>
              </v-row>
            </template>

            <!-- Unknown -->
            <template v-else></template>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Default View of the template - Settings
      ProfileView: 0,
      TotalPoints: 0,
      // Simulate Settings Stats.
      ProfileData: [
        {
          ProfileImage: "/img/logo.png",
          TotalLikes: 10,
          TotalComments: 5,
          TotalBlogPosts: 1,
          UserName: "daBoss",
          FullName: "Båb Kåre",
          Email: "baabs420@gmail.com",
          Occupation: "Teacher",
          Company: "Bio-Hazard 69",
          Bio: "I enjoy teaching, and drinking green drinks",
        },
      ],
      ProfileSideMenu: [
        { name: "Settings", icon: "mdi-cog", templateValue: 0 },
        { name: "Blogs", icon: "mdi-cog", templateValue: 1 },
        { name: "Webinars", icon: "mdi-cog", templateValue: 2 },
        { name: "Workrooms", icon: "mdi-cog", templateValue: 3 },
      ],
      socialMedias: [
        {
          name: "Facebook",
          icon: "mdi-facebook",
          link: "https://www.facebook.com/",
        },
        {
          name: "LinkedIn",
          icon: "mdi-linkedin",
          link: "https://www.linkedin.com/",
        },
        {
          name: "Instagram",
          icon: "mdi-instagram",
          link: "https://www.instagram.com/",
        },
        {
          name: "Youtube",
          icon: "mdi-youtube",
          link: "https://www.youtube.com/",
        },
        { name: "Mail", icon: "mdi-cog", link: "" },
      ],
      ProfileBlogData: [
        {
          name: "Blog Title 1",
          created: "15/03/2022",
          description:
            "Description text about this blog ldorem ipsum incididunt consectetur master reprehenderit sit amet, consectetur adipiscing elit, sed do eiusmod qui aliquam quaerat quaerat voluptatem tempor incididunt ut labore et dolore.",
          author: "Båb",
          image: "/img/logo.png",
          Link: "",
          isVerified: true,
          isFavorited: true,
          totalFavorited: 58,
        },
        {
          name: "Blog Title 2",
          created: "15/03/2022",
          description:
            "Description text about this blog ldorem ipsum incididunt consectetur master reprehenderit sit amet, consectetur adipiscing elit, sed do eiusmod qui aliquam quaerat quaerat voluptatem tempor incididunt ut labore et dolore.",
          author: "Truls",
          image: "/img/logo.png",
          Link: "",
          isVerified: false,
          isFavorited: false,
          totalFavorited: 3,
        },
        {
          name: "Blog Title 3",
          created: "15/03/2022",
          description:
            "Description text about this blog ldorem ipsum incididunt consectetur master reprehenderit sit amet, consectetur adipiscing elit, sed do eiusmod qui aliquam quaerat quaerat voluptatem tempor incididunt ut labore et dolore.",
          author: "Trine",
          image: "/img/logo.png",
          Link: "",
          isVerified: true,
          isFavorited: false,
          totalFavorited: 1862,
        },
      ],
      ProfileWebinarData: [
        {
          title: "Webinar Title",
          image: "/img/logo.png",
          description: "",
          author: "",
          webinarDate: "",
          webinarTime: "",
          Link: "",
          isFavorited: false,
          isVerified: true,
          isActive: true,
        },
        {
          title: "Webinar Title 2",
          image: "/img/logo.png",
          description: "",
          author: "",
          webinarDate: "",
          webinarTime: "",
          Link: "",
          isFavorited: false,
          isVerified: true,
          isActive: false,
        },
        {
          title: "Webinar Title 3",
          image: "/img/logo.png",
          description: "",
          author: "",
          webinarDate: "",
          webinarTime: "",
          Link: "",
          isVerified: true,
          isFavorited: false,
          isActive: true,
        },
      ],
      ProfileWorkroomData: [
        {
          title: "Workroom 1",
          image: "/img/logo.png",
          description: "",
          participants: 10,
          author: "",
          totalFavorites: 103,
          isVerified: true,
          isActive: true,
        },
        {
          title: "Workroom 2",
          image: "/img/logo.png",
          description: "",
          participants: 10,
          author: "",
          totalFavorites: 103,
          isVerified: true,
          isActive: true,
        },
        {
          title: "Workroom 3",
          image: "/img/logo.png",
          description: "",
          participants: 10,
          author: "",
          totalFavorites: 103,
          isVerified: true,
          isActive: true,
        },
      ],
    };
  },
  mounted() {
    this.calculateThePoints();
  },

  methods: {
    // Calculation of a persons score.
    calculateThePoints() {
      let likePoints = this.ProfileData[0].TotalLikes;
      let commentPoints = this.ProfileData[0].TotalComments * 2;
      let blogPoints = this.ProfileData[0].TotalBlogPosts * 5;
      // Extra points if profile got content - up to 100 points
      let fullNamePoints = this.ProfileData[0].FullName != "" ? 20 : 0;
      let emailPoints = this.ProfileData[0].Email != "" ? 20 : 0;
      let occupationPoints = this.ProfileData[0].Occupation != "" ? 20 : 0;
      let companyPoints = this.ProfileData[0].Company != "" ? 20 : 0;
      let bioPoints = this.ProfileData[0].Bio != "" ? 20 : 0;
      // Calculate All the values
      let pointsTotal =
        likePoints +
        commentPoints +
        blogPoints +
        fullNamePoints +
        emailPoints +
        occupationPoints +
        companyPoints +
        bioPoints;
      // Display total Values within the profile points
      this.TotalPoints = pointsTotal;
    },

    // Change Profile "page" - Template
    changeProfilePage(templateID) {
      this.ProfileView = templateID;
    },
  },
};
</script>

<style scoped>
/* General Page */
.homePageWidth {
  width: 90vw;
  margin: auto auto;
}

/* Side Border */
.sideBorder {
  border-right: 1px solid black;
}

/* Image style and positioning */
.imageStyling {
  border: 1px solid black;
  border-radius: 50%;
}

.imagePositioning {
  margin-left: auto;
  margin-right: auto;
}

/* Side menu button */
.activeButton {
  background-color: pink;
  color: green;
}
</style>
