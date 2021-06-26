"use strict";

const OfficeC2RAPI = require("../OfficeC2RAPI");

const getBranch = "Microsoft_LTSC" + "     ";
const getFFN = "1d2d2ea6-1680-4c56-ac58-a441c8c24ff9";

const getLastUpdated = "210617-2120";
const getBuild = "16.0.10376.20002";

new OfficeC2RAPI().print(getBranch, getFFN, getLastUpdated, getBuild);
