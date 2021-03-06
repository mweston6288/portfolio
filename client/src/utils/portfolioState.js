
const projects = [
    {
        name: "Employee Directory",
        url:"https://afternoon-everglades-46457.herokuapp.com/"
    },
    {
        name: "Budget Tracker",
        url: "https://damp-tor-20091.herokuapp.com/"
    },
    {
        name: "Game Guru",
        url: "https://gameguru.herokuapp.com/"
    },
    {
        name: "Eat-da-Borger",
        url:"https://eat-da-borger.herokuapp.com/"
    },
    {
        name: "Exercise Tracker",
        url:"https://fierce-cove-13177.herokuapp.com/"
    },
    {
        name: "Password generator",
        url:"https://mweston6288.github.io/passwordGen/"
    },
    {
        name: "Day planner",
        url:"https://mweston6288.github.io/Schedule/"
    },
    {
        name: "Coding Quiz",
        url:"https://mweston6288.github.io/codingQuiz/"
    },
    {
        name: "Weather Report",
        url:"https://mweston6288.github.io/WeatherReport/"
    },
    {
        name: "Note Taker",
        url: "https://ancient-shelf-45017.herokuapp.com/"
    },
    {
        name: "Food Explorer",
        url: "https://mweston6288.github.io/FoodExplorer/"
    },
    {
        name: "Monster Hunter World Equipment Recommender",
        url: "https://mhw-gear-recommender.herokuapp.com/"
    }
]

function makeProjectArray(indexArray){
    let projectArray=[];
    indexArray.forEach(index=>{
        projectArray.push(projects[index]);
    })
    return projectArray;
}
function getProjects(){
    let indexArray = [];
    while (indexArray.length < 6){
        const index = Math.floor(Math.random()*projects.length);
        if (!indexArray.includes(index)){
            indexArray.push(index);
        }
    }
    return makeProjectArray(indexArray);
}
const randProjects = getProjects();

export default randProjects;