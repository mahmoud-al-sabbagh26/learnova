<template>
  <NuxtLayout>
    <v-app>
    <v-app-bar class="px-md-4 d-flex justify-space-between">
    <v-app-bar-title
      ><v-img src="/logo.png" width="200"></v-img
    ></v-app-bar-title>
    <v-list
      class="links d-none text-blue d-md-flex ml-lg-16"
      style="font-size: 20px; font-weight: bold"
      color="primary"
    >
      <v-list-item><NuxtLink :to="{name: 'index'}">الرئيسية</NuxtLink></v-list-item>
      <v-list-item><NuxtLink :to="{name: 'courses'}">الكورسات</NuxtLink></v-list-item>
      <v-list-item><NuxtLink :to="{name: 'teachers'}">المعلمين</NuxtLink></v-list-item>
      <v-list-item>تواصل معنا</v-list-item>
    </v-list>
    <div class="d-none d-md-block mr-lg-16">
      <v-text-field
        density="compact"
        variant="outlined"
        rounded
        append-inner-icon="mdi-magnify"
        hide-details
        class="search"
        width="300"
      ></v-text-field>
    </div>
    <v-menu class="d-md-none">
      <template v-slot:activator="{props}" width="200">
        <v-app-bar-nav-icon color="primary" v-bind="props" class="d-md-none d-lg-none"></v-app-bar-nav-icon>
      </template>

      <v-list color="primary">
        <v-list-item><NuxtLink :to="{name: 'index'}">الرئيسية</NuxtLink></v-list-item>
        <v-list-item><NuxtLink :to="{name: 'courses'}">الكورسات</NuxtLink></v-list-item>
        <v-list-item><NuxtLink :to="{name: 'teachers'}">المعلمين</NuxtLink></v-list-item>
        <v-list-item class="text-secondary" title="تواصل معنا"></v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
      <NuxtPage />
      <footer class="footer">
    <v-footer color="primary">
      <v-container>
        <v-row>
          <v-col cols="6" md="3">
            <h2 class="text-center">Learnova</h2>
            <p class="text-body-medium">منصة تعليمية تهدف لتقديم محتوى تفاعلي يساعد الطلاب على التعلم بسهولة</p>
          </v-col>
          <v-col cols="6" md="3">
            <h2 class="text-golden">روابط سريعة</h2>
            <ul style="list-style: none;padding: 0;">
              <li><v-icon>mdi-chevron-double-left</v-icon> الرئيسية</li>
              <li><v-icon>mdi-chevron-double-left</v-icon> الكورسات</li>
              <li><v-icon>mdi-chevron-double-left</v-icon> المعلمين</li>
              <li><v-icon>mdi-chevron-double-left</v-icon> تواصل معنا</li>
            </ul>
          </v-col>
          <v-col cols="6" md="3">
            <h2 class="text-golden">الكورسات</h2>
            <ul style="list-style: none;padding: 0;">
              <li>علوم</li>
              <li>رياضيات</li>
              <li>لغات</li>
              <li>برمجة وذكاء اصطناعي</li>
            </ul>
          </v-col>
          <v-col cols="6" md="3">
            <h2 class="text-golden">تواصل معنا</h2>
            <div class="icons d-flex justify-space-between ga-2">
              <v-icon style="font-size: 50px;cursor: pointer;">mdi-facebook</v-icon>
              <v-icon style="font-size: 50px;cursor: pointer;">mdi-instagram</v-icon>
              <v-icon style="font-size: 50px;cursor: pointer;">mdi-whatsapp</v-icon>
            </div>
          </v-col>
        </v-row>
        <v-row class="text-center">
          <v-col><p><v-icon>mdi-copyright</v-icon> 2026 Learnova - جميع الحقوق محفوظة</p></v-col>
        </v-row>
      </v-container>
    </v-footer>
  </footer>
    </v-app>
  </NuxtLayout>
</template>

<style lang="scss">
a {
  text-decoration: none;
}
.links a {
  color: #1c91fd;
  &.router-link-active {
    color: #083699;
  }
}

.v-menu a {
  color: #1c91fd;
  &.router-link-active {
    color: #083699;
  }
}

.search {
  @media (max-width: 767px) {
    width: 100px;
  }
}

.v-text-field {
  border: none;
  .v-field--appended {
    border: 2px solid #083699;
    &:focus {
    outline: none !important;
    border: none;
    }
    .v-icon {
      color: #083699;
    }
  }
  &:focus {
    outline: none !important;
    border: none;
  }
}
</style>
