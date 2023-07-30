// btns 
let elStop = document.querySelector('.stop');
let elStart = document.querySelector('.start');
let elReset = document.querySelector('.reset');
let elPlus = document.querySelector('.plus');
// time 
let elHour = document.querySelector('.hour');
let elMinute = document.querySelector('.minute');
let elSecond = document.querySelector('.second');
let elMSecond = document.querySelector('.m-second');
// list 
let elTimeResult = document.querySelector('.time-result');
let elli = document.querySelectorAll('.li');

elStart.addEventListener('click', function () {
    const stopwatchMovement = setInterval(function () {
        // msecond 
        if (elMSecond.textContent < 99) {
            if (elMSecond.textContent < 9) {
                elMSecond.textContent++;
                elMSecond.innerHTML = `0${elMSecond.textContent}`;
            } else if (elMSecond.textContent > 8) {
                elMSecond.textContent++;
                elMSecond.innerHTML = elMSecond.textContent;
            };
        }
        else if (elMSecond.textContent > 98) {
            if (elSecond.textContent < 9) {
                elSecond.textContent++;
                elSecond.innerHTML = `0${elSecond.textContent}`;
            } else if (elSecond.textContent > 8) {
                elSecond.textContent++;
                elSecond.innerHTML = elSecond.textContent;
            }
            elMSecond.textContent = '00';
        };
        // second 
        if (elSecond.textContent > 59) {
            if (elMinute.textContent < 9) {
                elMinute.textContent++;
                elMinute.innerHTML = `0${elMinute.textContent}`;
            } else if (elMinute.textContent > 8) {
                elMinute.textContent++;
                elMinute.innerHTML = elMinute.textContent;
            }
            elSecond.textContent = '00';
        }
        // minute 
        if (elMinute.textContent > 59) {
            if (elHour.textContent < 9) {
                elHour.textContent++;
                elHour.innerHTML = `0${elHour.textContent}`
            } else if (elHour.textContent > 8) {
                elHour.textContent++;
                elHour.innerHTML = elHour.textContent;
            };
            elMinute.textContent = '00';
        }
        // hour 
        if (elHour.textContent > 23) {
            elHour.textContent = '00';
        };
    }, 10);
    elStart.classList.add('hidden');
    elStop.classList.remove('hidden');
    elPlus.disabled = false;
    // stop time
    elStop.addEventListener('click', function () {
        setTimeout(function () {
            clearInterval(stopwatchMovement);
        }, 0);
        elStart.classList.remove('hidden');
        elStop.classList.add('hidden');
        elPlus.disabled = true;
    });

    // reset time 
    elReset.addEventListener('click', function () {
        setTimeout(function () {
            clearInterval(stopwatchMovement);
        }, 0);
        elStart.classList.remove('hidden');
        elStop.classList.add('hidden');
        // clear time 
        elMSecond.textContent = '00';
        elSecond.textContent = '00';
        elMinute.textContent = '00';
        elHour.textContent = '00';
        elTimeResult.innerHTML = '';
    });
});
// plus 
elPlus.addEventListener('click', function () {
    elTimeResult.innerHTML += `
    <li style="border: none;" class="py-1.5 text-center li">${elHour.textContent} : ${elMinute.textContent} : ${elSecond.textContent} : ${elMSecond.textContent}</li>`
})
// stopwatch Pointer style
let elStopwatchPointer = document.querySelector('.stopwatch-pointer');
setInterval(function () {
    elStopwatchPointer.setAttribute('style', `transform:rotate(${elSecond.textContent * 6}deg)`)
}, 10)