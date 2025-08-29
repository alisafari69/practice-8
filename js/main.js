let root = document.querySelector("#root");
root.innerHTML = `
      <form action="#" method="post">
            <div>
                <label for="firstname">firstname</label>
                <input type="text" name="firstname" id="firstname">
            </div>
            <div>
                <label for="lastname">lastname</label>
                <input type="text" name="lastname" id="lastname">
            </div>
            <div>
                <label for="degree">degree</label>
                <select name="degree" id="degree">
                    <option value="phd">phd</option>
                    <option value="master">master</option>
                    <option value="bachelor">bachelor</option>
                    <option value="diploma">diploma</option>
                </select>
            </div>
            <div>
                <label for="hours">hours working</label>
                <input type="number" name="hours" id="hours" >
            </div>
            <div>
                <label for="tax">tax</label>
                <input type="number" name="tax" id="tax" value="15" disabled>
            </div>
            <input type="submit" value="calculate" id="calculate">
        </form>
        <div class="massage" id="massage">
            <h1></h1>
        </div>
        <div class="closeDiv" id="closeDiv">
            <input type="submit" value="close" >
        </div>
`;

let showRoot = document.querySelector("#show");
let calculate = document.querySelector("#calculate");
let closeDiv = document.querySelector("#closeDiv");
let closeDivsubmit = document.querySelector("#closeDiv>input");
let massage = document.querySelector("#massage");
let massageValue = document.querySelector("#massage>h1");
let inputFirstname = document.querySelector("#firstname");
let inputLastname = document.querySelector("#lastname");
let inputDegree = document.querySelector("#degree");
let inputHours = document.querySelector("#hours");
let inputTax = document.querySelector("#tax");

function emptyValue() {
  inputFirstname.value = "";
  inputLastname.value = "";
  inputHours.value = "";
  inputDegree.value = "";
}
function calculatesalary(price) {
  let salary = inputHours.value * price;
  let newTax = (salary * tax.value) / 100;
  let pureSalary = salary - newTax;
  massageValue.innerHTML = `${inputFirstname.value} ${inputLastname.value} salary is ${pureSalary}`;
}

function salaryValue() {
  switch (inputDegree.value) {
    case "php": {
      calculatesalary(500000);
      break;
    }
    case "master": {
      calculatesalary(400000);
      break;
    }
    case "bachelor": {
      calculatesalary(250000);
      break;
    }
    case "diploma": {
      calculatesalary(100000);
      break;
    }
    default: {
      calculatesalary(50000);
      break;
    }
  }
}

showRoot.addEventListener("click", function (e) {
  e.preventDefault();
  root.classList.remove("close");
  root.classList.add("show");
  this.disabled = true;
  this.classList.add("btnoff");
  calculate.classList.remove("calculateoff");
  calculate.disabled = false;
  closeDiv.classList.remove("show");
  closeDiv.classList.add("close");
  closeDivsubmit.classList.add("close")
});

calculate.addEventListener("click", function (e) {
  e.preventDefault();
  massage.classList.remove("close");
  massage.classList.add("show");
  closeDivsubmit.classList.remove("close");
  closeDiv.classList.add("show");
  this.disabled = true;
  this.classList.add("calculateoff");
  salaryValue();
});


closeDivsubmit.addEventListener("click", function (e) {
  e.preventDefault();
  root.classList.add("close");
  showRoot.disabled = false;
  showRoot.classList.remove("btnoff");
  massage.classList.add("close");
  closeDiv.classList.remove("show");
  closeDivsubmit.classList.remove("show");
  closeDiv.classList.add("close");
  closeDivsubmit.classList.add("close");
  emptyValue();
});
