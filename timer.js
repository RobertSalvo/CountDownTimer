function setTimer(){
    
    const currentDate = new Date();
    let targetDate = new Date("2023-09-14T22:35:30").getTime();

    if(targetDate > currentDate){
        let countDownDate = targetDate - currentDate;
        const days = Math.floor(countDownDate / (24 * 60 * 60 * 1000));
        const hours = Math.floor((countDownDate / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((countDownDate / (1000 * 60)) % 60);
        const seconds = Math.floor(((countDownDate / 1000) % 60));

        document.getElementById('days').textContent = days.toString().padStart(2, '0'); 
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0'); 
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0'); 
    }
}  

setInterval(setTimer, 1000);

export const build = series(scssTask, jsTask);
 