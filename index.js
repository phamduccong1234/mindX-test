// Bài 1
let str_input = prompt("Enter string: ")
let reverse = ""
for(let char of str_input){
    reverse = char + reverse
    console.log(reverse);
}

// Bai 2
let str = prompt("Enter string: ");
let strList = str.toLowerCase().split(' ');
for(let i = 0; i < strList.length; i++){
    strList[i] = strList[i].charAt(0).toUpperCase() + strList[i].substring(1)
    let strResult = strList.join(' ')
    console.log(strResult);
}

// Bai 3
let arr = ["one", "two", "three", "one", "one", "four", "five", "four", "five", "five"]
let arrNew = []
for(let i = 0; i < arr.length; i++){
    let val = arr[i]
    if(arr.indexOf(val) == i){
        arrNew.push(val)
        console.log(arrNew);
    }
}

// Bai 4
let listCharacter = [
  {
    name: "Cong",
    age: 23,
    salary: 2000,
    job: "Manager",
  },
  {
    name: "Duy",
    age: 22,
    salary: 500,
    job: "Dev",
  },
  {
    name: "Linh",
    age: 20,
    salary: 500,
    job: "Business",
  },
];

let pick = Number(
  prompt("Choose one: \n1. Create \n2. Read \n3. Update \n4. Delete")
);
switch (pick) {
  case 1:
    let nameCharacter = prompt("Enter name new character: ");
    let ageCharacter = Number(prompt("Enter age new character: "));
    let salaryCharacter = Number(prompt("Enter salary for new character: "));
    let jobCharacter = prompt("Enter job for new character: ");
    let newCharacter = {
      name: nameCharacter,
      age: ageCharacter,
      salary: salaryCharacter,
      job: jobCharacter,
    };
    listCharacter.push(newCharacter);
    console.log("=========================");
    console.log(`List character`);
    for (let index of listCharacter) {
      console.log(`
Name: ${index.name}
Age: ${index.age}
Salary: ${index.salary}
Job: ${index.job}
====================
        `);
    }
    break;
  case 2:
    let positionInput = prompt("Enter character position: ");
    let info = listCharacter[positionInput - 1];
    console.log(`
Name: ${info.name}
Age: ${info.age}
Salary: ${info.salary}
Job: ${info.job}
====================
        `);
    break;
  case 3:
    let posInput = prompt("Enter character position: ");
    let detail = listCharacter[posInput - 1];
    console.log(`
Name: ${detail.name}
Age: ${detail.age}
Salary: ${detail.salary}
Job: ${detail.job}
====================
`);
    do {
        let choose = prompt("Choose info you want to update: (name,age,salary,job)")
    if(choose == 'name'){
        let nameChange = prompt("Enter name: ")
        detail.name = nameChange
        console.log(`
Name: ${detail.name}
Age: ${detail.age}
Salary: ${detail.salary}
Job: ${detail.job}
====================
`);
    } else if (choose == 'age'){
        let ageChange = prompt("Enter age: ")
        detail.age = ageChange
        console.log(`
Name: ${detail.name}
Age: ${detail.age}
Salary: ${detail.salary}
Job: ${detail.job}
====================
`);
    } else if (choose == 'salary'){
        let salaryChange = prompt("Enter salara: ")
        detail.salary = salaryChange
        console.log(`
Name: ${detail.name}
Age: ${detail.age}
Salary: ${detail.salary}
Job: ${detail.job}
====================
`);
    } else if(choose == 'job'){
        let jobChange = prompt("Enter job: ")
        detail.job = jobChange
        console.log(`
Name: ${detail.name}
Age: ${detail.age}
Salary: ${detail.salary}
Job: ${detail.job}
====================
`);
    } else {
        console.log("Wrong input");
    }
    var ans = prompt("Check info .Do you want to continue? (y/n)")
    } while (ans == 'y');
    break;
    case 4: 
    let posiInput = prompt("Enter character position: ");
    delete listCharacter.splice(posiInput, 1)
    for (let i of listCharacter) {
        console.log(`
  Name: ${i.name}
  Age: ${i.age}
  Salary: ${i.salary}
  Job: ${i.job}
  ====================
          `);
      }
  default:
    break;
}

// Bai 5
let inputDay = Number(prompt("Enter day: ")) 
let inputMonth = Number(prompt("Enter month: ")) 
let inputYear = Number(prompt("Enter year: ")) 
let dayRange = []
let dayRange2 = []
let monthRange = [1,3,5,7,8,10,12]
let monthRange2 = [4,6,9,11]
for(let i = 1; i <= 31; i++){
    dayRange[i] = i
}
for(let j = 1; j <= 30; j++){
    dayRange2[j] = j
}
