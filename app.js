const progress = document.querySelector(".progress");
const loading = document.querySelector(".loading");

let i = 0;
const fakeUploadPrec = [0, 10, 25, 40, 42, 60, 70, 75, 90, 100];

const interval = setInterval(() => {
    progress.style.width = fakeUploadPrec[i] + "%";
    loading.innerHTML = fakeUploadPrec[i] + "%";
    i++;
    if(i == fakeUploadPrec.length){
        clearInterval(interval);
        loading.innerHTML = "Completed";
    }
}, 1000);
