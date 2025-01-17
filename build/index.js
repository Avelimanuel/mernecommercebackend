"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const smartkey_1 = require("./routes/smartkey");
dotenv_1.default.config();
const port = process.env.PORT;
const dbUri = process.env.DATABASE_URI;
const app = (0, express_1.default)();
const dbConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(dbUri);
        console.log(`Database connected`);
        app.listen(port, () => {
            console.log(`Server runing on port ${port}`);
        });
    }
    catch (error) {
        console.log(`Connection to database has failed ${error}`);
    }
});
dbConnection();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/smartkeys", smartkey_1.smartkeyRouter);
