import { defineRule } from "vee-validate";
import {
  alpha_dash,
  alpha_num,
  alpha_spaces,
  alpha,
  between,
  confirmed,
  digits,
  dimensions,
  email,
  ext,
  image,
  integer,
  is_not,
  is,
  length,
  max_value,
  max,
  mimes,
  min_value,
  min,
  not_one_of,
  numeric,
  one_of,
  regex,
  required,
  size,
  url,
} from "@vee-validate/rules";
// import * as rules from "@vee-validate/rules";
export default defineNuxtPlugin((nuxtApp ) => {
  
  defineRule('alpha_dash', alpha_dash);
  defineRule('alpha_num', alpha_num);
  defineRule('alpha_spaces', alpha_spaces);
  defineRule('alpha', alpha);
  defineRule('between', between);
  defineRule('confirmed', confirmed);
  defineRule('digits', digits);
  defineRule('dimensions', dimensions);
  defineRule('email', email);
  defineRule('ext', ext);
  defineRule('image', image);
  defineRule('integer', integer);
  defineRule('is_not', is_not);
  defineRule('is', is);
  defineRule('length', length);
  defineRule('max_value', max_value);
  defineRule('max', max);
  defineRule('mimes', mimes);
  defineRule('min_value', min_value);
  defineRule('min', min);
  defineRule('not_one_of', not_one_of);
  defineRule('numeric', numeric);
  defineRule('one_of', one_of);
  defineRule('regex', regex);
  defineRule('required', required);
  defineRule('size', size);
  defineRule('url', url);
  // Object.keys(rules) 
  //   .filter((k) => k !== "default")
  //   .forEach((rule) => {
  //     defineRule(rule, rules[rule]);
  //   //   console.log(rule);
  //   });
});
