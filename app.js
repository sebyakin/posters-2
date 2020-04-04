window.addEventListener('load', () => {

    let tip = document.querySelector('.tip');

    document.querySelector(".preloader").style.visibility = "hidden";

    let timerShow = setTimeout(() => showTip(), 1000);
    let timerHide = setTimeout(() => hideTip(), 5000);
    // setTimeout(() => {
    //   clearInterval(timerId);
    // }, 2500);


    function showTip () {
        
        tip.classList.add('tip-show');
    }

    function hideTip () {
        tip.classList.remove('tip-show');
    }



    let tl = document.querySelector('.t-l');
    let ar = document.querySelector('.ar');

    let info = document.querySelector('.info');
    let popup = document.querySelector('.popup');

    info.addEventListener('click', function() {
        popup.classList.toggle('show');
        // info.textContent = ('×');
    });

});



