<template>
  <v-row>
    <v-col class="cafe__component">
      <h1 class="py-4">List of cafes</h1>

      <v-row class="cafe__list mx-2">
        <v-col v-for="cafe in cafes" :key="cafe.id" md="4" xl="4">
          <v-card class="cafe__card">
            <v-img height="250" :src="cafe.img"></v-img>
            <v-card-title>
              <router-link to="/cafe/view">{{ cafe.name }}</router-link>
            </v-card-title>
            <v-card-text>
              <p>{{ cafe.description }}</p>
              <b>Rating: {{ cafe.rating }} of 5</b>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Cafe",
  data: () => ({
    cafes: [
      {
        id: 0,
        name: 'K-FOOD',
        description: 'Nice restaurant with korean food',
        img: 'https://cheapandcheerfulcooking.com/wp-content/uploads/2021/01/chinese-fried-noodles-basic-recipe-1.jpg',
        tags: ['asian'],
        rating: 5
      },
      {
        id: 1,
        name: 'CKF',
        description: 'Fast food cafe with chinese food',
        img: 'https://www.saveur.com/uploads/2019/12/09/OB7S7ZQJAVDRFGVXYHMD3FUS2Y.jpg?width=1440',
        tags: ['chinese', 'noodle'],
        rating: 3
      },
      {
        id: 2,
        name: 'Oil Noodle',
        description: 'Here you can find italian pizza and special burgers',
        img: 'https://www.seriouseats.com/thmb/9dcMz7jBJBd_DE6ZTJPJqMIbUFE=/735x0/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__01__20140120-beef-ramyun-homemade-recipe-15-014423f0ac734abc8c0d826e54857afe.jpg',
        tags: ['italian'],
        rating: 5
      },
      {
        id: 3,
        name: 'CKF',
        description: 'Fast food cafe with chinese food',
        img: 'https://www.saveur.com/uploads/2019/12/09/OB7S7ZQJAVDRFGVXYHMD3FUS2Y.jpg?width=1440',
        tags: ['chinese', 'noodle'],
        rating: 3
      },
      {
        id: 4,
        name: 'Oil Noodle',
        description: 'Here you can find italian pizza and special burgers',
        img: 'https://www.seriouseats.com/thmb/9dcMz7jBJBd_DE6ZTJPJqMIbUFE=/735x0/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__01__20140120-beef-ramyun-homemade-recipe-15-014423f0ac734abc8c0d826e54857afe.jpg',
        tags: ['italian'],
        rating: 5
      },
      {
        id: 5,
        name: 'K-FOOD',
        description: 'Nice restaurant with korean food',
        img: 'https://cheapandcheerfulcooking.com/wp-content/uploads/2021/01/chinese-fried-noodles-basic-recipe-1.jpg',
        tags: ['asian'],
        rating: 5
      }
    ]
  })
}
</script>

<style scoped>

</style>