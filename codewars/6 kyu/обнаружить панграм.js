function isPangram(string){
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const regex = /\s/g;
    const lowercase = string.toLowerCase().replace(regex, "");
    for (let i = 0; alphabet.length > i; i++) {
      if (lowercase.indexOf(alphabet[i]) === -1) {
        return false;
      }
    }
    return true;
  }
isPangram("This is not a pangram.");