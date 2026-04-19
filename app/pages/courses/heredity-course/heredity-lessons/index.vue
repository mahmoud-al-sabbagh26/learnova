<template>
    <div class="heredity-lessons mt-16">
        <v-container>
            <v-row>
                <v-col cols="12" md="8">
                    <video controls style="max-width: 100%;">
                        <source src="/heredity.mp4" type="video/mp4">
                    </video>
                    <v-btn class="text-golden mt-10" color="primary">الدرس التالي<v-icon class>mdi-chevron-double-left</v-icon></v-btn>
                    <h2 class="text-primary">ما هي الصفات الوراثية؟</h2>
                    <h4>في هذا الدرس ستتعرف على مفهوم الصفات الوراثية وكيف تنتقل بين الأجيال بطريقة مبسطة.</h4>
                    <div class="tabs">
                        <v-tabs v-model="tab" color="primary" fixed-tabs>
                            <v-tab value="1">الشرح</v-tab>
                            <v-tab value="2">المرفقات</v-tab>
                            <v-tab value="3">التعليقات</v-tab>
                            <v-tab value="4">الاختبار</v-tab>
                        </v-tabs>
                        <v-window v-model="tab">
                            <v-window-item value="1">
                                <p>الصفات الوراثية هي الصفات التي تنتقل من الآباء إلى الأبناء عبر الجينات، مثل لون العينين، لون الشعر، والطول. هذه الصفات تكون مخزنة داخل المادة الوراثية (DNA) الموجودة في خلايا الجسم.</p>
                                <p>تنتقل الصفات الوراثية من خلال الكروموسومات التي يحملها كل من الأب والأم، حيث يرث الأبناء مجموعة من الجينات من كلا الوالدين، مما يؤدي إلى ظهور صفات معينة لديهم.</p>
                                <p>وتنقسم الصفات الوراثية إلى نوعين رئيسيين:</p>
                                <ul>
                                    <li><b>صفات سائدة:</b> تظهر عند وجودها حتى لو كانت من أحد الوالدين فقط</li>
                                    <li><b>صفات متنحية:</b> لا تظهر إلا إذا وُجدت من كلا الوالدين</li>
                                </ul>
                                <p>فهم الصفات الوراثية يساعدنا على تفسير أوجه التشابه والاختلاف بين الأفراد، كما يوضح كيف تنتقل بعض الصفات عبر الأجيال.</p>
                                <h3>نقاط مهمة</h3>
                                <ul>
                                    <li>الجينات هي المسؤولة عن نقل الصفات الوراثية</li>
                                    <li>الكروموسومات تحمل الجينات داخل الخلايا</li>
                                    <li>كل فرد يرث صفاته من الأب والأم معًا</li>
                                    <li>الصفات قد تكون سائدة أو متنحية</li>
                                </ul>
                                <h3>مثال توضيحي</h3>
                                <p>إذا كان الأب يحمل صفة لون عينين بني (سائدة)، والأم تحمل صفة لون عينين زرقاء (متنحية)، فمن المرجح أن يظهر لون العينين البني لدى الأبناء.</p>
                                <h3>خلاصة الدرس</h3>
                                <p>الصفات الوراثية تحدد شكل وخصائص الكائن الحي، وتنتقل عبر الجينات من جيل إلى آخر، مع وجود صفات سائدة وأخرى متنحية تتحكم في ظهور هذه الصفات.</p>
                            </v-window-item>
                            <v-window-item value="2">
                                <div class="img-box">
                                    <v-img :src="dna" width="200"></v-img>
                                </div>
                                <div class="img-box">
                                    <v-img :src="dna2" width="200"></v-img>
                                </div>
                            </v-window-item>
                            <v-window-item value="3">
                                <h3>اطرح سؤالك</h3>
                                <p>اكتب سؤالك أو استفسارك حول الدرس، وسيقوم المدرّس أو الطلاب الآخرون بمساعدتك في أقرب وقت.</p>
                                <v-textarea variant="outlined" no-resize label="اكتب تعليقك هنا..."></v-textarea>
                                <v-btn class="text-golden" color="primary">إضافة تعليق</v-btn>
                            </v-window-item>
                            <v-window-item value="4">
                                    <div class="quiz">

        <!-- Title -->
        <h2 class="title">📝 الاختبار</h2>

        <!-- Progress -->
        <div class="progress">
        <div
            class="progress-bar"
            :style="{ width: progress + '%' }"
        ></div>
        </div>

        <!-- Questions -->
        <div v-for="(q, index) in questions" :key="index" class="question-card">
        <h3>{{ index + 1 }}. {{ q.question }}</h3>

        <div class="options">
            <label
            v-for="(option, i) in q.options"
            :key="i"
            :class="[
                'option',
                selectedAnswers[index] === option ? 'selected' : '',
                showResult && option === q.correct ? 'correct' : '',
                showResult &&
                selectedAnswers[index] === option &&
                option !== q.correct
                ? 'wrong'
                : ''
            ]"
            >
            <input
                type="radio"
                :name="'q' + index"
                :value="option"
                v-model="selectedAnswers[index]"
                :disabled="showResult"
            />
            {{ option }}
            </label>
        </div>
        </div>

        <!-- Submit -->
        <v-btn
        class="btn"
        :disabled="!allAnswered || showResult"
        @click="submitQuiz"
        >
        إرسال الإجابات
        </v-btn>

        <!-- Result -->
        <div v-if="showResult" class="result">
        <h3>🎉 نتيجتك: {{ score }} / {{ questions.length }}</h3>

        <p v-if="score >= 4">أداء ممتاز 👏</p>
        <p v-else-if="score >= 3">جيد 👍</p>
        <p v-else>يُفضّل إعادة مشاهدة الدرس 📚</p>

        <div class="actions">
            <button class="btn" @click="resetQuiz">🔁 إعادة المحاولة</button>
            <button class="btn next">⏭️ الدرس التالي</button>
        </div>
        </div>

    </div>
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
import dna from "@/assets/imgs/DNA.png";
import dna2 from "@/assets/imgs/DNA2.png";
import { ref } from 'vue';

