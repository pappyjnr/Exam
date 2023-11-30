let btn = document.querySelector("button");
let result = document.querySelector("h1");

//29/07/2023

btnGet.addEventListener("click", () => {
  let dateobj = new Date(Date.now());

  let month = dateobj.getMonth() + 1;
  let year = dateobj.getFullYear();
  let date = dateobj.getDate();

  result.innerText = `${month} / ${date} / ${year}`;
});
