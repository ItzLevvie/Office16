"use strict";

const OfficeC2RAPI = require("../OfficeC2RAPI");

const getBranch = "Microsoft_LTSC2021" + " ";
const getFFN = "86752282-5841-4120-ac80-db03ae6b5fdb";

const getLastUpdated = "210621-2305";
const getBuild = "16.0.14026.20308";

new OfficeC2RAPI().print(getBranch, getFFN, getLastUpdated, getBuild);
