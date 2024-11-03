const path = require("path") // path 모듈을 추가

module.exports = {
  extends: [
    "@titicaca/eslint-config-triple",
    "@titicaca/eslint-config-triple/requiring-type-checking",
    "next/core-web-vitals",
    "prettier",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: path.resolve(__dirname, "tsconfig.json"), // path 모듈을 사용
      },
    },
  ],
}
