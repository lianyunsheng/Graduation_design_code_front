import Vue from 'vue';
import VueI18n from "vue-i18n";
//引入iview组件的语言库
import zhLocale from "iview/src/locale/lang/zh-CN";
import enLocale from "iview/src/locale/lang/en-US";
import jaLocale from "iview/src/locale/lang/ja-JP";
//引入自己写的语言库
import zh_CN from "./lang/zh_CN";
import en_US from "./lang/en_US";
import ja_JP from "./lang/ja_JP";

Vue.use(VueI18n);
Vue.locale = () => {};

const messages = {
  zh:Object.assign(zh_CN,zhLocale),
  en:Object.assign(en_US,enLocale),
  ja:Object.assign(ja_JP,jaLocale)
};

const i18n = new VueI18n({
  locale:"zh",
  messages
});

export default i18n;