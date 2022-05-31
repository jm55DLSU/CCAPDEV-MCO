import { getDB } from '../conn.js';

const likeCollection = getDB().collection('likes');

export function checkLikes(){
    return likeCollection.find({}).toArray();
}


console.log("DB.Controller likeController.js loaded");