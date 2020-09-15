'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.RNGalleryList = void 0;
const WelcomePage = require('./WelcomePage');
const CheckBoxExamplePage = require('./examples/CheckBoxExamplePage');
exports.RNGalleryList = [
    {
        key: 'Wecome',
        component: WelcomePage,
    },
    {
        key: 'CheckBox',
        component: CheckBoxExamplePage,
    },
];
exports.default = exports.RNGalleryList;
