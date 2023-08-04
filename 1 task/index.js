const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

const createTimerAnimator = () => {
    const convert = (number) => {
        const numbStr = String(number);
        return numbStr.length < 2 ? "0" + numbStr : numbStr;
    };
    return (seconds) => {
        const hh = Math.floor(seconds / 3600);
        const mm = Math.floor((seconds - hh * 3600) / 60);
        const ss = seconds - 60 * (hh * 60 + mm);
        timerEl.innerText = `${convert(hh)}:${convert(mm)}:${convert(ss)}`;
        setTimeout(() => {
            if (seconds > 0) {
                animateTimer(seconds - 1);
            }
        }, 1000);
    };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
    inputEl.value = inputEl.value.replace(/\D/, "");
});

buttonEl.addEventListener("click", () => {
    const seconds = Number(inputEl.value);

    animateTimer(seconds);

    inputEl.value = "";
});
