"use strict";

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasTrait = void 0;
const treeloom_1 = __importDefault(require("treeloom"));
/**
 * The typed version of treeloom's hasTrait, it narrows an item to the trait it was checked for.
 */
exports.hasTrait = treeloom_1.default.hasTrait;
treeloom_1.default.defineTrait('matrix.matrix', {
  keys: []
});
treeloom_1.default.defineTrait('matrix.layer', {
  keys: ['axis']
});
treeloom_1.default.defineTrait('matrix.row', {
  keys: ['axis']
});
treeloom_1.default.defineTrait('matrix.column', {
  keys: ['axis', 'point']
});