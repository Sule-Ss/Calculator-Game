var Number1, Number2, Operator, result, answer, True = 0,
    False = 0; //Bildirimler için

Number1 = document.getElementById('Number1'); // HTML nesnelerine ulaşmak için
Number2 = document.getElementById('Number2');
Operator = document.getElementById('Operator');
result = document.getElementById('result');
answer = document.getElementById('answer');
True = document.getElementById('True');
False = document.getElementById('False');

//Rastgele sayı üretmek için:
function RandomNumber(min, max) {
    var number =Math.floor(Math.random() * (max - min)) + min; //floor ile yuvarlama yaptık
    return number;
}

// Oyun başladığında veya soru tahmini sonrası yeni soru oluşturma fonksiyonu:

function newQuestion() {
    var oparation = ["+", "-", "*", "/"];
    Operator.textContent = oparation[RandomNumber(0, 4)]; // operatör seçimi
    Number1.textContent = RandomNumber(0, 50);
    Number2.textContent = RandomNumber(0, 50);

    //Kalansız bölme işlemi yapacak koşul : 
     if (Operator.textContent == "/") {
        while (true) {
            Number2.textContent = RandomNumber(0, 50);
            if (Number1.textContent % Number2.textContent == 0) {
                break;
            }
        }
    }
}

//Sayfa yüklendiğinde yeni soru soran fonksiyonu(newQuestion) çalıştır.

window.onload = function(){
    newQuestion();
}

//START butonuna basıldığında değerlendirme işlemi:

answer.onclick = function(){
    var ans, n1, n2;
    n1 = Number(Number1.textContent);
    n2 = Number(Number2.textContent);
    switch(Operator.textContent){
        case '+' : ans = n1 + n2; break;
        case '-' : ans = n1 - n2; break;
        case '*' : ans = n1 * n2; break;
        case '/' : ans = n1 / n2; break;
        default : break;

    }
    if(result.value == ans){
        True.textContent = Number(True.textContent) + 1;
    }
    else{
        False.textContent = Number(False.textContent) + 1;
    }
    
    newQuestion();
}