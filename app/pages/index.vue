<template>
  <v-sheet class="hero-section d-flex justify-space-between align-center" style="min-height: calc(100vh - 64px);margin-top: 64px;">
    <v-sheet>
      <v-container class="pr-lg-16 mr-lg-14 d-flex flex-column justify-center" style="height: 100%;">
        <h1 class="text-primary text-lg-display-small font-weight-bold text-md-headline-medium">دورة تعليم إلكتروني عبر الإنترنت</h1>
        <p class="text-secondary font-weight-bold" style="font-size: 24px;">تجربة تُحاكي أجواء الصف الدراسي الحقيقي</p>
        <div class="d-flex flex-column flex-lg-row ga-4">
          <span><v-icon color="red">mdi-school</v-icon> احصل على شهادة معتمدة</span>
          <span><v-icon color="secondary">mdi-format-list-checks</v-icon> اكتسب مهارات تؤهلك لسوق العمل</span>
        </div>
        <v-btn color="primary" class="text-golden mt-10 py-6 mx-auto mx-md-0" width="150" style="font-size: 20px;" rounded>ابدا التعلم</v-btn>
      </v-container>
    </v-sheet>
    <div class="shaps bg-secondary">
      <div class="img">
        <v-img :src="studentsImg" style="z-index: 1; border-bottom-right-radius: 50px;"></v-img>
      </div>
    </div>
  </v-sheet>
  <div class="features my-10">
    <v-container>
      <v-row class="d-flex justify-space-between">
        <v-col cols="6" sm="12" md="6" lg="3" class="d-flex align-center"><span class="d-flex bg-primary pa-1 align-center justify-center ml-1" style="width: 40px;height: 40px; border-radius: 50%;"><v-icon>mdi-laptop</v-icon></span> أكثر من 4 ألاف دورة تدريبية</v-col>
        <v-col cols="6" sm="12" md="6" lg="3" class="d-flex align-center"><span class="d-flex bg-primary pa-1 align-center justify-center ml-1" style="width: 40px;height: 40px; border-radius: 50%;"><v-icon>mdi-clock-time-five</v-icon></span> وصول مدى الحياة</v-col>
        <v-col cols="6" sm="12" md="6" lg="3" class="d-flex align-center"><span class="d-flex bg-primary pa-1 align-center justify-center ml-1" style="width: 40px;height: 40px; border-radius: 50%;"><v-icon>mdi-headphones-settings</v-icon></span> دعم مدى الحياة</v-col>
        <v-col cols="6" sm="12" md="6" lg="3" class="d-flex align-center"><span class="d-flex bg-primary pa-1 align-center justify-center ml-1" style="width: 40px;height: 40px; border-radius: 50%;"><v-icon>mdi-earth</v-icon></span> دعم المجتمع</v-col>
      </v-row>
    </v-container>
  </div>
  <div class="about">
    <v-container>
      <v-row class="d-flex align-center">
        <v-col cols="12" lg="6" class="order-2 order-lg-0">
          <div class="details">
            <h3 class="text-secondary">تعرّف علينا</h3>
            <h2 class="text-primary">ابدأ رحلتك نحو مستقبلٍ أكثر احترافية</h2>
            <p>نقدّم لك تجربة تعلّم إلكتروني متكاملة، مصمّمة بعناية لتمنحك المعرفة التي تحتاجها، في الوقت الذي يناسبك، وبالأسلوب الذي يواكب تطوّرك.</p>
            <p>من خلال منصتنا، يمكنك الوصول إلى مكتبة ضخمة من الدورات التدريبية عالية الجودة، المُعدة بواسطة خبراء ومتخصصين في مختلف المجالات، مع محتوى تفاعلي يضمن لك الفهم والتطبيق، وليس مجرد المشاهدة.</p>
            <p class="mb-0">نحن لا نقدّم محتوى تعليمي فقط، <strong>بل نبني بيئة تعلّم ذكية تعتمد على:</strong></p>
            <v-list class="ma-0">
              <v-list-item class="py-0">
                <div class="d-flex align-center ma-0 pa-0">
                  <v-icon color="secondary" >mdi-check-circle</v-icon>
                  <p class="my-0 pr-2">مسارات تعليمية منظمة تقودك خطوة بخطوة نحو هدفك</p>
                </div>
              </v-list-item>
              <v-list-item>
                <div class="d-flex align-center">
                  <v-icon color="secondary">mdi-check-circle</v-icon>
                  <p class="my-0 pr-2">أدوات تفاعلية تعزز من استيعابك ومهاراتك العملية</p>
                </div>
              </v-list-item>
              <v-list-item>
                <div class="d-flex align-center">
                  <v-icon color="secondary">mdi-check-circle</v-icon>
                  <p class="my-0 pr-2">نظام متابعة وتقييم يساعدك على قياس تقدمك باستمرار</p>
                </div>
              </v-list-item>
            </v-list>
            <p class="my-0">انضم إلى آلاف المتعلمين الذين طوّروا مهاراتهم بالفعل، وابدأ في اكتساب المهارات التي تبحث عنها كبرى الشركات في سوق العمل اليوم.</p>
            <p class="text-primary my-1 font-weight-bold">تعلّم بذكاء… وتقدّم بثقة.</p>
          </div>
        </v-col>
        <v-col cols="12" lg="6">
          <v-img :src="about" class="about-img"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div class="featured-courses">
    <v-container>
      <v-row>
        <v-col class="text-center">
          <h2 class="text-display-medium font-weight-bold text-primary">اشهر الكورسات</h2>
        </v-col>
      </v-row>
      <v-row>
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
              <v-btn class="bg-primary px-6 py-0" rounded><NuxtLink :to="{name: 'courses-heredity-course'}" class="text-golden">تسجيل</NuxtLink></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center">
          <v-btn class="text-golden mt-10" color="primary" rounded>عرض جميع الكورسات<v-icon class>mdi-chevron-double-left</v-icon></v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div class="opinions bg-secondary mt-10 pb-16">
    <v-container>
      <v-row>
        <v-col class="text-center">
          <h2 class="text-display-medium font-weight-bold">اراء الطلاب</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-card style="border-radius: 10px;" elevation="4" height="140">
            <v-card-title class="text-primary font-weight-bold">حاتم البسيوني</v-card-title>
            <v-card-subtitle>
              <v-icon color="golden">mdi-star</v-icon>
              <v-icon color="golden">mdi-star</v-icon>
              <v-icon color="golden">mdi-star</v-icon>
              <v-icon color="golden">mdi-star</v-icon>
              <v-icon color="golden">mdi-star</v-icon>
            </v-card-subtitle>
            <v-card-text>المنصة ساعدتني أفهم الدروس بشكل أسهل بكتير من المدرسة، الشرح واضح جدًا والتنظيم ممتاز.</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card style="border-radius: 10px;" elevation="4" height="140">
            <v-card-title class="text-primary font-weight-bold">سارة منصور</v-card-title>
            <v-card-subtitle>
              <v-icon color="golden">mdi-star</v-icon>
              <v-icon color="golden">mdi-star</v-icon>
              <v-icon color="golden">mdi-star</v-icon>
              <v-icon color="golden">mdi-star</v-icon>
              <v-icon color="golden">mdi-star-outline</v-icon>
            </v-card-subtitle>
            <v-card-text>تجربة التعلم هنا مختلفة فعلًا، حسّيت إني بتطور خطوة بخطوة من غير أي ضغط.</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card style="border-radius: 10px;" elevation="4" height="140">
            <v-card-title class="text-primary font-weight-bold">سلمي خالد</v-card-title>
            <v-card-subtitle>
              <v-icon color="golden">mdi-star</v-icon>
              <v-icon color="golden">mdi-star</v-icon>
              <v-icon color="golden">mdi-star</v-icon>
              <v-icon color="golden">mdi-star</v-icon>
              <v-icon color="golden">mdi-star-outline</v-icon>
            </v-card-subtitle>
            <v-card-text>أكتر حاجة عجبتني هي بساطة الشرح والتطبيقات العملية اللي بتخلّي المعلومة تثبت بسرعة.</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card style="border-radius: 10px;" elevation="4" height="140">
            <v-card-title class="text-primary font-weight-bold">يوسف احمد</v-card-title>
            <v-card-subtitle>
              <v-icon color="golden">mdi-star</v-icon>
              <v-icon color="golden">mdi-star</v-icon>
              <v-icon color="golden">mdi-star</v-icon>
              <v-icon color="golden">mdi-star</v-icon>
              <v-icon color="golden">mdi-star</v-icon>
            </v-card-subtitle>
            <v-card-text>بصراحة المنصة وفّرت عليّ وقت ومجهود كبير، وكل حاجة متاحة في أي وقت.</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div class="cta pb-0">
    <div class="overlay pb-0 mb-0"></div>
    <video autoplay muted loop class="video">
      <source :src="video">
    </video>
    <div class="text text-center pb-0 mb-0">
      <h2 class="text-center text-white text-md-display-small font-weight-bold text-sm-headline-large">ابدأ رحلتك التعليمية الآن</h2>
      <h3 class="text-secondary text-body-small text-md-headline-small">انضم إلى آلاف الطلاب وابدأ تطوير مهاراتك اليوم</h3>
      <div class="action d-flex justify-space-around mb-0 ga-2">
        <v-btn class="text-golden text-body-large px-8" color="primary" rounded>ابدأ الآن</v-btn>
        <v-btn class="text-primary font-weight-bold" rounded>تصفح الكورسات</v-btn>
      </div>
    </div>
  </div>
  
