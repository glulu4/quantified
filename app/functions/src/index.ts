/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

exports.add = require("./add");

exports.get = require("./get");

exports.delete = require("./delete");

exports.update = require("./update");

exports.scheduler = require("./scheduler");
