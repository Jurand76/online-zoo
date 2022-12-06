console.log("Script started");

var items = [];
for (let i = 1; i <= 11; i++) {
  let one_item = {};
  let item = document.getElementById("t_item" + i);
  let image_class = item.getElementsByClassName("testimonial_image")[0];
  let name_class = item.getElementsByClassName("testimonial_name")[0];
  let name = name_class.innerText;
  let image_src = image_class.getAttribute("src");
  let text_class = item.getElementsByClassName("testimonial_text")[0];
  let text = text_class.innerText;
  one_item.image_src = image_src;
  one_item.name = name;
  one_item.text = text;
  items.push(one_item);
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function interval(msec) {
  await delay(msec);
}

async function show_testimonial(number) {
  console.log("Show number " + number);
  document.getElementById("testimonial_big").style.visibility = "visible";
  document.getElementById("bigImage").src = items[number - 1].image_src;
  document.getElementById("bigName").innerText = items[number - 1].name;
  document.getElementById("bigText").innerText = items[number - 1].text;
  for (let a = 0; a < 50; a++) {
    document.getElementById("testimonial_big").style.opacity = a / 50;
    await interval(2);
  }
}

async function closeTestimonialBox() {
  for (let a = 50; a >= 0; a--) {
    document.getElementById("testimonial_big").style.opacity = a / 50;
    await interval(2);
  }
  document.getElementById("testimonial_big").style.visibility = "hidden";
}
