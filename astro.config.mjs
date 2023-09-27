import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";
import basicSsl from "@vitejs/plugin-basic-ssl";
const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      //accessToken: env.STORYBLOK_TOKEN,
      accessToken: "DsWlMNHzCzld63EnRqwPVQtt",
      apiOptions: {
        region: "",
      },
      components: {
        "button-item": "storyblok/ButtonItem",
        hero: "storyblok/hero/Hero",
        "image-text-section": "storyblok/ImageTextSection",
        navbar: "storyblok/navbar/Navbar",
        "nav-link": "storyblok/navbar/Navlink",
        page: "storyblok/Page",

        services: "storyblok/services/Services",
        serviceCard: "storyblok/services/ServiceCard",
        serviceText: "storyblok/services/ServiceText",

        footerContactUs: "storyblok/footer/FooterContactUs",
        "contact-item": "storyblok/footer/ContactItem",

        oneLineFooter: "storyblok/onelinefooter/OneLineFooter",
        SocialLogo: "storyblok/onelinefooter/SocialLogo",

        footer: "storyblok/footer/Footer",
        "about-item": "storyblok/footer/AboutItem",
        "terms-item": "storyblok/footer/TermsItem",
        "social-item": "storyblok/footer/SocialItem",
      },
    }),
    tailwind(),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});
