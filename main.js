class DigitalClock {
    constructor(element) {
        this.element = element;
    }

    //checks the time every half a second and updates the time
    start() {
        setInterval(() => {
            this.update();
        }, 500);
    }

    update() {
        const parts = this.getTimeParts();
        const minuteFormatted = parts.minute.toString().padStart(2, "0");
        const timeFormatted = `${parts.hour}:${minuteFormatted}`;
        const amPm = parts.isAm ? "AM" : "PM";

        this.element.querySelector(".clock-time").textContent = timeFormatted;
        this.element.querySelector(".clock-ampm").textContent = amPm;

    }

    getTimeParts() {
        const now = new Date();

        return {
            hour: now.getHours() % 12 || 12, //give us the current hour's value between 0 and 24
            minute: now.getMinutes(), //give us between 0 and 59
            isAm: now.getHours() < 12 //boolean value
        }
    }
}

const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

clockObject.start();