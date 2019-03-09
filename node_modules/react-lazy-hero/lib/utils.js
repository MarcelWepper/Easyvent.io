'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.clamp = clamp;
exports.scrolledOverPercent = scrolledOverPercent;
exports.resizeToRatio = resizeToRatio;
exports.resizeToContain = resizeToContain;
exports.resizeToCover = resizeToCover;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * Clamp a value between two other values
 * @param {number} number
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
function clamp(number) {
    var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    return Math.min(Math.max(number, min), max);
}

/*
 * Get the percentage scrolled over an element
 * @param {HTMLElement} element
 * @return {number} value between 0 and 1
 */
function scrolledOverPercent(element) {
    var scrolled = window.pageYOffset;
    var height = element.offsetHeight;
    var top = element.offsetTop;
    var percent = scrolled / (top + height);

    return clamp(percent);
}

/*
 * Resize to original aspect ratio
 * @param {Object} dimensions The original dimensions
 * @param {number} dimensions.height
 * @param {number} dimensions.width
 * @param {string} prop Property name
 * @param {number} value Current property value
 * @param {Object} new height and width
 */
function resizeToRatio(dimensions, prop, value) {
    var _ref;

    var otherProp = prop === 'width' ? 'height' : 'width';
    var otherPropValue = Math.round(value * dimensions[otherProp] / dimensions[prop]);

    return _ref = {}, _defineProperty(_ref, otherProp, otherPropValue), _defineProperty(_ref, prop, value), _ref;
}

/*
 * Simulate "background-position: contain"
 * @param {Object} dimensions The original dimensions
 * @param {number} dimensions.height
 * @param {number} dimensions.width
 * @param {Object} maxDimensions The available space
 * @param {number} maxDimensions.height
 * @param {number} maxDimensions.width
 * @return {Object} new height and width
 */
function resizeToContain(dimensions, maxDimensions) {
    return Object.keys(dimensions).reduce(function (prevDimensions, prop) {
        return prevDimensions[prop] > maxDimensions[prop] ? resizeToRatio(prevDimensions, prop, maxDimensions[prop]) : prevDimensions;
    }, dimensions);
}

/*
 * Simulate "background-position: cover"
 * @param {Object} dimensions The original dimensions
 * @param {number} dimensions.height
 * @param {number} dimensions.width
 * @param {Object} maxDimensions The available space
 * @param {number} maxDimensions.height
 * @param {number} maxDimensions.width
 * @return {Object} new height and width
 */
function resizeToCover(dimensions, maxDimensions) {
    var dimensionsAfterContain = resizeToContain(dimensions, maxDimensions);

    return Object.keys(dimensions).reduce(function (prevDimensions, prop) {
        return prevDimensions[prop] < maxDimensions[prop] ? resizeToRatio(prevDimensions, prop, maxDimensions[prop]) : prevDimensions;
    }, dimensionsAfterContain);
}