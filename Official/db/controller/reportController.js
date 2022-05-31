import { getDB } from '../conn.js';

const reportCollection = getDB().collection('reports');

export function checkReports(){
    return reportCollection.find({}).toArray();
}

console.log("DB.Controller reportController.js loaded");