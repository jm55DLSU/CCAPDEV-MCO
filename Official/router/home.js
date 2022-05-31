import express from 'express';

const homeNav = express.Router();

//Utilities
import * as tempDB from '../utils/tempDB.js';
import * as format from '../utils/formatting.js'

//Home
homeNav.get('/home', (req, res)=>{
    console.log("Request: " + req.socket.remoteAddress + ":" + req.socket.remotePort + " => " + req.url);
    /**
     * 
     * CHECK IF USER IS LOGGED IN. IF SO, THEN RENDER THE PAGE BELOW, ELSE THEN REDIRECT BACK TO LOGIN.
     * 
     */
    res.render("home", {
        title: "Home - Budol Finds",
        currentUser: tempDB.currentUser,
        //likes: tempDB.likes,
        posts: tempDB.posts,
        helpers: {
            fullName(fname, mname, lname){return format.formalName(fname,mname,lname);},
            simpleDateTime(dt){return format.simpleDateTime(dt);},
            likes(like){return format.pluralInator('Like',like);},
            btnLiked(postHash){
                if(tempDB.isLiked(tempDB.currentUser.userId,postHash))
                    return "Liked";
                return "Like";
            },
            editable(postUserId){
                if(postUserId === tempDB.currentUser.userId)
                    return "block";
                else
                    return "none";
            }
        }
    });
});

export default homeNav;
console.log("Router: home.js loaded!");