<template>
  <div class="home">
    <h1>Homepage</h1>
    <p
      class="red white--text"
    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum corrupti delectus facilis dicta dolores ex aliquam odio accusantium, numquam vel enim perferendis voluptas libero modi earum molestiae, nam beatae inventore?</p>
    <p
      class="pink lighten-4 red--text text--darken-4"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit incidunt commodi blanditiis ullam repudiandae cupiditate, dicta esse molestiae soluta dolorem ratione, exercitationem distinctio quo pariatur nostrum deserunt modi iure magni.</p>
    <h1 class="display-4">Massive Display</h1>
    <h4 class="display-1">Smaller Display</h4>
    <p class="headline">This is a headline</p>
    <p class="subheading font weight bold">This is a subheading (with font weight bold)</p>
    <p class="caption">This is a caption</p>

    <v-btn class="pink white--text">click me</v-btn>
    <v-btn depressed dark color="pink">click me</v-btn>
    <v-btn flat dark color="pink">click me</v-btn>

    <v-btn depressed color="pink white--text">
      <v-icon left>email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn depressed small color="pink white--text">
      <v-icon left small>email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn depressed large color="pink white--text">
      <span>email me</span>
      <v-icon right large>email</v-icon>
    </v-btn>

    <v-btn fab depressed small dark color="purple">
      <v-icon>favorite</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {};
</script>
