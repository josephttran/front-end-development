const contactList = [
  {
    "name": "Sonya Munoz",
    "company": "AUSTEX",
    "online": true
  },
  {
    "name": "Schroeder Hayden",
    "company": "BRISTO",
    "online": false
  },
  {
    "name": "Montgomery Shepard",
    "company": "ECRAZE",
    "online": true
  },
  {
    "name": "Good Glass",
    "company": "HOMELUX",
    "online": false
  },
  {
    "name": "Jami Webster",
    "company": "COMVERGES",
    "online": true
  },
  {
    "name": "Billie Alexander",
    "company": "WAAB",
    "online": false
  },
  {
    "name": "Shelia Haney",
    "company": "KINDALOO",
    "online": false
  },
  {
    "name": "Cummings Finley",
    "company": "REPETWIRE",
    "online": true
  },
  {
    "name": "Day Burke",
    "company": "ENJOLA",
    "online": false
  },
  {
    "name": "Bass Pratt",
    "company": "MEDESIGN",
    "online": false
  }
];

const contacts = document.querySelector(".contacts");

function displayContactList() {
  contactList.forEach(obj => {
    const contactItem = document.createElement("div");
    contactItem.classList.add("contact-item")

    const contactOnline = document.createElement("div");
    const contactName = document.createElement("div");
    const contactCompany = document.createElement("div");

    contactOnline.classList.add("dot");
    
    if (obj.online) {
      contactOnline.classList.add("contact-item-status-online");
    } else {
      contactOnline.classList.add("contact-item-status-offline");
    }

    contactName.classList.add("contact-item-name");
    contactName.textContent = obj.name;
    contactCompany.classList.add("contact-item-company");
    contactCompany.textContent = obj.company;

    contactItem.appendChild(contactOnline);
    contactItem.appendChild(contactName);
    contactItem.appendChild(contactCompany);

    contacts.appendChild(contactItem);
  })
}

displayContactList();