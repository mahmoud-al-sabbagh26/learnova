<template>
    <div class="courses mt-16">
        <v-container>
            <v-row>
                <v-col>
                    <div class="title d-flex justify-center">  
                        <h1 class="text-md-display-large text-primary font-weight-bold mb-2" style="text-shadow: 3px 4px 8px black;">اكتشف جميع الكورسات
                            <v-img :src="edu" width="100" class="img"></v-img>
                        </h1>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="text-center">
                    <h2 class="text-secondary mt-0 text-body-large text-md-display-small">تصفح مجموعة متنوعة من الكورسات المصممة لتطوير مهاراتك في مختلف المجالات</h2>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field
                    class="search-field mx-auto"
                    density="compact"
                    variant="outlined"
                    rounded
                    append-inner-icon="mdi-magnify"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row class="my-16">
                <v-col cols="12" md="6" lg="4" v-for="card in cards" :key="card.id">
          <v-card elevation="4" style="border-radius: 16px;" hover>
            <div class="img-box" style="height: 250px;">
              <v-img :src="card.cardImg" cover></v-img>
            </div>
            <v-card-title class="text-primary font-weight-bold mt-2">{{ card.cardTitle }}</v-card-title>
            <v-card-text style="color: gray;">{{ card.cardText }}</v-card-text>
            <v-divider thickness="1"></v-divider>
            <v-card-actions class="d-flex justify-space-between my-2">
              <div class="teacher">
                <V-icon color="secondary" class="ml-2">mdi-human-male-board</V-icon>
                <span>{{ card.cardTecher }}</span>
              </div>
              <v-btn class="bg-primary px-6 py-0" color="golden" rounded><NuxtLink :to="{name: 'courses-heredity-course'}" class="text-golden">تسجيل</NuxtLink></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
import edu from "@/assets/imgs/education.png";
import dnaImg from "@/assets/imgs/DNA.jpg";
import biologyImg from "@/assets/imgs/biology.jpg";
import englishImg from "@/assets/imgs/english.jpg";
import mathsImg from "@/assets/imgs/MATHS.jpg";
import deutschImg from "@/assets/imgs/deutsch.jpg";
import aiImg from "@/assets/imgs/AI.jpg";
import { ref } from "vue";

let cards = ref([
  {
    id: "1",
    cardImg: dnaImg,
    cardTitle: "الصفات الوراثية والطفرات",
    cardText: "أتقن فهم الصفات الوراثية، وانتقالها بين الأجيال، وتعرّف على الطفرات الجينية وتأثيرها",
    cardTecher: "محمود عادل",
  },
  {
    id: "2",
    cardImg: englishImg,
    cardTitle: "اللغة الانجليزية",
    cardText: "أتقن مهارات اللغة الإنجليزية، وتحدث بثقة، وطوّر قدراتك في الاستماع والقراءة والكتابة",
    cardTecher: "محمد طه",
  },
  {
    id: "3",
    cardImg: aiImg,
    cardTitle: "الذكاء الأصطناعي AI",
    cardText: "ادخل عالم الذكاء الاصطناعي، وطوّر مهاراتك في تحليل البيانات وبناء النماذج",
    cardTecher: "محمود عادل",
  },
  {
    id: "4",
    cardImg: deutschImg,
    cardTitle: "اللغة الألمانية",
    cardText: "أتقن أساسيات اللغة الألمانية، وتعلّم التحدث بطلاقة، وطوّر مهاراتك في الفهم والتواصل",
    cardTecher: "محمد ابراهيم",
  },
  {
    id: "5",
    cardImg: mathsImg,
    cardTitle: "اساسيات الرياضيات",
    cardText: "أتقن أساسيات الرياضيات، وافهم القوانين بسهولة، وطوّر مهاراتك في حل المسائل بثقة",
    cardTecher: "محمد طه",
  },
  {
    id: "6",
    cardImg: biologyImg,
    cardTitle: "جسم الإنسان",
    cardText: "ابدأ رحلتك داخل جسم الإنسان، واكتشف أسرار تكوينه ووظائفه",
    cardTecher: "محمد ابراهيم",
  },
]);
</script>

<style lang="scss">
.courses {
    .title {
        h1 {
            position: relative;
            width: fit-content;
            .img {
                position: absolute;
                top: -20px;
                right: -54px;
                filter: drop-shadow(-2px 5px 8px black);
            }
        }
    }

    .search-field {
  width: 600px;
  @media (max-width: 600px) {
      width: 300px;
  }
}

}
</style>