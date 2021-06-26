"use strict";

const OfficeC2RAPI = require("../OfficeC2RAPI");

const getBranch = "Dogfood_CC" + "         ";
const getFFN = "f3260cf1-a92c-4c75-b02e-d64c0a86a968";

const getLastUpdated = "210625-2030";
const getBuild = "16.0.14131.20250";

new OfficeC2RAPI().print(getBranch, getFFN, getLastUpdated, getBuild);
