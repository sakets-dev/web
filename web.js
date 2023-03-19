const start = Date.now()
const words = ["Welcome To My Website!","Check Out Everything!", "Have Questions? Contact Me!"];
const element = document.getElementById("phrase");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let i=0;
const writeloop1 = async () => {
    while (true) {
        let word = words[i];

        for (let j=0; j<word.length; j++) {
            element.innerText = word.substring(0, j+1);
            await sleep(100);
        }
        
        await sleep(1250)

        for (let j=(word.length); j>0; j--) {
            element.innerText = word.substring(0, j-1);
            await sleep(100);
        }
    
        await sleep(750);

        if (i===words.length-1){
            i=0;
        }
        else{
            i++;
        }
    }
}

writeloop1();




const toggle = document.getElementById('toggleDark');
const body = document.querySelector("body");
toggle.addEventListener('click',function(){
    this.classList.toggle("bi-moon");
    if(this.classList.toggle("bi-brightness-high-fill")){
        body.style.background = "#6B6969";
        body.style.color = "#282828";
        body.style.transition = "1.5s";
    } else { 
        body.style.background = "#282828";
        body.style.color = "#6B6969";
        body.style.transition = "1.5s";
    }
});