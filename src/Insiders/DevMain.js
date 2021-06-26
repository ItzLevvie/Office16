"use strict";

const OfficeC2RAPI = require("../OfficeC2RAPI");

const getBranch = "Insiders_DevMain" + "   ";
const getFFN = "5440fd1f-7ecb-4221-8110-145efaa6372f";

const getLastUpdated = "210623-1730";
const getBuild = "16.0.14217.20002";

new OfficeC2RAPI().print(getBranch, getFFN, getLastUpdated, getBuild);
