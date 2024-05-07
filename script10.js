function checkBrackets(str) {
    const stack = [];
    const bracketPairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (const char of str) {
        if (bracketPairs[char]) {  // Якщо відкриваюча дужка
            stack.push(char);
        } else if (Object.values(bracketPairs).includes(char)) {  // Якщо закриваюча дужка
            if (stack.length === 0 || bracketPairs[stack.pop()] !== char) {
                return false;  // Якщо дужки не збігаються
            }
        }
    }

    return stack.length === 0;  // Якщо залишились невідкриті дужки, то помилка
}

// Приклад використання
console.log(checkBrackets("(someFn)"));  // true
console.log(checkBrackets("(()"));      // false
console.log(checkBrackets("{[()]}"));   // true
