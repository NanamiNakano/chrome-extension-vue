import antfu from "@antfu/eslint-config"
import unocss from "@unocss/eslint-config/flat"
import globals from "globals"

export default antfu({
  vue: true,
  stylistic: {
    quotes: "double",
  },
  languageOptions: {
    globals: {
      ...globals.webextensions,
      ...globals.browser,
    },
  },
}, unocss)
