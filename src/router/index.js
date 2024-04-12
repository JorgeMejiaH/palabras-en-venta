import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SignUpView from "@/views/SignUpView.vue";
import GenreSelection from "@/views/GenreSelection.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { background: "registerBackground.png" },
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
    component: GenreSelection,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const background = to.meta.background;
  if (background) {
    const resolvedBackground = resolveBackgroundPath(background);
    document.body.style.backgroundImage = `url('${resolvedBackground}')`;
  } else {
    document.body.style.backgroundImage = ""; // Restablecer la imagen de fondo
  }
  next();
});

function resolveBackgroundPath(path) {
  return process.env.BASE_URL + "src/assets/" + path;
}

export default router;
