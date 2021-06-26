"use strict";

const OfficeC2RAPI = require("../OfficeC2RAPI");

const getBranch = "Microsoft_CC" + "       ";
const getFFN = "5462eee5-1e97-495b-9370-853cd873bb07";

const getLastUpdated = "210626-0845";
const getBuild = "16.0.14131.20250";

new OfficeC2RAPI().print(getBranch, getFFN, getLastUpdated, getBuild);
