import express from "express";

export const studentLogin = (req, res) => {
    const {email, password} = req.body;
    res.send("login successfully");
    console.log(`${email} and ${password}`);
}

export const facultyLogin = (req, res) => {
    const {email, password} = req.body;
    res.send("faculty login successful!");
    console.log(`${email} and ${password}`);
}