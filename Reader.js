const File = "https://raw.githubusercontent.com/MrLimeick/QnA/main/Informatics.txt";
let xhr = new XMLHttpRequest();

xhr.open('GET', File);

xhr.send();

xhr.onload = function() 
{
  if (xhr.status != 200) 
  { 
    alert('Произошла ошибка: ' + xhr.status + "\n Прости…");
    return;
  }

  CreateQuestions(xhr.responseText);
  delete(File);
};

xhr.onerror = function() {
  alert("Произошла ошибка… Прости!");
};

/** @param {string} questions Текст с вопросами */
function CreateQuestions(questions)
{
    let questionsSplited = questions.split("В:");
    questionsSplited.forEach(qna => {
        if(qna == undefined || qna == "") return;
        let qnaSplited = qna.split("О:");
        CreateQuestion(qnaSplited[0].trim(), qnaSplited[1].trim());
    });
}

function CreateQuestion(q, a) 
{
    let newDiv = document.createElement("div");
    newDiv.className = "Question"
    newDiv.innerHTML = "<h1>" + q + "</h1><h2>" + a + "</h2>";

    let my_div = document.getElementById("End");
    document.body.insertBefore(newDiv, my_div);
}