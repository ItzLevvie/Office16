"use strict";

const OfficeC2RAPI = require("../OfficeC2RAPI");

const getBranch = "Dogfood_DCEXT" + "      ";
const getFFN = "c4a7726f-06ea-48e2-a13a-9d78849eb706";

const getLastUpdated = "201110-1308";
const getBuild = "16.0.11929.20974";

new OfficeC2RAPI().print(getBranch, getFFN, getLastUpdated, getBuild);
