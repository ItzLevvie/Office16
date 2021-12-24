"use strict";

const OfficeC2RAPI = require("../OfficeC2RAPI");

const getBranch = "Dogfood_CC" + "         ";
const getFFN = "f3260cf1-a92c-4c75-b02e-d64c0a86a968";

const getLastUpdated = "211223-1520";
const getBuild = "16.0.14729.20190";

new OfficeC2RAPI().print(getBranch, getFFN, getLastUpdated, getBuild);
