/**
 * Changes the word on its plural form if val is more than 1
 * Haven't tested on all words, but basically appends 's' on the 
 * word if condition is met.
 * @param {String} word Word to be changed to plural.
 * @param {Number} val Number associated to the quantity of the word.
 * @returns 
 */
export function pluralInator(word, val){
    if(val > 1)
        return word + 's';
    return word;
}

/**
 * Turns a date object into LocaleDateString 
 * equivalent.
 * @param {Date} dt 
 * @returns 
 */
export function simpleDateTime(dt){
    if(dt)
        return dt.toLocaleDateString();
    return "";
}

/**
 * Returns the formal format of a name: Last, First M.
 * @param {String} fname First Name
 * @param {String} mname Middle Name
 * @param {String} lname Last Name
 * @returns Name formatted as Last, First M.
 */
export function formalName(fname, mname, lname){
    return lname + ", " + fname + " " + mname.substring(0,1) + ".";
}

/**
 * Used for <title> of the page.
 * @param {String} username 
 * @returns User name title string for <title>
 */
export function buildTitle(username){
    return username + " - Budol Finds"
}