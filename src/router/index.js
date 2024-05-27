import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SignUpView from "@/views/SignUpView.vue";
import ValidationCodePage from "../views/ValidationCodePageView.vue";
import PasswordChangePage from "../views/PasswordRecoveryView.vue";
import UserPasswordChangeView from "../views/UserPasswordChangeView.vue";
import UserInfoView from "@/views/UserInfoView.vue";
import UserInfoEditView from "@/views/UserInfoEditView"
import UserAddressView from "@/views/UserAddressView"
import UserAddressEditView from "@/views/UserAddressEditView"
import UserAddAddressView from "@/views/UserAddAddressView"
import RecoveryEmailView from "@/views/RecoveryEmailView.vue";
import GenreEditView from "@/views/GenreEditView"
import UserPaymentView from "@/views/UserPaymentView";
import AddPaymentCard from "@/views/AddPaymentCard"
import CardView from "@/views/CardView"
import Test from "@/views/HomePage"

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
    path: "/address",
    name: "adress",
    component: UserAddressView,
  },
  {
    path: "/address-edit",
    name: "adress-edit",
    component: UserAddressEditView,
  },
  {
    path: "/add-address",
    name: "add-adress",
    component: UserAddAddressView,
  },
  {
    path : "/password-change",
    name: "password-change",
    component: PasswordChangePage,
  },
  {
    path: "/user-pass-edit",
    name: "/user-pass-edit",
    component: UserPasswordChangeView ,
  },
  {
    path: "/recovery-email",
    name: "recovery-email",
    component: RecoveryEmailView,
  },
  {
    path: "/genre-edit",
    name: "genre-edit",
    component: GenreEditView,
  },
  {
    path: "/payment-method",
    name: "payment-method",
    component: UserPaymentView,
  },
  {
    path: "/card-info",
    name: "card-info",
    component: CardView,
  },
  {
    path: "/add-card",
    name: "add-card",
    component: AddPaymentCard,
  },
  {
    path: "/test",
    name: "test",
    component: Test,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
