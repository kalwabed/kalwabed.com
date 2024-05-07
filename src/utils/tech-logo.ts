import LogoAstroIcon from "~icons/logos/astro-icon";
import LogosBootstrap from "~icons/logos/bootstrap";
import LogosExpress from "~icons/logos/express";
import LogosFirebase from "~icons/logos/firebase";
import LogosMongodbIcon from "~icons/logos/mongodb-icon";
import LogosNextjsIcon from "~icons/logos/nextjs-icon";
import LogosNuxtIcon from "~icons/logos/nuxt-icon";
import LogosReact from "~icons/logos/react";
import LogosSupabaseIcon from "~icons/logos/supabase-icon";
import LogosSvelteIcon from "~icons/logos/svelte-icon";
import LogosTailwindIcon from "~icons/logos/tailwindcss-icon";
import LogosVue from "~icons/logos/vue";

export const techList: Record<
  string,
  { label?: string; Logo: typeof LogosNextjsIcon }
> = {
  nextjs: {
    label: "Next.js",
    Logo: LogosNextjsIcon,
  },
  svelte: {
    label: "Svelte",
    Logo: LogosSvelteIcon,
  },
  react: {
    label: "React",
    Logo: LogosReact,
  },
  express: {
    label: "Express",
    Logo: LogosExpress,
  },
  bootstrap: {
    label: "Bootstrap",
    Logo: LogosBootstrap,
  },
  mongodb: {
    label: "Mongo DB",
    Logo: LogosMongodbIcon,
  },
  tailwind: {
    label: "Tailwind CSS",
    Logo: LogosTailwindIcon,
  },
  firebase: {
    label: "Firebase",
    Logo: LogosFirebase,
  },
  astro: {
    label: "Astro",
    Logo: LogoAstroIcon,
  },
  vue: {
    label: "Vue",
    Logo: LogosVue,
  },
  nuxtjs: {
    label: "Nuxt.js",
    Logo: LogosNuxtIcon,
  },
  supabase: {
    label: "Supabase",
    Logo: LogosSupabaseIcon,
  },
};
