let StudentBase = ["Alana Frank",
    "Alejandra Roel",
    "Anthony French",
    "Clint Langwell",
    "Danielle Lucaj",
    "Gabriel Tarrant",
    "Joseph Cambridge",
    "Joseph Sardashti",
    "Kayla Ingram",
    "Kristofer Juncaj",
    "Kyle Smith",
    "Leslie Gilbert",
    "Michael Wilson",
    "Nicole Dreon",
    "Phil Cronin",
    "Rachel Polant",
    "Raeanna Bektashi"];

let StudentCurrent = StudentBase.slice();
console.log(StudentBase);

function getStudent(){
    let RandomValue = Math.floor(Math.random() * StudentCurrent.length);
    let PickedStudent = StudentCurrent[RandomValue];

    StudentCurrent.splice(RandomValue,1);

    document.getElementById("student").innerHTML = PickedStudent;

    console.log(StudentCurrent);
    console.log(PickedStudent);

    if (StudentCurrent === undefined || StudentCurrent.length == 0) {
        StudentCurrent = StudentBase.slice();
    }
}

