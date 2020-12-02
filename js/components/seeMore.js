function seeMore () {
const button= document.querySelector(".button-seeMore");
const topSection=document.querySelector(".main-section");
const bottomSection = document.querySelector(".bottom-section");
let count=0;
button.addEventListener('click',()=> {
    if (count===0) {
        topSection.style.height=40 + "vh";
        bottomSection.style.height=60+"vh";
        button.innerHTML="SEE LESS";
        count++;
        bottomSection.style.display="flex";
    }
    else if (count===1) {
        topSection.style.height=100 + "vh";
        bottomSection.style.height=0+"vh"
        button.innerHTML="SEE MORE"
        count--;
        bottomSection.style.display="none";
    }
})

}


export default seeMore;