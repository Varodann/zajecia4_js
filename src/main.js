// Zmienne - twarde
let cookie_per_secound = 0
let cookie_per_click = 1
let summary = 0;

let cost_of_upgarde_l1 = 10;
let cost_of_upgarde_l2 = 100;
let cost_of_upgarde_l3 = 500;
let cost_of_upgarde_l4 = 1000;
let cost_of_upgarde_l5 = 100000;

let counter_up_l1 = 0;
let counter_up_l2 = 0;
let counter_up_l3 = 0;
let counter_up_l4 = 0;
let counter_up_l5 = 0;

let cookies_per_sec_lev1 = 0
let cookies_per_sec_lev2 = 0;
let cookies_per_sec_lev3 = 0;
let cookies_per_sec_lev4 = 0;
let cookies_per_sec_lev5 = 0

let counter_num = document.querySelector("#cookie_button");

let level1_button = document.querySelector(".first_upgrade")
let level2_button = document.querySelector(".second_upgrade")
let level3_button = document.querySelector(".third_upgrade")
let level4_button = document.querySelector(".fourth_upgrade")
let level5_button = document.querySelector(".fifth_upgrade")

// Funkcja odpowiedzialna za dodawania ciasteczek po nacisnieciu
counter_num.addEventListener('click', function (){
    summary += cookie_per_click;
})

level1_button.addEventListener('click', function (){
    if(summary > cost_of_upgarde_l1 ) {
        summary -= cost_of_upgarde_l1;
        cookie_per_secound += 0.1;
        cookies_per_sec_lev1 += 0.1;
        counter_up_l1++;
        cost_of_upgarde_l1 = (cost_of_upgarde_l1 + (cost_of_upgarde_l1 * 0.3));
    }
})

level2_button.addEventListener('click', function (){
    if(summary > cost_of_upgarde_l2){
        summary -= cost_of_upgarde_l2;
        cookie_per_secound += 1;
        cookies_per_sec_lev2 += 1;
        counter_up_l2++;
        cost_of_upgarde_l2 = (cost_of_upgarde_l2 + (cost_of_upgarde_l2 * 0.3));

    }
})

level3_button.addEventListener('click', function (){
    if(summary > cost_of_upgarde_l3){
        summary -= cost_of_upgarde_l3;
        cookie_per_secound += 5;
        cookies_per_sec_lev3 += 5;
        counter_up_l3++;
        cost_of_upgarde_l3 = (cost_of_upgarde_l3 + (cost_of_upgarde_l3 * 0.3));

    }
})

level4_button.addEventListener('click', function (){
    if(summary > cost_of_upgarde_l4){
        summary -= cost_of_upgarde_l4;
        cookie_per_secound += 10;
        cookies_per_sec_lev4 += 10;
        counter_up_l4++;
        cost_of_upgarde_l4 = (cost_of_upgarde_l4 + (cost_of_upgarde_l4 * 0.3));
    }
})

level5_button.addEventListener('click', function (){
    if(summary > cost_of_upgarde_l5){
        summary -= cost_of_upgarde_l5;
        cookie_per_secound += 100;
        cookies_per_sec_lev5 += 100;
        counter_up_l5++;
        cost_of_upgarde_l5 = (cost_of_upgarde_l5 + (cost_of_upgarde_l5 * 0.3));
    }
})

//Funkcje:

function add_cookie_per_secound() {
    summary += cookie_per_secound;

    clicker();

    document.querySelector("#click_cookie_counter").innerHTML = Math.floor(cookie_per_click);
    document.querySelector("#secound_cookie_counter").innerHTML = Math.floor(cookie_per_secound);
    document.querySelector("#cookie_summary").innerHTML = Math.floor(summary);

    document.querySelector(".level_1").innerHTML = counter_up_l1;
    document.querySelector(".level_2").innerHTML = counter_up_l2;
    document.querySelector(".level_3").innerHTML = counter_up_l3;
    document.querySelector(".level_4").innerHTML = counter_up_l4;
    document.querySelector(".level_5").innerHTML = counter_up_l5;

    document.querySelector("#upgrade_cost_lvl1").innerHTML = Math.ceil(cost_of_upgarde_l1);
    document.querySelector("#upgrade_cost_lvl2").innerHTML = Math.ceil(cost_of_upgarde_l2);
    document.querySelector("#upgrade_cost_lvl3").innerHTML = Math.ceil(cost_of_upgarde_l3);
    document.querySelector("#upgrade_cost_lvl4").innerHTML = Math.ceil(cost_of_upgarde_l4);
    document.querySelector("#upgrade_cost_lvl5").innerHTML = Math.ceil(cost_of_upgarde_l5);

    document.querySelector("#cookies_per_second_lvl1").innerHTML = Math.ceil(cookies_per_sec_lev1);
    document.querySelector("#cookies_per_second_lvl2").innerHTML = Math.ceil(cookies_per_sec_lev2);
    document.querySelector("#cookies_per_second_lvl3").innerHTML = Math.ceil(cookies_per_sec_lev3);
    document.querySelector("#cookies_per_second_lvl4").innerHTML = Math.ceil(cookies_per_sec_lev4);
    document.querySelector("#cookies_per_second_lvl5").innerHTML = Math.ceil(cookies_per_sec_lev5);
}

function clicker(){
    cookie_per_click = 1 + counter_up_l1 + 0.1 * cookie_per_secound;
}

function check_if_i_can_affrod(){
    //Pierwszy przycisk
    if (summary >= cost_of_upgarde_l1) {
        level1_button.style.background = "green";
    } else {
        level1_button.style.background = "red";
    }
    //Drugi przycisk
    if (summary >= cost_of_upgarde_l2) {
        level2_button.style.background = "green";
    } else {
        level2_button.style.background = "red";
    }
    //Trzeci przycisk
    if (summary >= cost_of_upgarde_l3) {
        level3_button.style.background = "green";
    } else {
        level3_button.style.background = "red";
    }
    //Czwart przycisk
    if (summary >= cost_of_upgarde_l4) {
        level4_button.style.background = "green";
    } else {
        level4_button.style.background = "red";
    }
    //Piąty przycisk
    if (summary >= cost_of_upgarde_l5) {
        level5_button.style.background = "green";
    } else {
        level5_button.style.background = "red";
    }


}

setInterval(add_cookie_per_secound,1000);
setInterval(check_if_i_can_affrod,1000);
