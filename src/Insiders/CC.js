"use strict";

const OfficeC2RAPI = require("../OfficeC2RAPI");

const getBranch = "Insiders_CC" + "        ";
const getFFN = "64256afe-f5d9-4f86-8936-8840a6a4f5be";

const getLastUpdated = "210626-1425";
const getBuild = "16.0.14131.20250";

new OfficeC2RAPI().print(getBranch, getFFN, getLastUpdated, getBuild);
