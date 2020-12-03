function preLoader () {
    function showLoader () {
        const preLoad = document.querySelector(".preLoad");
        preLoad.innerHTML=` <img id="clock" src="./img/clock.svg" alt="houseglass"> </img> `;
    }
    function hideLoader() {
        const preLoad = document.querySelector(".preLoad");
        preLoad.style.display="none";
    }

    setTimeout(()=> {showLoader()},1);
    setTimeout(()=> {hideLoader()},3000)
 
}
export default preLoader;
