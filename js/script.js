setInterval(() => {
    // Select the html time holders
    const monthElement = document.querySelector(".month");
    const dayElement = document.querySelector(".day");
    const hourElement = document.querySelector(".hour");
    const minElement = document.querySelector(".min");
    const secElement = document.querySelector(".sec");

    // Get the time gap between target date and currant date:
    const targetDate = new Date("jul 23, 2022 20:00:00");
    const now = new Date().getTime();
    const timeGap = targetDate - now;

    // Set the time values
    const sec = 1000;
    const min = sec * 60;
    const hour = min * 60;
    const day = hour * 24;
    const month = day * 30;

    // Calculate the time gap
    const textMonth = Math.floor(timeGap / month);
    const textDay = Math.floor((timeGap % month) / day);
    const textHour = Math.floor((timeGap % day) / hour);
    const textMin = Math.floor((timeGap % hour) / min);
    const textSec = Math.floor((timeGap % min) / sec);

    
    if (targetDate == now) {
         monthElement.innerHTML = "-";
        dayElement.innerHTML = "-";
        hourElement.innerHTML = "-";
        minElement.innerHTML = "-";
        secElement.innerHTML = "-";
        document.getElementById('theTitle').textContent = "تم الزواج بنجاح، ألف مبروك!";
    } else {
        // Replace html timers elements value with actual time
        monthElement.innerHTML = textMonth;
        dayElement.innerHTML = textDay;
        hourElement.innerHTML = textHour;
        minElement.innerHTML = textMin;
        secElement.innerHTML = textSec;
    }
}, 1000);
