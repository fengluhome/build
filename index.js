/**
 * Created by lu on 2016/11/9.
 * 支持AMD CMD 文件打包方式
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
      (global.libName = factory());
}(this, (function () {
  'use strict';
}));