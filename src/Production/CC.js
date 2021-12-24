"use strict";

const OfficeC2RAPI = require("../OfficeC2RAPI");

const getBranch = "Production_CC" + "      ";
const getFFN = "492350f6-3a01-4f97-b9c0-c7c6ddf67d60";

const getLastUpdated = "211219-1605";
const getBuild = "16.0.14701.20262";

new OfficeC2RAPI().print(getBranch, getFFN, getLastUpdated, getBuild);
