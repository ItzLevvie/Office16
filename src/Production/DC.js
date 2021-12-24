"use strict";

const OfficeC2RAPI = require("../OfficeC2RAPI");

const getBranch = "Production_DC" + "      ";
const getFFN = "7ffbc6bf-bc32-4f92-8982-f9dd17fd3114";

const getLastUpdated = "211223-1845";
const getBuild = "16.0.13801.21092";

new OfficeC2RAPI().print(getBranch, getFFN, getLastUpdated, getBuild);
