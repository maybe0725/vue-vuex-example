# Vuex Tutorial

<br/>

## [Vuex가 무엇인가요?](https://vuex.vuejs.org/kr/)

<br/>

## 1. 프로젝트 생성

```sh
# Vue CLI 프로젝트 생성
# vue create <project_name>
$ vue create vue-vuex-example

  Vue CLI v3.10.0
  ? Please pick a preset: Manually select features
  ? Check the features needed for your project: Babel, Router, Vuex
  ? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
  ? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In package.json
  ? Save this as a preset for future projects? No

# vue-vuex-example directory 이동
$ cd vue-vuex-example

# project run
$ npm run serve
```

<br/>

## 2. vuetify plugin 추가

- https://vuetifyjs.com/ko/
- https://vuetifyjs.com/ko/getting-started/quick-start

`vuetify 설치.`

```sh
# vue-cli-plugin-vuetify
$ vue add vuetify

  ...
  ✔  Successfully installed plugin: vue-cli-plugin-vuetify
  ...
  ? Choose a preset: Configure (advanced)
  ? Use a pre-made template? (will replace App.vue and HelloWorld.vue) Yes
  ? Use custom theme? No
  ? Use custom properties (CSS variables)? No
  ? Select icon font Font Awesome 5
  ? Use fonts as a dependency (for Electron or offline)? No
  ? Use a-la-carte components? No
  ? Use babel/polyfill? Yes
  ? Select locale English
  ...
  ✔  Successfully invoked generator for plugin: vue-cli-plugin-vuetify
  ...
```

`index.html 파일 FontAwesome CDN 확인`

```html
<link
  href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
  rel="stylesheet"
/>
```

`무료 버전의 FontAwesome 설치.`

```sh
#
$ yarn add @fortawesome/fontawesome-free -D
# OR
$ npm install @fortawesome/fontawesome-free -D
```

`vuetify.js 확인`

```javascript
import "@fortawesome/fontawesome-free/css/all.css"; // Ensure you are using css-loader
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "fa"
  }
});
```

- VUEX STATE
- VUEX GETTERS
- VUEX MAPPING GETTERS
- VUEX MUTATIONS
- VUEX ACTIONS
