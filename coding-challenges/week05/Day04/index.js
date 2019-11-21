function LetterChanges(str) {
            return str.replace(/[a-zA-Z]/g, function (x) {

                if (String.fromCharCode(x.charCodeAt(0) + 1) === '[') {
                    return 'A';
                }
                else if (String.fromCharCode(x.charCodeAt(0) + 1) === '{') {
                    return 'a'
                }
                else {
                    return String.fromCharCode(x.charCodeAt(0) + 1);
                }

            });
        }
        console.log(LetterChanges('hello'),  LetterChanges('zeta'));