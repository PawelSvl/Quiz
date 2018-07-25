function quiz1() {

    const question1 = document.quiz.question1.value;
    const question2 = document.quiz.question2.value;
    const question3 = document.quiz.question3.value;
    const question4 = document.quiz.question4.value;
    const question5 = document.quiz.question5.value;
    let b1 = document.querySelector(".odpowiedz1");
    let b2 = document.querySelector(".odpowiedz2");
    let b3 = document.querySelector(".odpowiedz3");
    let b4 = document.querySelector(".odpowiedz4");
    let b5 = document.querySelector(".odpowiedz5");
    var correct = 0;

    if (question1 == "Warszawa") {
        correct++;
    }
    if (question2 == "Paryż") {
        correct++;
    }
 if (question3 == "Kopenhaga") {
        correct++;
    }
     if (question4 == "Helsinki") {
        correct++;
    }
     if (question5 == "Madryt") {
        correct++;
    }
    document.getElementById("wynik").style.visibility = "visible";
    document.getElementById("numberCorect").innerHTML = "Twój wynik " + correct + "/5" ;
    b1.classList.add('active');
    b2.classList.add('active');
    b3.classList.add('active');
    b4.classList.add('active');
    b5.classList.add('active');
}