const panels = ref([1, 2, 3, 4, 5, 6]);
const tab = ref('1');

const questions = ref([
  {
    question: "ما المقصود بالصفات الوراثية؟",
    options: [
      "صفات يكتسبها الإنسان من البيئة",
      "صفات تنتقل من الآباء إلى الأبناء",
      "صفات مؤقتة",
      "صفات غير مهمة"
    ],
    correct: "صفات تنتقل من الآباء إلى الأبناء"
  },
  {
    question: "الجينات توجد في:",
    options: ["الدم", "المعدة", "الكروموسومات", "الجلد"],
    correct: "الكروموسومات"
  },
  {
    question: "الصفة السائدة هي:",
    options: [
      "لا تظهر أبدًا",
      "تظهر فقط في حالات نادرة",
      "تظهر عند وجودها حتى لو من أحد الوالدين",
      "تختفي دائمًا"
    ],
    correct: "تظهر عند وجودها حتى لو من أحد الوالدين"
  },
  {
    question: "الصفة المتنحية تظهر عندما:",
    options: [
      "تكون موجودة في أحد الوالدين فقط",
      "تكون موجودة في كلا الوالدين",
      "تكون ضعيفة",
      "لا تظهر أبدًا"
    ],
    correct: "تكون موجودة في كلا الوالدين"
  },
  {
    question: "الصفات الوراثية تنتقل عبر:",
    options: ["الطعام", "الماء", "الجينات", "الهواء"],
    correct: "الجينات"
  }
]);

const selectedAnswers = ref(Array(questions.value.length).fill(null));
const showResult = ref(false);
const score = ref(0);

const allAnswered = computed(() =>
  selectedAnswers.value.every((a) => a !== null)
);

const progress = computed(() => {
  const answered = selectedAnswers.value.filter((a) => a !== null).length;
  return (answered / questions.value.length) * 100;
});

const submitQuiz = () => {
  score.value = 0;

  questions.value.forEach((q, i) => {
    if (selectedAnswers.value[i] === q.correct) {
      score.value++;
    }
  });

  showResult.value = true;
};

const resetQuiz = () => {
  selectedAnswers.value = Array(questions.value.length).fill(null);
  showResult.value = false;
  score.value = 0;
};
</script>

<style lang="scss" scoped>
$primary: #083699;
$success: #22c55e;
$error: #ef4444;
$bg: #ffffff;
$card: #f9fafb;
$text: #222;
$border: #e5e7eb;

.quiz {
  max-width: 700px;
  margin: auto;
  color: $text;
  background: $bg;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);

  .title {
    text-align: center;
    margin-bottom: 20px;
    color: #111;
  }

  .progress {
    background: $border;
    height: 6px;
    border-radius: 10px;
    margin-bottom: 20px;
    overflow: hidden;

    .progress-bar {
      height: 100%;
      background: $primary;
      border-radius: 10px;
      transition: width 0.3s ease;
    }
  }

  .question-card {
    background: $card;
    padding: 20px;
    margin-bottom: 15px;
    border-radius: 12px;
    border: 1px solid $border;

    h3 {
      color: #111;
      margin-bottom: 10px;
    }

    .options {
      .option {
        display: block;
        margin: 8px 0;
        padding: 12px;
        background: $bg;
        border-radius: 8px;
        cursor: pointer;
        border: 1px solid $border;
        transition: 0.2s;

        &:hover {
          background: #f3f4f6;
        }

        &.selected {
          border: 1px solid $primary;
          background: #fff1f2;
        }

        &.correct {
          background: lighten($success, 45%);
          border-color: $success;
        }

        &.wrong {
          background: lighten($error, 40%);
          border-color: $error;
        }

        input {
          margin-right: 8px;
        }
      }
    }
  }

  .btn {
    background: $primary;
    border: none;
    padding: 12px;
    width: 100%;
    margin-top: 15px;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    font-weight: bold;
    transition: 0.2s ease;

    &:hover {
      background: darken($primary, 5%);
    }

    &:disabled {
      background: #d1d5db;
      cursor: not-allowed;
    }
  }

  .result {
    text-align: center;
    margin-top: 20px;
    background: $card;
    padding: 20px;
    border-radius: 12px;
    border: 1px solid $border;

    .actions {
      display: flex;
      gap: 10px;
      margin-top: 15px;

      .next {
        background: #6b7280;

        &:hover {
          background: #4b5563;
        }
      }
    }
  }
}
</style>