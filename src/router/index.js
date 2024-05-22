import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SignUpView from "@/views/SignUpView.vue";
import ValidationCodePage from "@/components/LoginPage/ValidationCodePage.vue";
import GenreMainView from "@/components/BookGenre/GenreMainView.vue";
import BookDetailView from "@/components/BookGenre/BookDetailView.vue";
import BestSellers from "@/components/BestSellers/BestSellers.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: SignUpView,
  },
  {
    path: "/validation-code",
    name: "validation-code",
    component: ValidationCodePage,
  },
  {
    path: "/genre-books",
    name: "genre-books",
    component: GenreMainView,
  },

  {
    path: "/book/:id",
    name: "BookDetail",
    component: BookDetailView,
  },

  {
    path: "/bestsellers",
    name: "BestSeller",
    component: BestSellers,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
