"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.smartkeyRouter = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.smartkeyRouter = router;
router.get("/smartkeys", (req, res) => {
    return res.status(200).json({ message: "All smart keys" });
});
