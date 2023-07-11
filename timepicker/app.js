const tp = document.querySelector(".timepicker");
const root = document.querySelector("#main");

const userFormat = tp.dataset.format;

const HourLimit = 24;
const minutesLimit = 60;
const secondLimit = 60;

// hours formatting

const possibleTimeFormats = [12, 24];

var SelectedTimeFormat = 24;

const format = "hh:mm:ss";

const populateoptions = (limit, start = 1, step = 1) => {
  const template = ce("div");
  for (let i = start; i <= limit; i += step) {
    let option = ce("option");
    option.value = i;
    option.innerText = i;
    template.appendChild(option);
  }

  return template.children;
};

const prefix = "tp__";
const ce = (element) => {
  return document.createElement(element);
};
// create 2 select box

// if (userFormat.match(/h/gi).length > 0) {
  var hoursElement = ce("select");
  hoursElement.classList.add(`${prefix}hours`);
  hoursElement.append(...populateoptions(HourLimit));
  hoursElement.onchange = handleChange;
// }
// if (userFormat.match(/m/gi).length > 0) {
  var minutesElement = ce("select");
  minutesElement.classList.add(`${prefix}minutes`);
  minutesElement.append(...populateoptions(minutesLimit));
  minutesElement.onchange = handleChange;
// }
// if (userFormat.match(/s/gi).length > 0) {
  var secondElement = ce("select");
  secondElement.classList.add(`${prefix}second`);
  secondElement.append(...populateoptions(secondLimit));
  secondElement.onchange = handleChange;
// }

var spy = ce("input");
spy.type = "hidden";
spy.classList.add(`${prefix}spy`);

// make a wrapper to wrap the select boxes

var wrapper = ce("div");
wrapper.classList.add(`${prefix}wrapper`);

// append all the selectboxes into wrapper

wrapper.appendChild(hoursElement);
wrapper.appendChild(minutesElement);
wrapper.appendChild(secondElement);
wrapper.appendChild(spy);

// mount where the input is located
root.appendChild(wrapper);

function handleChange(event) {
  console.log(event);
  let time = format
    .replace("hh", hoursElement.value)
    .replace("mm", minutesElement.value)
    .replace("ss", secondElement.value);
  spy.value = time;
}
window.xyz = hoursElement;
