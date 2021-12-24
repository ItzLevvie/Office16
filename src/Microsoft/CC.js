"use strict";

const OfficeC2RAPI = require("../OfficeC2RAPI");

const getBranch = "Microsoft_CC" + "       ";
const getFFN = "5462eee5-1e97-495b-9370-853cd873bb07";

const getLastUpdated = "211221-0635";
const getBuild = "16.0.14729.20178";

new OfficeC2RAPI().print(getBranch, getFFN, getLastUpdated, getBuild);