</template>
<script setup>
import studentsImg from "@/assets/imgs/students.png";
import dnaImg from "@/assets/imgs/DNA.jpg";
import biologyImg from "@/assets/imgs/biology.jpg";
import englishImg from "@/assets/imgs/english.jpg";
import mathsImg from "@/assets/imgs/MATHS.jpg";
import deutschImg from "@/assets/imgs/deutsch.jpg";
import aiImg from "@/assets/imgs/AI.jpg";
import video from "@/assets/imgs/students.mp4";
import about from "@/assets/imgs/Online learning-amico 1.svg";

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
.shaps {
  width: 650px;
  height: 100%;
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    width: 200px;
    height: 100%;
    background: white;
    top: 0;
    right: 0;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 0px;
  }
  .img {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;

    .v-img {
      max-width: 100%;
    }
  }
  
  @media (max-width: 992px) {
    width: 500px;
  }
  @media (max-width: 767px) {
    display: none;
  }
}

.about-img {
  position: relative;
  animation: up-down-move infinite 1.5s ;
}

@keyframes up-down-move {
  0% {
    top: 0;
  }
  50% {
    top: -10px;
  }
  100% {
    top: 0;
  }
}

.v-card {
  transition: transform 0.3s ;
}

.v-card:hover {
  transform: translateY(-5px);
}

.cta {
  position: relative;
  padding: 0;
  margin: 0;

  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.725);
  }

  .video {
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 0;
    margin: 0;
  }

  @media (min-width: 1200px) {
    height: 100vh;
  }
}
</style>
