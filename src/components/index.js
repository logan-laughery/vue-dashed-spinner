import Vue from "vue";
import DashedSpinner from "./DashedSpinner.vue";

const Components = {
  DashedSpinner,
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
