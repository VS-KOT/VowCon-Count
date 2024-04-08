function checkVowels(){
    let text = document.getElementById('inputText').value;
    let vowelCount = 0;

    text = text.toLowerCase();

    for(let i=0 ; i<text.length; i++){
        let char = text.charAt(i);
        if(isVowel(char)){
            vowelCount++;
        }
    }
    const consonantsCount = text.length - vowelCount;
    const result = document.getElementById('result')
    result.textContent = "Total Vowels: " + vowelCount + "\n Total Consonants: " + consonantsCount;
}

function isVowel(char){
    const vowels = ["a","e","i","o","u"];
    return vowels.includes(char);
}