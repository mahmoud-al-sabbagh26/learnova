<template>
    <div class="teachers mt-16">
        <v-container>
            <v-row>
                <v-col class="text-center">
                    <h1 class="text-md-display-large text-primary font-weight-bold mb-2" style="text-shadow: 3px 4px 8px black;">تعرّف على معلمينا</h1>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="text-center mb-8">
                    <h2 class="text-secondary mt-0 text-body-meduim text-md-headline-large">نخبة من أفضل المدرسين والمتخصصين لتقديم تجربة تعليمية مميزة</h2>
                </v-col>
            </v-row>
            <v-row class="cards-row mt-16 mb-10">
                <v-col cols="12" md="6" lg="4">
                    <v-card class="card px-4 pt-16 pb-1 mb-4 mb-md-0" elevation="4">
                        <v-img :src="teacher" width="200" class="img mx-auto"></v-img>
                        <v-card-title class="text-center text-primary font-weight-bold text-headline-large mt-16 mb-0 pt-4">محمود عادل</v-card-title>
                        <h3 class="my-2"><span class="text-secondary"><v-icon>mdi-wallet-membership</v-icon> التخصص:</span> علوم</h3>
                        <h3 class="my-2"><span class="text-secondary"><v-icon>mdi-account-school</v-icon> عدد الطلاب:</span> 262</h3>
                        <h3 class="my-2"><span class="text-secondary"><v-icon>mdi-laptop-account</v-icon> عدد الكورسات:</span> 2</h3>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                    <v-card class="card px-4 pt-16 pb-1 mt-16 mt-md-0 mb-4 mb-lg-0" elevation="4">
                        <v-img :src="teacher" width="200" class="img mx-auto"></v-img>
                        <v-card-title class="text-center text-primary font-weight-bold text-headline-large mt-16 mb-0 pt-4">محمد طه</v-card-title>
                        <h3 class="my-2"><span class="text-secondary"><v-icon>mdi-wallet-membership</v-icon> التخصص:</span> علوم</h3>
                        <h3 class="my-2"><span class="text-secondary"><v-icon>mdi-account-school</v-icon> عدد الطلاب:</span> 231</h3>
                        <h3 class="my-2"><span class="text-secondary"><v-icon>mdi-laptop-account</v-icon> عدد الكورسات:</span> 2</h3>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                    <v-card class="card px-4 pt-16 pb-1 mt-16 mt-lg-0" elevation="4">
                        <v-img :src="teacher" width="200" class="img mx-auto"></v-img>
                        <v-card-title class="text-center text-primary font-weight-bold text-headline-large mt-16 mb-0 pt-4">محمد ابراهيم</v-card-title>
                        <h3 class="my-2"><span class="text-secondary"><v-icon>mdi-wallet-membership</v-icon> التخصص:</span> علوم</h3>
                        <h3 class="my-2"><span class="text-secondary"><v-icon>mdi-account-school</v-icon> عدد الطلاب:</span> 217</h3>
                        <h3 class="my-2"><span class="text-secondary"><v-icon>mdi-laptop-account</v-icon> عدد الكورسات:</span> 2</h3>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
import teacher from "@/assets/imgs/teacher.png";
</script>

<style lang="scss">
.teachers {
    .card {
        position: relative;
        overflow: visible;
        border-radius: 16px;
        .img {
            position: absolute;
            top: -95px;
            left: 50%;
            transform: translateX(-50%);
            filter: drop-shadow(0px -2px 6px black);
        }
    }
}
</style>