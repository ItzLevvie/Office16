"use strict";

const OfficeC2RAPI = require("../OfficeC2RAPI");

const getBranch = "Microsoft_LTSC2021" + " ";
const getFFN = "86752282-5841-4120-ac80-db03ae6b5fdb";

const getLastUpdated = "211217-2115";
const getBuild = "16.0.14332.20208";

new OfficeC2RAPI().print(getBranch, getFFN, getLastUpdated, getBuild);
