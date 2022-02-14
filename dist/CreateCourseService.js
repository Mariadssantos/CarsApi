"use strict";
// import { req, res } from 'express';
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute({ name, duration, educator }) {
        console.log(name, duration, educator);
    }
}
exports.default = new CreateCourseService();
