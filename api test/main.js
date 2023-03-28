let request = new XMLHttpRequest();
request.open("GET", "https://dog.ceo/api/breeds/image/random");
request.send();
request.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let myObj = JSON.parse(request.response);
    console.log(myObj);
    console.log(myObj.message);
    let card = document.querySelector(".card");
    let container = document.querySelector(".container");
    let photo = document.createElement("img");
    photo.setAttribute("src", myObj.message);
    photo.setAttribute("alt", "Dog - photo");
    card.append(photo);
    photo.style.width = "350px";
    photo.style.height = "450px";
  }
};
