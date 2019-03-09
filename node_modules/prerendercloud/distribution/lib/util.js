"use strict";

function urlPathIsHtml(urlPath) {
  var basename = urlPath.split("/").pop().replace(/\?.*/, ""); // remove query params

  return basenameIsHtml(basename);
}

function basenameIsHtml(basename) {
  if (basename === "") return true;

  // doesn't detect index.whatever.html (multiple dots)
  var hasHtmlOrNoExtension = !!basename.match(/^(([^.]|\.html?)+)$/);

  if (hasHtmlOrNoExtension) return true;

  // hack to handle basenames with multiple dots: index.whatever.html
  var endsInHtml = !!basename.match(/.html?$/);

  if (endsInHtml) return true;

  // hack to detect extensions that are not HTML so we can handle
  // paths with dots in them
  var endsInOtherExtension = basename.match(/\.[a-zA-Z0-9]{1,5}$/);
  if (!endsInOtherExtension) return true;

  return false;
}

function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === "[object Function]";
}

module.exports = { urlPathIsHtml: urlPathIsHtml, basenameIsHtml: basenameIsHtml, isFunction: isFunction };