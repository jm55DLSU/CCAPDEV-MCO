/**
 * ======================================================================
 * 
 *                              COMMENT JS
 *                  
 *                  THIS JS FILE CONTAINS THE OBJECT 
 *                  CONSTRUCTOR FOR COMMENT OBJECT.
 * 
 *                  TO BE CONVERTED TO CLASS FILE IF NEEDED
 * 
 *                   YES, 'TWAS DESIGNED/WRITTEN 
 *                      IN AN OOP PARADIGM.
 * 
 * ======================================================================
 */

/**
 * Comment Object
 * @param {User} user User that posted the comment
 * @param {string} comment_text Content of comment
 * @param {string} posthash Post that it is attached to 
 * @param {Date} timedate Date and time of the comment posted
 */
const Comment = function(user, comment_text, posthash, timedate=new Date()){
    this.user = user;
    this.comment_text = comment_text;
    this.posthash = posthash;
    this.datetime = timedate;
}