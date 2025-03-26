const form = document.querySelector("form");
const ul = document.getElementById("list");

form.onsubmit = function (e) {
  e.preventDefault();
  console.log("submit");

  const inputNode = document.getElementById("taskInput");
  console.log(inputNode.value);

  const li = document.createElement("li");
  li.innerText = inputNode.value;

  li.onclick = function (e) {
    e.currentTarget.classList.toggle("strike");
  };

  ul.appendChild(li);
};

//AVEVI SBAGLIATO IL MODO DI PENSARE
/* console.dir(form);
console.log(form);
form.onsubmit = function (e) {
  e.preventDefault();

  /* e.currentTarget.classLi.add("li");
  const li = document.querySelector("li");
  // const inputField = document.createElement("input");
  //inputField.innerText = `Cose da fare`;
  li.addEventListener("click", function (e) {
    e.currentTarget.li.toggle("text-decoration: line-trough");
  });
  clickLi.onclick = clickInputField;

  //inputField.appendChild(ul);

  const button = document.createElement("button");
  button.innerText = `Elimina`;
  button.onclick = function (e) {
    e.currentTarget.closest("inputField").remove();
    button.appendChild(inputField);
  };

  form.appendChild(main);
  form.reset();
};
 */
/* 
  const li = document.querySelectorAll("li");
  elementList = function (e) {
    e.currentTarget.elementList.toggle("text-decoration: line-trough");
    console.dir(elementList);
  };
  li.onclick = elementList;
};
*/
