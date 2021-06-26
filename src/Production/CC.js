"use strict";

const OfficeC2RAPI = require("../OfficeC2RAPI");

const getBranch = "Production_CC" + "      ";
const getFFN = "492350f6-3a01-4f97-b9c0-c7c6ddf67d60";

const getLastUpdated = "210622-1700";
const getBuild = "16.0.14026.20308";

new OfficeC2RAPI().print(getBranch, getFFN, getLastUpdated, getBuild);
