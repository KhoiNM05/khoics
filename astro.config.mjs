// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
// export default {
//   integrations: [tailwind()],
// };


// https://astro.build/config
export default defineConfig({
    output: "static",
    base: "/khoics/",
    site: "https://khoinm05.github.io",
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeMathjax],
    },
    integrations:[tailwind(), mdx()],
});
