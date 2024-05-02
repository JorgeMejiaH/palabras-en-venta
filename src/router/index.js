import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SignUpView from "@/views/SignUpView.vue";
import ValidationCodePage from "@/components/LoginPage/ValidationCodePage.vue";
import GenreSelectionView from "@/views/GenreSelectionView.vue"
import UserInfoView from "@/views/UserInfoView.vue";
import UserInfoEditView from "@/views/UserInfoEditView";
import AddressView from "@/views/UserAddressView";
import PasswordChangeView from "@/views/PasswordChangeView"


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
    path: "/genre-select",
    name: "genre-select",
    component: GenreSelectionView,
  },
  {
    path: "/user-info",
    name: "user-info",
    component: UserInfoView
  },
  {
    path: "/user-info-edit",
    name: "user-info-edit",
    component: UserInfoEditView
  },
  {
    path: "/address",
    name: "adress",
    component: AddressView,
  },
  {
    path: "/password-change",
    name: "assword-change",
    component: PasswordChangeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
