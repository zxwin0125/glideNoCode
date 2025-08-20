import js from '@eslint/js'
import importSort from 'eslint-plugin-simple-import-sort'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import vueEslintParser, { parse } from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        computed: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        defineProps: 'readonly',
        onMounted: 'readonly',
        onUnmounted: 'readonly',
        ref: 'readonly',
        reactive: 'readonly',
        shallowRef: 'readonly',
        shallowReactive: 'readonly',
        toRef: 'readonly',
        toRefs: 'readonly',
        watch: 'readonly',
        watchEffect: 'readonly'
      }
    },
    name: 'xxx/vue/setup',
    plugins: {
      vue: pluginVue
    }
  },
  {
    files: ['**/*.{ts,tsx,vue}'],
    ignores: [],
    rules: {
      ...js.configs.recommended.rules,
      ...pluginVue.configs['flat/recommended'].rules,
      'no-unused-vars': 'error',
      'no-undef': 'warn',
      'no-console': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'vue/valid-define-emits': 'error'
    },
    languageOptions: {
      parser: vueEslintParser,
      parserOptions: {
        extraFileExtensions: ['.vue'],
        // ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true
        },
        parser: tsParser,
        sourceType: 'module'
      }
    },
    plugins: {
      vue: pluginVue,
      'simple-import-sort': importSort
    }
  }
]
