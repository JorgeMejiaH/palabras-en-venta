import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SignUpView from "@/views/SignUpView.vue";
import ValidationCodePage from "../views/ValidationCodePageView.vue";
import PasswordChangePage from "../views/PasswordChangeView.vue";
import UserGenrePage from "../views/LiteraryGenresPageView.vue";
import UserPassChange from "../views/UserPassChangeview.vue";
import GenreSelectionView from "@/views/GenreSelectionView.vue"
import UserInfoView from "@/views/UserInfoView.vue";
import UserInfoEditView from "@/views/UserInfoEditView.vue"
import PaymentCardView from "@/views/PaymentCardView.vue"
import PaymentCardEditView from "@/views/PaymentCardEditView.vue"


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
    path: "/genre-select",
    name: "genre-select",
    component: GenreSelectionView,
  },
  {
    path: "/user-info",
    name: "user-info",
    component: UserInfoView,
  },
  {
  path: "/user-info-edit",
  name: "user-info-edit",
  component: UserInfoEditView,
  },
  {
    path: "/validation-code",
    name: "validation-code",
    component: ValidationCodePage,
  },
  {
    path : "/password-change",
    name: "password-change",
    component: PasswordChangePage,
  },
  {
    path: "/user-genre-edit",
    name: "/user-genre-edit",
    component: UserGenrePage,
  },
  {
    path: "/user-pass-edit",
    name: "/user-pass-edit",
    component: UserPassChange,
  },
  {
    path: "/user-card",
    name: "user-card",
    component: PaymentCardView,
  },
  {
    path: "/user-card-edit",
    name: 'user-card-edit',
    component: PaymentCardEditView,

  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
