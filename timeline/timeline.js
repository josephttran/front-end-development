import { usaData } from "./2020Event.js";

const createTimeline = () => {
  const timeline = document.querySelector("#timeline");

  for (let month of Object.keys(usaData)) {
    const monthElement = document.createElement("div");
    const properCaseMonth = month[0].toUpperCase() + month.toLowerCase().slice(1);
    
    monthElement.className = "event";
    monthElement.setAttribute("data-month", properCaseMonth);
    
    for (let event of usaData[month]) {
      const eventElement = document.createElement("div");
      const eventText = document.createTextNode(event);

      eventElement.className = "event-item";
      eventElement.append(eventText);
      monthElement.append(eventElement);
    }

    timeline.append(monthElement);
  }
}

const styleTimeline = () => {
  const timeline = document.querySelector("#timeline");
  const eventContainer = document.querySelectorAll(".event");
  const eventItems = document.querySelectorAll(".event-item");

  timeline.style.borderLeft = "4px solid cyan";
  timeline.style.margin = "1rem auto";
  timeline.style.width = "640px";
  timeline.style.backgroundColor = "#444";
  timeline.style.color = "#fff";

  eventContainer.forEach(event => {
    event.style.padding = "2rem";
    event.style.borderBottom = "1px solid gray";
  });

  eventItems.forEach(event => {
    event.style.marginBottom = "0.25rem";
  })
}

createTimeline();
styleTimeline();