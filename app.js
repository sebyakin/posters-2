window.addEventListener('load', () => {

    let tip = document.querySelector('.tip');

    console.log(':p');

    document.querySelector(".preloader").style.visibility = "hidden";


    // function show () {
    //     let num = Math.floor(Math.random() * 4); 
    //     warning[num].classList.add('warning-shown');
    //     setTimeout(() => warning[num].classList.remove('warning-shown'), 2000);
    // }

    // let timerShow = setInterval(() => show(), 7000);

    // setTimeout(() => { clearInterval(timerShow);}, 20000);




    // let timerShow = setTimeout(() => showTip(), 1000);
    // let timerHide = setTimeout(() => hideTip(), 5000);


    // function showTip () {
    //     tip.classList.add('tip-show');
    // }

    // function hideTip () {
    //     tip.classList.remove('tip-show');
    // }



    let info = document.querySelector('.info');
    let popup = document.querySelector('.popup');

    info.addEventListener('click', function() {
        popup.classList.toggle('show');
    });

    // info.addEventListener('mouseover', function() {
    //     console.log('jopa');
    //     popup.classList.add('show');
    // });

    // info.addEventListener('mouseout', function() {
    //     popup.classList.remove('show');
    // });

});



