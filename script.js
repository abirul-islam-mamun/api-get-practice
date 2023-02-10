(function ($){

    // for active and remove 
       $(".mainmenu li").on("click", function (){
        $(".mainmenu li").removeClass("active");
        $(this).addClass("active");
    })


    // jason api get methode 
    $(window).on("load", function() {
        $.get (
            "https://perfectedgetech.com/all-dev-projects/perfectjob-admin/api/country-list",
            function(data, status) {
                console.log(data);
                if (status == "success") {
                    const getCountry = data.data.country_list;


                    // (for loop way:
                    // const country_keys = Object.keys(getCountry);
                    // for(i = 0; i < country_keys.length; i++) {
                    //     console.log(country_keys[i])
                    // }


                    //for in loop way : =>
                    for (let x in getCountry) {
                        // console.log(getCountry[x])
                        $(".main-list").append(`<li> ${getCountry[x]} </li>`)
                        
                    }
                }

            }
        )
    })



// $("#mouse-event").on('click',(event)=>{
//     alert("clicked");
// })


// function clickfunction () {
//     document.getElementById('mouse-event').innerHTML = alert("hello")
// }


const onbtn = document.querySelector('.onclick');

onbtn.addEventListener('click', function (){
    onbtn.style.background = "#ffac09";
    onbtn.style.boxShadow = "0 0 40px #ffac09";
    onbtn.style.transition = ".3s ease";
})




})(window.jQuery);




