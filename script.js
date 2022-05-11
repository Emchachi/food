// "use strict";

const btnNavEl = document.querySelector(".btn-mobile-nav");
const nav = document.querySelector(".navbar");
const bg1 = document.querySelector(".first-half");
const circle = document.querySelector(".circle-2");
const circleBig = document.querySelector(".circle-1");
const bg2 = document.querySelector(".second-half");

btnNavEl.addEventListener("click", function (e) {
  btnNavEl.classList.toggle("nav-open");
  bg1.classList.toggle("nav-open");
  bg2.classList.toggle("nav-open");
  nav.classList.toggle("nav-open");
  circle.classList.toggle("nav-open");
  circleBig.classList.toggle("nav-open");
});

// DRAWING

let ticking = false;
let last_known_scroll_position = 0;
let updatePath = false;

const element = document.querySelector(".line");
const path = element.querySelector("path");
let totalLength = 0;

initPath(path);

function initPath(path) {
  totalLength = path.getTotalLength();
  path.style.strokeDasharray = `${totalLength}`;
  path.style.strokeDashoffset = totalLength;
}

function handleEntries(entries) {
  console.log(entries);
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      console.log(entry.target);
    }
  });
}

let observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry);
        updatePath = true;
      } else {
        updatePath = false;
      }
    });
  },
  { rootMargin: "0px 0px 0px 0px" }
);

observer.observe(element);

function doSomething(scroll_pos) {
  if (!updatePath) {
    return;
  }
  window.requestAnimationFrame(() => {
    const center = window.innerHeight / 2;
    const boundaries = path.getBoundingClientRect();
    const top = boundaries.top;
    const height = boundaries.height;
    const percentage = (center - top) / height;
    const drawLength = percentage > 0 ? totalLength * percentage : 0;
    path.style.strokeDashoffset =
      drawLength < totalLength ? totalLength - drawLength : 0;
  });
}

window.addEventListener("scroll", function (e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});

// Reveal

const buttonReveal = document.querySelector(".about-us-btn");
const contactSection = document.querySelector(".contact");

const options = {
  root: null,
  threshold: 0.75,
  // rootMargin: "-350px",
};

const sectionObserver = new IntersectionObserver(load, options);
sectionObserver.observe(contactSection);

function load(entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    buttonReveal.classList.add("about-us-btn-active");
  }
}

// VIDEO ANIMTAION
const vid = document.querySelector(".vid");
const vidContainer = document.querySelector(".video");
const maskRight = document.querySelector(".mask_right");
const maskLeft = document.querySelector(".mask_left");

const optionsVid = {
  root: null,
  threshold: 0.5,
  // rootMargin: "-100px",
};

const contactObserver = new IntersectionObserver(loadVid, optionsVid);
contactObserver.observe(contactSection);

function loadVid(entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    maskRight.classList.add("special");
    maskLeft.classList.add("special");
  }
}

// LINE 2
let ticking_2 = false;
let last_known_scroll_position_2 = 0;
let updatePath_2 = false;

const element_2 = document.querySelector(".line-2");
const path_2 = element_2.querySelector("path");
let totalLength_2 = 0;

initPath_2(path_2);

function initPath_2(path) {
  totalLength_2 = path.getTotalLength();
  path.style.strokeDasharray = `${totalLength_2}`;
  path.style.strokeDashoffset = totalLength_2;
}

function handleEntries_2(entries) {
  console.log(entries);
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      console.log(entry.target);
    }
  });
}

let observer_2 = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry);
        updatePath_2 = true;
      } else {
        updatePath_2 = false;
      }
    });
  },
  { rootMargin: "0px 0px 0px 0px" }
);

observer_2.observe(element_2);

