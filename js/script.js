const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");

const learning = {

topic: "JS",
learningGoals: ["Build JS Programs", "Don't be afraid to try", "Make a portfolio", "finish all my classes"],
category: "Front End Development",
topicImportance: "High",

};

learning.topic = "JavaScript",
learning.learningGoals.splice(1, 1)

console.log(learning);

topicElement.innerText = `I'm learning ${learning.topic}`;
topicElement.classList.remove("hide");

countElement.innerText = `I have ${learning.learningGoals.length} learning goals`;
countElement.classList.remove("hide");

