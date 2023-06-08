let params = new URLSearchParams(window.location.search);
let lesson = params.get("lesson");

if(lesson != undefined)
{
    const File = lesson + ".txt";

    fetch(File)
    .then((Response) =>
    {
        if(!Response.ok)
        {
            throw new console.error("Ошибка! " + Response.statusText);
        }

        return Response.text();
    })
    .then((text) => 
        CreateQuestions(text)
    )
}
else
{
    console.log("Choose lesson!");
}

/** @param {string} questions Текст с вопросами */
function CreateQuestions(questions)
{
    let questionsSplitted = questions.split("В:");
    questionsSplitted.forEach(qna => {
        if(qna == undefined || qna == "") return;
        let qnaSplitted = qna.split("О:");
        CreateQuestion(qnaSplitted[0].trim(), qnaSplitted[1].trim());
    })
}

function CreateQuestion(q, a) 
{
    let newDiv = document.createElement("div");
    newDiv.className = "Question"
    newDiv.innerHTML = "<h1>" + q + "</h1><h2>" + a + "</h2>";

    let my_div = document.getElementById("End");
    document.body.insertBefore(newDiv, my_div);
}