function doSomething_2(scroll_pos) {
  if (!updatePath_2) {
    return;
  }
  window.requestAnimationFrame(() => {
    const center = window.innerHeight / 2;
    const boundaries = path_2.getBoundingClientRect();
    const top = boundaries.top;
    const height = boundaries.height;
    const percentage = (center - top) / height;
    const drawLength = percentage > 0 ? totalLength * percentage : 0;
    path_2.style.strokeDashoffset =
      drawLength < totalLength ? totalLength - drawLength : 0;
  });
}

window.addEventListener("scroll", function (e) {
  last_known_scroll_position_2 = window.scrollY;

  if (!ticking_2) {
    window.requestAnimationFrame(function () {
      doSomething_2(last_known_scroll_position_2);
      ticking_2 = false;
    });

    ticking_2 = true;
  }
});

// LINE 4

let ticking_3 = false;
let last_known_scroll_position_ = 0;
let updatePath_4 = false;

const element_3 = document.querySelector(".line-3");
const path_3 = element_3.querySelector("path");
let totalLength_3 = 0;

initPath_3(path_3);

function initPath_3(path) {
  totalLength_3 = path.getTotalLength();
  path.style.strokeDasharray = `${totalLength_3}`;
  path.style.strokeDashoffset = totalLength_3;
}

function handleEntries_3(entries) {
  console.log(entries);
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      console.log(entry.target);
    }
  });
}

let observer_3 = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry);
        updatePath_3 = true;
      } else {
        updatePath_3 = false;
      }
    });
  },
  { rootMargin: "0px 0px 0px 0px" }
);

observer_3.observe(element_3);

function doSomething_3(scroll_pos) {
  if (!updatePath_3) {
    return;
  }
  window.requestAnimationFrame(() => {
    const center = window.innerHeight / 2;
    const boundaries = path_3.getBoundingClientRect();
    const top = boundaries.top;
    const height = boundaries.height;
    const percentage = (center - top) / height;
    const drawLength = percentage > 0 ? totalLength * percentage : 0;
    path_3.style.strokeDashoffset =
      drawLength < totalLength ? totalLength - drawLength : 0;
  });
}

window.addEventListener("scroll", function (e) {
  last_known_scroll_position_3 = window.scrollY;

  if (!ticking_3) {
    window.requestAnimationFrame(function () {
      doSomething_3(last_known_scroll_position_3);
      ticking_3 = false;
    });

    ticking_3 = true;
  }
});

// LINE 1
let ticking_1 = false;
let last_known_scroll_position_1 = 0;
let updatePath_1 = false;

const element_1 = document.querySelector(".line-1");
const path_1 = element_1.querySelector("path");
let totalLength_1 = 0;

initPath_1(path_1);

function initPath_1(path) {
  totalLength_1 = path.getTotalLength();
  path.style.strokeDasharray = `${totalLength_1}`;
  path.style.strokeDashoffset = totalLength_1;
}

function handleEntries_1(entries) {
  console.log(entries);
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      console.log(entry.target);
    }
  });
}

let observer_1 = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry);
        updatePath_1 = true;
      } else {
        updatePath_1 = false;
      }
    });
  },
  { rootMargin: "0px 0px 0px 0px" }
);

observer_1.observe(element_1);

function doSomething_1(scroll_pos) {
  if (!updatePath_1) {
    return;
  }
  window.requestAnimationFrame(() => {
    const center = window.innerHeight / 2;
    const boundaries = path_1.getBoundingClientRect();
    const top = boundaries.top;
    const height = boundaries.height;
    const percentage = (center - top) / height;
    const drawLength = percentage > 0 ? totalLength * percentage : 0;
    path_1.style.strokeDashoffset =
      drawLength < totalLength ? totalLength - drawLength : 0;
  });
}

window.addEventListener("scroll", function (e) {
  last_known_scroll_position_1 = window.scrollY;

  if (!ticking_1) {
    window.requestAnimationFrame(function () {
      doSomething_1(last_known_scroll_position_1);
      ticking_1 = false;
    });

    ticking_1 = true;
  }
});
