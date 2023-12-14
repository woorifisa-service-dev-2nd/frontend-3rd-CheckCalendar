module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    // 괄호를 사용하는 방법: "arrow-parens" 규칙을 사용하여 항상 괄호를 사용하도록 설정
    "arrow-parens": ["error", "always"],

    // 띄어쓰기: "indent" 규칙을 사용하여 들여쓰기를 탭으로 설정
    "indent": ["error", "tab"],

    // 콤마 위치: "comma-style" 규칙을 사용하여 콤마를 줄 끝에 배치
    "comma-style": ["error", "last"],

    // 세미콜론 사용: "semi" 규칙을 사용하여 항상 세미콜론을 사용하도록 설정
    "semi": ["error", "always"],

    // 줄 간격: "no-multiple-empty-lines" 규칙을 사용하여 연속된 빈 줄을 허용하지 않음
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],

    // 주석 스타일: "multiline-comment-style" 규칙을 사용하여 여러 줄 주석 스타일을 강제
    "multiline-comment-style": ["error", "starred-block"],

    // 따음표 : "quotes" 규칙을 사용하여
    "quotes": ["error", "single"]
},
}
