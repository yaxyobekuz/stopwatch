// Buttins
const elStop = document.querySelector(".stop");
const elPlus = document.querySelector(".plus");
const elStart = document.querySelector(".start");
const elReset = document.querySelector(".reset");

// Time
const elHour = document.querySelector(".hour");
const elMinute = document.querySelector(".minute");
const elSecond = document.querySelector(".second");
const elMSecond = document.querySelector(".m-second");

// List
const elli = document.querySelectorAll(".li");
const elTimeResult = document.querySelector(".time-result");

elStart.addEventListener("click", function () {
  const stopwatchMovement = setInterval(function () {
    if (elMSecond.textContent < 99) {
      if (elMSecond.textContent < 9) {
        elMSecond.textContent++;
        elMSecond.innerHTML = `0${elMSecond.textContent}`;
      } else if (elMSecond.textContent > 8) {
        elMSecond.textContent++;
        elMSecond.innerHTML = elMSecond.textContent;
      }
    } else if (elMSecond.textContent > 98) {
      if (elSecond.textContent < 9) {
        elSecond.textContent++;
        elSecond.innerHTML = `0${elSecond.textContent}`;
      } else if (elSecond.textContent > 8) {
        elSecond.textContent++;
        elSecond.innerHTML = elSecond.textContent;
      }
      elMSecond.textContent = "00";
    }
    // second
    if (elSecond.textContent > 59) {
      if (elMinute.textContent < 9) {
        elMinute.textContent++;
        elMinute.innerHTML = `0${elMinute.textContent}`;
      } else if (elMinute.textContent > 8) {
        elMinute.textContent++;
        elMinute.innerHTML = elMinute.textContent;
      }
      elSecond.textContent = "00";
    }
    // minute
    if (elMinute.textContent > 59) {
      if (elHour.textContent < 9) {
        elHour.textContent++;
        elHour.innerHTML = `0${elHour.textContent}`;
      } else if (elHour.textContent > 8) {
        elHour.textContent++;
        elHour.innerHTML = elHour.textContent;
      }
      elMinute.textContent = "00";
    }
    // hour
    if (elHour.textContent > 23) {
      elHour.textContent = "00";
    }
  }, 10);
  elStart.classList.add("hidden");
  elStop.classList.remove("hidden");
  elPlus.disabled = false;
  // stop time
  elStop.addEventListener("click", function () {
    setTimeout(function () {
      clearInterval(stopwatchMovement);
    }, 0);
    elStart.classList.remove("hidden");
    elStop.classList.add("hidden");
    elPlus.disabled = true;
  });

  // reset time
  elReset.addEventListener("click", function () {
    setTimeout(function () {
      clearInterval(stopwatchMovement);
    }, 0);
    elStart.classList.remove("hidden");
    elStop.classList.add("hidden");
    // clear time
    elMSecond.textContent = "00";
    elSecond.textContent = "00";
    elMinute.textContent = "00";
    elHour.textContent = "00";
    elTimeResult.innerHTML = "";
  });
});

// plus
elPlus.addEventListener("click", function () {
  const index = elTimeResult.querySelectorAll("li")?.length + 1;

  elTimeResult.innerHTML += `
<li style="border: none;" class="py-3.5 text-center li">
  <span class="font-bold pr-1.5">${index}. </span>
   ${elHour.textContent} : ${elMinute.textContent} : ${elSecond.textContent} : ${elMSecond.textContent}
</li>`;
});

// stopwatch Pointer style
const elStopwatchPointer = document.querySelector(".stopwatch-pointer");

setInterval(function () {
  elStopwatchPointer.setAttribute(
    "style",
    `transform:rotate(${elSecond.textContent * 6}deg)`
  );
}, 10);
