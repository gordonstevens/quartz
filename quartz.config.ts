import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */


/*
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
        NOTE using https://fontjoy.com/ and https://www.vandelaydesign.com/google-font-pairings/ to get font pairings
*/
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🪴 Notebook",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      
    },
    locale: "en-CA",
    baseUrl: "notebook.ro4r.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Lustria",
        body: "Source Sans Pro",
        code: "Raleway",
      },
      colors: {
        lightMode: {
          light: "#eff1f5",
          lightgray: "#9ca0b0",
          gray: "#7287fd",
          darkgray: "#4c4f69",
          dark: "#4c4f69",
          secondary: "#1e66f5",
          tertiary: "#40a02b",
          highlight: "rgba(30, 102, 245, 0.15)",
        },
        darkMode: {
          light: "#303446",
          lightgray: "#737994",
          gray: "#babbf1",
          darkgray: "#c6d0f5",
          dark: "#c6d0f5",
          secondary: "#8caaee",
          tertiary: "#a6d189",
          highlight: "rgba(140, 170, 238, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
