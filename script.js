const text1 = document.querySelectorAll(".contentText1");
const text2 = document.querySelectorAll(".contentText2");
const image1 = document.querySelectorAll(".contentImg1");
const image2 = document.querySelectorAll(".contentImg2");

for (let i = 0; i < text1.length; i++) {
  text1[i].textContent =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, veniam!";
  text1[i].style.opacity = "0.7";
  text1[i].style.backgroundColor = "#95b3bf";
  text1[i].style.fontSize = "1rem";
  text1[i].style.color = "#021c26";
  text1[i].style.alignContent = "center";
  text1[i].style.textAlign = "center";
  text1[i].style.visibility = "hidden";
}

for (let i = 0; i < text2.length; i++) {
  text2[i].textContent =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, veniam!";
  text2[i].style.opacity = "0.7";
  text2[i].style.backgroundColor = "#074a59";
  text2[i].style.fontSize = "1rem";
  text2[i].style.color = "#95b3bf";
  text2[i].style.alignContent = "center";
  text2[i].style.textAlign = "center";
  text2[i].style.visibility = "hidden";
}

for (let i = 0; i < image1.length; i++) {
  image1[i].addEventListener("mouseover", () => {
    text1[i].style.visibility = "visible";
  });
  image1[i].addEventListener("mouseout", () => {
    text1[i].style.visibility = "hidden";
  });
  text1[i].addEventListener("mouseover", () => {
    text1[i].style.visibility = "visible";
  });
  text1[i].addEventListener("mouseout", () => {
    text1[i].style.visibility = "hidden";
  });
}

for (let i = 0; i < image2.length; i++) {
  image2[i].addEventListener("mouseover", () => {
    text2[i].style.visibility = "visible";
  });
  image2[i].addEventListener("mouseout", () => {
    text2[i].style.visibility = "hidden";
  });
  text2[i].addEventListener("mouseover", () => {
    text2[i].style.visibility = "visible";
  });
  text2[i].addEventListener("mouseout", () => {
    text2[i].style.visibility = "hidden";
  });
}
