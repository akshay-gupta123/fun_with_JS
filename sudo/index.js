#!/usr/bin/env node

const fs = require("fs")
const path = require("path")
const chalk = require("chalk")

const { lstat } = fs.promises
const tragetdir = process.argv[2] || process.cwd();

fs.readdir(tragetdir,async(err,filnames)=>{
    if(err){
        console.log(err)
    }
    const startPromises = filnames.map(filname=>{
        return lstat(path.join(tragetdir,filname))
    });
    const allstats = await Promise.all(startPromises);

    for(let stat of allstats){
        const index = allstats.indexOf(stat)
        if(stat.isFile()){
            console.log(chalk.gray(filnames[index]));
        }else{
            console.log(chalk.blueBright(filnames[index]));
        }
    }
});