// funcionamento base da linguagem (a mecânica da linguagem)

// teste de unicode
console.log("café === caf\\u00e9:", "café" === "caf\u00e9"); // => true

// inconsistência em operações de decimais, caracteristica da linguagem
console.log("\noperações com decimais não são sempre precisas, exemplo:");
console.log("0.2 -0.1 = ", 0.2 - 0.1);
console.log("0.3 -0.2 = ", 0.3 - 0.2);
console.log("0.8 -0.7 = ", 0.8 - 0.7);

var variavel = "como funciona a quebra de texto em strings" + 
" deve se concatenar." +
"pelo menos essa é a teoria, e não apertar enter, porque não ira interpretar" +
`. Com crase é possivel apertar enter, mas ira quebrar uma linha no 
print. Se não quiser que salte a linha, será melhor ir concatenando`;
console.log(variavel);
