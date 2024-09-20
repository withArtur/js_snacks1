// REGEX Solution ... wow!
function isPangramRegEx(string) {
    /**
     * `/([a-z])(?!.*\1)/ig`
     *   1st Capturing Group ([a-z])
     *   Match a single character present in the list below [a-z]
     *   a-z matches a single character in the range between a (index 97) and z (index 122) (case insensitive)
     *   Negative Lookahead (?!.*\1)
     *   Assert that the Regex below does not match
     *   . matches any character (except for line terminators)
     *   * matches the previous token between zero and unlimited times, as many times as possible, giving back as needed (greedy)
     *   \1 matches the same text as most recently matched by the 1st capturing group
     *   Global pattern flags 
     *   i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])
     *   g modifier: global. All matches (don't return after first match)
     */
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
    /**
     * 
     * /: Questo è il delimitatore dell'espressione regolare. Indica l'inizio e la fine della regex.
     *   ([a-z]): Questo gruppo di cattura cerca qualsiasi lettera minuscola (da 'a' a 'z'). Le parentesi () creano un gruppo di cattura, il che significa che possiamo accedere alla lettera corrispondente in seguito.
     *   (?!.*\1): Questa è un' "asserzione negativa di ricerca in avanti". Significa che ciò che segue la lettera minuscola NON deve essere:
     *   .*: Qualsiasi carattere (.) zero o più volte (*).
     *   \1: Un riferimento al primo gruppo di cattura, che in questo caso è la lettera minuscola che abbiamo già trovato.
     *   i: Questa bandiera rende la corrispondenza insensibile al maiuscolo e minuscolo.
     *   g: Questa bandiera rende la corrispondenza globale, il che significa che cerca tutte le possibili corrispondenze nel testo.
     *   
     * 
     * In sintesi, questa regex cerca tutte le lettere minuscole che NON si ripetono nel testo. Ad esempio, nella frase "Ciao mondo", la regex corrisponderebbe a "C", "i", "a", "o", "m", "o" e "n", ma non alla seconda "o" perché  una "o" è già stata trovata prima.
     */
}

/**
 * Checkk if the string is a Pangram (cantain all the letters of the alphabet at list once)
 * 
 * @param {string} string String containing the text to check
 * @returns boolean
 */
function isPangram(string) {
    return 'abcdefghijklmnopqrstuvwxyz'
        .split('')
        .every((x) => string.toLowerCase().includes(x));
}

console.info(isPangram('The quick brown fox jumps over the lazy dog.')); // true
console.info(isPangramRegEx('The quick brown fox jumps over the lazy dog.')); // true