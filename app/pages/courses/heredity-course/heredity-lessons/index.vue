<template>
    <div class="heredity-lessons mt-16">
        <v-container>
            <v-row>
                <v-col cols="12" md="8">
                    <video controls style="max-width: 100%;">
                        <source :src="video">
                    </video>
                    <v-btn class="text-golden mt-10" color="primary">الدرس التالي<v-icon class>mdi-chevron-double-left</v-icon></v-btn>
                    <h2 class="text-primary">ما هي الصفات الوراثية؟</h2>
                    <h4>في هذا الدرس ستتعرف على مفهوم الصفات الوراثية وكيف تنتقل بين الأجيال بطريقة مبسطة.</h4>
                    <div class="tabs">
                        <v-tabs color="primary">
                            <v-tab value="1">الشرح</v-tab>
                            <v-tab>المرفقات</v-tab>
                            <v-tab>التعليقات</v-tab>
                            <v-tab>الاختبار</v-tab>
                        </v-tabs>
                        <v-window>
                            <v-window-item value="1">
                                <p>الصفات الوراثية هي الصفات التي تنتقل من الآباء إلى الأبناء عبر الجينات، مثل لون العينين، لون الشعر، والطول. هذه الصفات تكون مخزنة داخل المادة الوراثية (DNA) الموجودة في خلايا الجسم.</p>
                                <p>تنتقل الصفات الوراثية من خلال الكروموسومات التي يحملها كل من الأب والأم، حيث يرث الأبناء مجموعة من الجينات من كلا الوالدين، مما يؤدي إلى ظهور صفات معينة لديهم.</p>
                                <p>وتنقسم الصفات الوراثية إلى نوعين رئيسيين: صفات سائدة، وهي التي تظهر عند وجودها حتى لو كانت من أحد الوالدين فقط، وصفات متنحية، وهي التي لا تظهر إلا إذا وُجدت من كلا الوالدين.</p>
                                <p>فهم الصفات الوراثية يساعدنا على تفسير أوجه التشابه والاختلاف بين الأفراد، كما يوضح كيف تنتقل بعض الصفات عبر الأجيال.</p>
                            </v-window-item>
                        </v-window>
                    </div>
                    <h2 class="text-secondary"><span class="text-primary">المحاضر/</span> محمود عادل</h2>
                    <h2 class="text-secondary"><span class="text-primary">تحت اشراف</span></h2>
                    <div class="doctors d-flex ga-0 ga-lg-16 flex-column flex-lg-row">
                        <h2 class="text-secondary mt-0"><span class="text-primary">الدكتورة/</span> شيماء محمد</h2>
                        <h2 class="text-secondary mt-0"><span class="text-primary">الدكتورة/</span> شيماء عابد</h2>
                    </div>
                </v-col>
                <v-col cols="12" md="4">
                    <v-expansion-panels variant="accordion" v-model="panels" @update:modelValue="val => panels = val.length ? val : [0]" multiple>
                            <v-expansion-panel value="1">
                                <v-expansion-panel-title color="primary">القسم 1: مقدمة في علم الوراثة</v-expansion-panel-title>
                                <v-list>
                                    <v-list-item><v-icon color="secondary">mdi-monitor-account</v-icon> ما هي الصفات الوراثية؟</v-list-item>
                                    <v-list-item><v-icon color="secondary">mdi-monitor-account</v-icon> أهمية علم الوراثة</v-list-item>
                                    <v-list-item><v-icon color="secondary">mdi-monitor-account</v-icon> نظرة عامة على الجينات</v-list-item>
                                    <v-list-item><v-icon color="secondary">mdi-list-box</v-icon> اختبار القسم الأول</v-list-item>
                                </v-list>
                            </v-expansion-panel>

                            <v-expansion-panel value="2">
                                <v-expansion-panel-title color="primary">القسم 2: الكروموسومات والجينات</v-expansion-panel-title>
                                <v-list>
                                    <v-list-item><v-icon color="secondary">mdi-monitor-account</v-icon> تركيب الكروموسوم</v-list-item>
                                    <v-list-item><v-icon color="secondary">mdi-monitor-account</v-icon> ما هو الجين؟</v-list-item>
                                    <v-list-item><v-icon color="secondary">mdi-monitor-account</v-icon> العلاقة بين DNA والجينات</v-list-item>
                                    <v-list-item><v-icon color="secondary">mdi-list-box</v-icon> اختبار القسم الثاني</v-list-item>
                                </v-list>
                            </v-expansion-panel>

                            <v-expansion-panel value="3">
                                <v-expansion-panel-title color="primary">القسم 3: قوانين مندل</v-expansion-panel-title>

                                <v-list>
                                    <v-list-item><v-icon color="secondary">mdi-monitor-account</v-icon> قانون العزل</v-list-item>
                                    <v-list-item><v-icon color="secondary">mdi-monitor-account</v-icon> قانون التوزيع الحر</v-list-item>
                                    <v-list-item><v-icon color="secondary">mdi-monitor-account</v-icon> أمثلة محلولة</v-list-item>
                                    <v-list-item><v-icon color="secondary">mdi-list-box</v-icon> اختبار القسم الثالث</v-list-item>
                                </v-list>
                            </v-expansion-panel>
                            <v-expansion-panel value="4">
                                <v-expansion-panel-title color="primary">القسم 4: الصفات الوراثية</v-expansion-panel-title>
                                <v-list>
                                    <v-list-item><v-icon color="secondary">mdi-monitor-account</v-icon> الصفات السائدة والمتنحية</v-list-item>
                                    <v-list-item><v-icon color="secondary">mdi-monitor-account</v-icon> أمثلة من الحياة الواقعية</v-list-item>
                                    <v-list-item><v-icon color="secondary">mdi-list-box</v-icon> اختبار القسم الرابع</v-list-item>
                                </v-list>
                            </v-expansion-panel>

                            <v-expansion-panel value="5">
                                <v-expansion-panel-title color="primary">القسم 5: الطفرات</v-expansion-panel-title>
                                <v-list>
                                    <v-list-item><v-icon color="secondary">mdi-monitor-account</v-icon> ما هي الطفرات؟</v-list-item>
                                    <v-list-item><v-icon color="secondary">mdi-monitor-account</v-icon> أنواع الطفرات</v-list-item>
                                    <v-list-item><v-icon color="secondary">mdi-monitor-account</v-icon> أسباب حدوث الطفرات</v-list-item>
                                    <v-list-item><v-icon color="secondary">mdi-monitor-account</v-icon> تأثير الطفرات</v-list-item>
                                    <v-list-item><v-icon color="secondary">mdi-list-box</v-icon> اختبار القسم الخامس</v-list-item>
                                </v-list>
                            </v-expansion-panel>
                            <v-expansion-panel value="6">
                                <v-expansion-panel-title color="primary">القسم 6: مراجعة واختبار</v-expansion-panel-title>
                                <v-list>
                                    <v-list-item><v-icon color="secondary">mdi-monitor-account</v-icon> ملخص الكورس</v-list-item>
                                    <v-list-item><v-icon color="secondary">mdi-list-box</v-icon> الاختبار النهائي الشامل</v-list-item>
                                </v-list>
                            </v-expansion-panel>
                        </v-expansion-panels>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
import video from "@/assets/imgs/اساسيات الوراثة وتحديد شكل الابناء(720P_HD).mp4";
import { ref } from 'vue';

const panels = ref([1, 2, 3, 4, 5, 6]);
</script>