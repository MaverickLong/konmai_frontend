// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/DownloadPage.vue"),
      },
      {
        path: "about",
        name: "About",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/AboutPage.vue"),
      },
      {
        path: "updates",
        name: "Update Logs",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/UpdateLogPage.vue"),
      },
      {
        path: "rules-of-inclusion",
        name: "Rules of Inclusion",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "@/views/RulesOfInclusionPage.vue"
          ),
      },
      {
        path: "apks-installation-guide",
        name: "APKs Installation Guide",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "@/views/ApksInstallationGuidePage.vue"
          ),
      },
      {
        path: "obb-installation-guide",
        name: "OBB Installation Guide",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "@/views/ObbInstallationGuidePage.vue"
          ),
      },
      {
        path: "tos",
        name: "Terms of Service",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "@/views/TermsOfServicePage.vue"
          ),
      },
      {
        path: "privacy",
        name: "Privacy Infos",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/PrivacyPage.vue"),
      },
      {
        path: "license",
        name: "Open Source Licenses",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/LicensePage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: document.getElementById(to.hash.substring(1).toLowerCase())
          .parentElement,
        top: 60,
      };
    }
  },
});

export default router;
