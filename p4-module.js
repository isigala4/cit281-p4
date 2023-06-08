const { data }= require('./p4-data');

function getQuestions() {
     const questions= data.map((item) => {
         return item.question;
        })
        return questions; 
}

function getAnswers(){
    const ans = data.map((item) => {
return item.answer;
    })
    return ans;
}

function getQuestionsAnswers(){
    const copy = data; 
    return copy;
}

function getQuestion(number = "") {
const object = 
{
 question: "",
 number :number ,
error: '',
};

const interger = Number(number)- 1;

if( number === ""){
    object.error = 'Question number must be an integer';
    return object;
}

if (interger < 0){
    object.error = 'Question  number must be >= 1';
    return object;
}
if (interger < 0 || interger >= 3){
    object.error = 'Question number must be less than the number of questions (3)';
    return object;
}

const questionElement =data[interger];
object.question =questionElement.question;

return object;
}


function getAnswer(number = ""){
    const object = 
    {
     answer: "",
     number :number ,
    error: '',
    };

    const interger = Number(number)- 1;

    if( number === ""){
        object.error = 'Answer number must be an integer';
        return object;
    }

if (interger < 0){
        object.error = 'Answer number must be >= 1';
        return object;
    }
if (interger < 0 || interger >= 3){
        object.error = 'Answer number must be less than the number of questions (3)';
        return object;
    }

const ansElement =data[interger];
object.answer =ansElement.answer;

return object;

}

function getQuestionAnswer(number = ""){
    const object = 
    {
     question: "",
     answer: "",
     number :number ,
    error: '',
    };

    const interger = Number(number)- 1;

    if( number === ""){
        object.error = 'Question number must be an integer';
        return object;
    }

    if (interger < 0){
        object.error = 'Question number must be >= 1';
        return object;
    }
    if (interger < 0 || interger >= 3){
        object.error = 'Question number must be less than the number of questions (3)';
        return object;
    }
const ansElement =data[interger];
object.answer =ansElement.answer;

const questionElement =data[interger];
object.question =questionElement.question;

return object;

}

module.exports = {getQuestions, getAnswers, getQuestionsAnswers,
     getQuestion, getAnswer, getQuestionAnswer};

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = false;
  const testGetQ = false;
  const testGetA = false;
  const testGetQA = false;

  // getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });

  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }
  