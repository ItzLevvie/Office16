"use strict";

const OfficeC2RAPI = require("../OfficeC2RAPI");

const getBranch = "Dogfood_DevMain" + "    ";
const getFFN = "ea4a4090-de26-49d7-93c1-91bff9e53fc3";

const getLastUpdated = "210625-2045";
const getBuild = "16.0.14225.20000";

new OfficeC2RAPI().print(getBranch, getFFN, getLastUpdated, getBuild);
