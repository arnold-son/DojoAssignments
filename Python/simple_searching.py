
import re
def get_matching_words(regex):
    words = ["aimlessness", "assassin", "baby", "beekeeper", "belladonna", "cannonball", "crybaby", "denver", "embraceable", "facetious", "flashbulb", "gaslight", "hobgoblin", "iconoclast", "issue", "kebab", "kilo", "laundered", "mattress", "millennia", "natural", "obsessive", "paranoia", "queen", "rabble", "reabsorb", "sacrilegious", "schoolroom", "tabby", "tabloid", "unbearable", "union", "videotape"]
    matches = []
    for word in words:
        if re.search(regex,word):
     	    matches.append(word)

    print matches
    return matches

contains_v = 'v'
contains_double_s = 'ss'
ends_with_e = 'e\Z'
contains_b_char_b = 'b.b'
contains_b_1charormore_b = 'b.+b'
contains_b_anynumofchars_b = 'b.*b'
includes_all_five_vowels_in_order = '[^aeiou]*a+[^aeiou]*e+[^aeiou]*i+[^aeiou]*o+[^aeiou]*u+'
only_uses_regularexpression = '[regulaxpsion]*'
contains_double_letters = r'.*(\w)\1.*'

get_matching_words(contains_double_letters)
