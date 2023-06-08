const {getQuestions, getAnswers, getQuestionsAnswers,
    getQuestion, getAnswer, getQuestionAnswer} = require('./p4-module');

  const fastify = require("fastify")();

  fastify.get("/cit/question", (request, reply) => {
    const questions = getQuestions();
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({
        "error": "",
        "statusCode": 200,
        "questions": [
            "Q1",
            "Q2",
            "Q3"
        ]
    });
  });

  fastify.get("/cit/answer", (request, reply) => {
      const answers = getAnswers();
      reply 
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({
        "error": "",
        "statusCode": 200,
        "answers": [
            "A1",
            "A2",
            "A3"
        ]
    });
  });

  fastify.get("/cit/questionanswer", (request, reply) =>{
      const questionsAnswers = getQuestionsAnswers();
      reply 
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({
        "error": "",
        "statusCode": 200,
        "questions_answers": [
            {
                "question": "Q1",
                "answer": "A1"
            },
            {
                "question": "Q2",
                "answer": "A2"
            },
            {
                "question": "Q3",
                "answer": "A3"
            }
        ]
    });
  });

  fastify.get("/cit/question/:number", (request, reply) =>{
      const number = parseInt(request.params.number);
      const question = getQuestion(number);
      reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({
          "error": "",
          "statusCode": 200, 
          "question": question.question,
          'number': question.number,
      });
  });

  fastify.get("/cit/answer/:number", (request, reply) =>{
    const number = parseInt(request.params.number);
    const answer = getAnswer(number);
    reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({
        "error": "",
        "statusCode": 200, 
        "answer": answer.answer,
        'number': answer.number,
    });
});
 
fastify.get("/cit/questionanswer/:number", (request, reply) =>{
    const number = parseInt(request.params.number);
    const questionAnswer = getQuestionAnswer(number);
    reply 
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({
        "error": "",
        "statusCode": 200,
        "question": questionAnswer.question,
        "answer": questionAnswer.answer,
        "number": questionAnswer.number, 
    });
});

fastify.get("*", (request, reply) =>{
    reply
    .code(404)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({
        "error": "Route not found",
        "statusCode": 404
    });
});


  const listenIP = "localhost";
  const listenPort = 8080;
  fastify.listen(listenPort, listenIP, (err, address) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log(`Server listening on ${address}`);
  });
