import mongoose from "mongoose";

const profileIconError = new mongoose.Schema({
    playerName: {type: String},
    serverValue: {type: Array},
    type: {type: String},
    errorData: {type: String}
})

const argumentIconError = new mongoose.Schema({
    playerName: {type: String},
    serverValue: {type: Array},
    type: {type: String},
    errorData: {type: String}
})

const traitsIconError = new mongoose.Schema({
    playerName: {type: String},
    serverValue: {type: Array},
    type: {type: String},
    errorData: {type: String}
})

const unitsIconError = new mongoose.Schema({
    playerName: {type: String},
    serverValue: {type: Array},
    type: {type: String},
    errorData: {type: String}
})

const itemsIconError = new mongoose.Schema({
    playerName: {type: String},
    serverValue: {type: Array},
    type: {type: String},
    errorData: {type: String}
})

export const profileErrorModel = mongoose.model('profileIconError', profileIconError);
export const argumentErrorModel = mongoose.model('argumentIconError', argumentIconError);
export const traitsErrorModel = mongoose.model('traitsIconError', traitsIconError);
export const unitsErrorModel = mongoose.model('unitsIconError', unitsIconError);
export const itemsErrorModel = mongoose.model('itemsIconError', itemsIconError);