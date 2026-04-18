<template>
    <div class="heredity-course mt-16">
        <div class="hero-section mb-16">
        <img :src="ran" alt="" width="200">
        <v-container>
            <v-row>
                <v-col cols="12" md="7" class="mt-16 mt-md-0">
                    <h1 class="text-primary text-headline-medium text-md-headline-large text-lg-display-small font-weight-bold">الصفات الوراثية والطفرات </h1>
                    <h2 class="text-secondary text-body-large text-md-headline-medium font-weight-bold">فهم أسرار انتقال الصفات والتغير الجيني</h2>
                    <p class="text-gray">أتقن فهم الصفات الوراثية، وانتقالها بين الأجيال، وتعرّف على الطفرات الجينية وتأثيرها على الكائنات الحية</p>
                    <div class="details">
                        <v-container fluid>
                            <v-row class="d-flex flex-column flex-lg-row">
                                <v-col cols="4" class="d-flex align-center">
                                    <v-icon color="golden ml-1">mdi-star</v-icon>
                                    <span>4.8 (126 طالب)</span>
                                </v-col>
                                <v-col cols="4" class="d-flex align-center">
                                    <v-icon color="secondary ml-1">mdi-human-male-board</v-icon>
                                    <span>محمود عادل</span>
                                </v-col>
                            </v-row>
                            <v-row class="d-flex flex-column flex-lg-row">
                                <v-col cols="4" class="d-flex align-center">
                                    <v-icon color="secondary ml-1">mdi-laptop-account</v-icon>
                                    <span>18 درس</span>
                                </v-col>
                                <v-col cols="4" class="d-flex align-center">
                                    <v-icon color="red ml-1">mdi-clock</v-icon>
                                    <span>3 ساعات اجمالي</span>
                                </v-col>
                            </v-row>
                        </v-container>
                    </div>
                    <v-btn color="primary" class="text-golden mt-4 py-6 mx-auto mx-md-0" width="150" style="font-size: 20px;" rounded><NuxtLink :to="{name: 'courses-heredity-course-heredity-lessons'}" class="text-golden">ابدا الأن</NuxtLink></v-btn>
                </v-col>
            </v-row>
        </v-container>
        </div>
        <div class="details mb-8">
            <v-container>
                <v-row>
                    <v-col cols="12" md="8">
                        <h2 class="text-primary mt-12">نظرة عامة على الكورس</h2>
                        <p>في هذا الكورس ستتعرف على أساسيات الصفات الوراثية وكيفية انتقالها من جيل إلى آخر، مع شرح مبسّط لمفهوم الجينات والكروموسومات ودورها في تحديد صفات الكائنات الحية.</p>
                        <p>كما يقدّم الكورس شرحًا واضحًا لمفهوم الطفرات الجينية، وأنواعها وأسباب حدوثها، وتأثيرها على الكائنات الحية، سواء كان تأثيرًا إيجابيًا أو سلبيًا.</p>
                        <p>تم تصميم هذا الكورس بأسلوب سهل وتدريجي، مدعّم بالأمثلة والتطبيقات العملية، لمساعدتك على الفهم العميق بدلًا من الحفظ، مما يجعله مناسبًا لجميع المستويات، خاصة الطلاب في المراحل الدراسية المختلفة.</p>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card class="card" elevation="4" >
                            <video controls style="max-width: 100%;">
                                <source :src="video">
                            </video>
                            <v-card-title class="text-primary font-weight-bold mt-2">الصفات الورائية والطفرات</v-card-title>
                            <v-card-text class="py-0">
                                <h4 class="text-secondary mt-2">فهم أسرار انتقال الصفات والتغير الجيني</h4>
                                <h3 class="mb-0 text-primary font-weight-bold">تتضمن هذه الدورة:</h3>
                                <v-list class="mx-0 px-0 mb-0" density="compact">
                                    <v-list-item class="mx-0 px-0 my-0 py-0"><v-icon color="secondary">mdi-laptop-account</v-icon> دروس مرئية مبسطة في الصفات الوراثية</v-list-item>
                                    <v-list-item class="mx-0 px-0 my-0 py-0"><v-icon color="secondary">mdi-tablet-cellphone</v-icon> إمكانية التعلم في أي وقت ومن أي جهاز</v-list-item>
                                    <v-list-item class="mx-0 px-0 my-0 py-0"><v-icon color="secondary">mdi-clock</v-icon> وصول دائم مدى الحياة</v-list-item>
                                    <v-list-item class="mx-0 px-0 my-0 py-0"><v-icon color="secondary">mdi-school</v-icon> اختبارات وشهادة إتمام</v-list-item>
                                </v-list>
                            </v-card-text>
                            <v-card-actions class="mt-0">
                                <v-btn color="primary" class="text-golden mt-0 py-3 mb-2"  style="font-size: 20px;width: 100%;" rounded variant="flat"><NuxtLink :to="{name: 'courses-heredity-course-heredity-lessons'}" class="text-golden">سجل الأن</NuxtLink></v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div class="learn">
            <v-container>
                <v-row>
                    <v-col cols="12" lg="8">
                        <h1 class="text-primary mt-0">ماذا ستتعلم في هذا الكورس؟</h1>
                        <v-list density="compact" class="d-flex flex-wrap ga-md-10 align-start">
                            <div>
                                <v-list-item class="mx-0 px-0"><v-icon color="secondary">mdi-check-circle</v-icon> فهم مفهوم الصفات الوراثية وكيف تنتقل</v-list-item>
                                <v-list-item class="mx-0 px-0"><v-icon color="secondary">mdi-check-circle</v-icon> فهم الطفرات وأنواعها وأسبابها</v-list-item>
                                <v-list-item class="mx-0 px-0"><v-icon color="secondary">mdi-check-circle</v-icon> التعرف على تركيب الكروموسومات والجينات</v-list-item>
                                <v-list-item class="mx-0 px-0"><v-icon color="secondary">mdi-check-circle</v-icon>  دراسة قوانين مندل بطريقة مبسطة</v-list-item>
                            </div>
                            <div>
                                <v-list-item class="mx-0 px-0"><v-icon color="secondary">mdi-check-circle</v-icon>  التمييز بين الصفات السائدة والمتنحية</v-list-item>
                                <v-list-item class="mx-0 px-0"><v-icon color="secondary">mdi-check-circle</v-icon> معرفة تأثير الطفرات على الكائنات الحية</v-list-item>
                                <v-list-item class="mx-0 px-0"><v-icon color="secondary">mdi-check-circle</v-icon> تطبيقات عملية وأسئلة تدريبية</v-list-item>
                            </div>
                        </v-list>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div class="content">
            <v-container>
                <v-row>
                    <v-col>
                        <h1 class="text-primary mt-0">محتوى الكورس</h1>
                        <v-expansion-panels variant="accordion" v-model="panel" class="my-8">
                            <v-expansion-panel value="1">
                            <v-expansion-panel-title @click="togglePanel('1')" class="text-primary">
                                القسم 1: مقدمة في علم الوراثة
                            </v-expansion-panel-title>

                            <v-expansion-panel-text>
                                <v-list>
                                    <v-list-item><v-icon color="secondary">mdi-monitor-account</v-icon> ما هي الصفات الوراثية؟</v-list-item>
                                    <v-list-item><v-icon color="secondary">mdi-monitor-account</v-icon> أهمية علم الوراثة</v-list-item>
                                    <v-list-item><v-icon color="secondary">mdi-monitor-account</v-icon> نظرة عامة على الجينات</v-list-item>
                                    <v-list-item><v-icon color="secondary">mdi-list-box</v-icon> اختبار القسم الأول</v-list-item>
                                </v-list>
                            </v-expansion-panel-text>
                            </v-expansion-panel>

                            <v-expansion-panel value="2">
                            <v-expansion-panel-title @click="togglePanel('2')" class="text-primary">
                                القسم 2: الكروموسومات والجينات
                            </v-expansion-panel-title>

                            <v-expansion-panel-text>
                                <v-list>
                                    <v-list-item><v-icon color="secondary">mdi-monitor-account</v-icon> تركيب الكروموسوم</v-list-item>
                                    <v-list-item><v-icon color="secondary">mdi-monitor-account</v-icon> ما هو الجين؟</v-list-item>
                                    <v-list-item><v-icon color="secondary">mdi-monitor-account</v-icon> العلاقة بين DNA والجينات</v-list-item>
                                    <v-list-item><v-icon color="secondary">mdi-list-box</v-icon> اختبار القسم الثاني</v-list-item>
                                </v-list>
                            </v-expansion-panel-text>
                            </v-expansion-panel>

                            <v-expansion-panel value="3">
                            <v-expansion-panel-title @click="togglePanel('3')" class="text-primary">
                               القسم 3: قوانين مندل
                            </v-expansion-panel-title>

                            <v-expansion-panel-text>
                                <v-list>
                                    <v-list-item><v-icon color="secondary">mdi-monitor-account</v-icon> قانون العزل</v-list-item>
                                    <v-list-item><v-icon color="secondary">mdi-monitor-account</v-icon> قانون التوزيع الحر</v-list-item>
                                    <v-list-item><v-icon color="secondary">mdi-monitor-account</v-icon> أمثلة محلولة</v-list-item>
                                    <v-list-item><v-icon color="secondary">mdi-list-box</v-icon> اختبار القسم الثالث</v-list-item>
                                </v-list>
                            </v-expansion-panel-text>

                            </v-expansion-panel>
                            <v-expansion-panel value="4">
                            <v-expansion-panel-title @click="togglePanel('4')" class="text-primary">
                               القسم 4: الصفات الوراثية
                            </v-expansion-panel-title>

                            <v-expansion-panel-text>
                                <v-list>
                                    <v-list-item><v-icon color="secondary">mdi-monitor-account</v-icon> الصفات السائدة والمتنحية</v-list-item>
                                    <v-list-item><v-icon color="secondary">mdi-monitor-account</v-icon> أمثلة من الحياة الواقعية</v-list-item>
                                    <v-list-item><v-icon color="secondary">mdi-list-box</v-icon> اختبار القسم الرابع</v-list-item>
                                </v-list>
                            </v-expansion-panel-text>
                            </v-expansion-panel>

                            <v-expansion-panel value="5">
                            <v-expansion-panel-title @click="togglePanel('5')" class="text-primary">
                               القسم 5: الطفرات
                            </v-expansion-panel-title>

                            <v-expansion-panel-text>
                                <v-list>
                                    <v-list-item><v-icon color="secondary">mdi-monitor-account</v-icon> ما هي الطفرات؟</v-list-item>
                                    <v-list-item><v-icon color="secondary">mdi-monitor-account</v-icon> أنواع الطفرات</v-list-item>
                                    <v-list-item><v-icon color="secondary">mdi-monitor-account</v-icon> أسباب حدوث الطفرات</v-list-item>
                                    <v-list-item><v-icon color="secondary">mdi-monitor-account</v-icon> تأثير الطفرات</v-list-item>
                                    <v-list-item><v-icon color="secondary">mdi-list-box</v-icon> اختبار القسم الخامس</v-list-item>
                                </v-list>
                            </v-expansion-panel-text>
                            </v-expansion-panel>
                            <v-expansion-panel value="6">
                            <v-expansion-panel-title @click="togglePanel('6')" class="text-primary">
                               القسم 6: مراجعة واختبار
                            </v-expansion-panel-title>

                            <v-expansion-panel-text>
                                <v-list>
                                    <v-list-item><v-icon color="secondary">mdi-monitor-account</v-icon> ملخص الكورس</v-list-item>
                                    <v-list-item><v-icon color="secondary">mdi-list-box</v-icon> الاختبار النهائي الشامل</v-list-item>
                                </v-list>
                            </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<script setup>
import ran from "@/assets/imgs/rect.png";
import video from "@/assets/imgs/اساسيات الوراثة وتحديد شكل الابناء(720P_HD).mp4";

import { ref } from 'vue';

const panel = ref(null);

const togglePanel = (val) => {
  panel.value === val ? null : val
}
</script>

<style lang="scss">
.hero-section {
    position: relative;
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 600px;
        height: 450px;
        @media (min-width: 992px) and (max-width: 1200px) {
            width: 500px;
            height: 400px;
        }
        @media (max-width: 991px) {
            display: none;
        }
    }
}

.details {
    position: relative;
    .card {
        position: absolute;
        border-radius: 16px;
        width: 300px;
        top: -200px;
        @media (max-width: 767px) {
            position: relative;
            top: 0;
            width: 100%;
        }
    }
}
</style>
