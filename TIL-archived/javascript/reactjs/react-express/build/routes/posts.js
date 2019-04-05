'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fs = require('fs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function (req, res) {
    res.send('posts');
});

router.get('/read/:id', function (req, res) {
    res.send('You ar reading post ' + _fs.read.params.id);
});

exports.default = router;