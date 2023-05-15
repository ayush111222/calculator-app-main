const body = document.body;
const h1 = document.querySelector("h1");
const themeLogo = document.querySelector(".theme__logo")
const span = document.querySelectorAll("span")
const themeToggleBtn = document.querySelector(".theme__toggle__btn__box");
const togglebtn = document.querySelector(".theme__toggle__btn");
const input = document.getElementById("calc__id")
const btnsBox = document.querySelector(".btns__box")
const btns = document.querySelectorAll(".calc__btn")
const delBtn = document.querySelector(".del__btn")
const resetBtn = document.querySelector(".Reset__btn")
const equalBtn = document.querySelector(".equal__btn")
let string = " ";


themeToggleBtn.style.justifyContent = "flex-start";

themeToggleBtn.addEventListener("click", ()=>{
    if(themeToggleBtn.style.justifyContent == "flex-start"){
        themeToggleBtn.style.justifyContent = "center";

        body.style.background = "hsl(0, 0%, 90%)";
        body.style.background = "hsl(0, 0%, 90%)";

        h1.style.color = "hsl(60, 10%, 19%)";
        themeLogo.style.color = "hsl(60, 10%, 19%)";
        themeToggleBtn.style.background = "hsl(0, 5%, 81%)";
        togglebtn.style.background = "hsl(25, 98%, 40%)";
        span.forEach(element =>{
            element.style.color = "hsl(60, 10%, 19%)";
        })
        input.style.background = "hsl(0, 0%, 93%)"
        input.style.color = "hsl(60, 10%, 19%)"
        btnsBox.style.background = "hsl(0, 5%, 81%)"
        btns.forEach(element =>{
            element.style.color = "hsl(60, 10%, 19%)"
            element.style.background = "hsl(45, 7%, 89%)"
            element.style.boxShadow = "0px 3px hsl(35, 11%, 61%)"
            
        })
        delBtn.style.background = "hsl(185, 42%, 37%)"
        resetBtn.style.background = "hsl(185, 42%, 37%)"
        equalBtn.style.background = "hsl(25, 98%, 40%)"

        delBtn.style.color = "hsl(0, 0%, 100%)"
        resetBtn.style.color = "hsl(0, 0%, 100%)"
        equalBtn.style.color = "hsl(0, 0%, 100%)"

        togglebtn.style.boxShadow = "1px 1px hsl(25, 99%, 27%)";
        delBtn.style.boxShadow = "0px 3px hsl(185, 58%, 25%)"
        resetBtn.style.boxShadow = "0px 3px hsl(185, 58%, 25%)"
        equalBtn.style.boxShadow = "0px 3px hsl(25, 99%, 27%)"

        btns.forEach(element =>{
            element.addEventListener("mouseenter", ()=>{
                element.style.background = "hsl(45, 7%, 89%)"
            })
        })
        togglebtn.addEventListener("mouseenter", ()=>{
            togglebtn.style.background = "hsl(25, 85%, 55%)"
        })
        delBtn.addEventListener("mouseenter", ()=>{
            delBtn.style.background = "hsl(185, 53%, 55%)"
        })
        resetBtn.addEventListener("mouseenter", ()=>{
            resetBtn.style.background = "hsl(185, 53%, 55%)"
        })
        equalBtn.addEventListener("mouseenter", ()=>{
            equalBtn.style.background = "hsl(25, 85%, 55%)"
        })

        btns.forEach(element =>{
            element.addEventListener("mouseleave", ()=>{
                element.style.background = "hsl(45, 7%, 89%)"
            })
        })
        togglebtn.addEventListener("mouseleave", ()=>{
            togglebtn.style.background = "hsl(25, 98%, 40%)"
        })
        delBtn.addEventListener("mouseleave", ()=>{
            delBtn.style.background = "hsl(185, 42%, 37%)"
        })
        resetBtn.addEventListener("mouseleave", ()=>{
            resetBtn.style.background = "hsl(185, 42%, 37%)"
        })
        equalBtn.addEventListener("mouseleave", ()=>{
            equalBtn.style.background = "hsl(25, 98%, 40%)"
        })

    }else if (themeToggleBtn.style.justifyContent == "center"){
        themeToggleBtn.style.justifyContent = "flex-end";

        body.style.background = "hsl(268, 75%, 9%)";
        h1.style.color = "hsl(52, 100%, 62%)";
        themeLogo.style.color = "hsl(52, 100%, 62%)";
        themeToggleBtn.style.background = "hsl(268, 71%, 12%)";
        togglebtn.style.background = "hsl(176, 100%, 44%)";
        span.forEach(element =>{
            element.style.color = "hsl(52, 100%, 62%)";
        })
        input.style.background = "hsl(268, 71%, 12%)"
        input.style.color = "hsl(52, 100%, 62%)"
        btnsBox.style.background = "hsl(268, 71%, 12%)"
        btns.forEach(element =>{
            element.style.color = "hsl(52, 100%, 62%)"
            element.style.background = "hsl(268, 47%, 21%)"
            element.style.boxShadow = "0px 3px hsl(290, 70%, 36%)"
        })
        delBtn.style.background = "hsl(281, 89%, 26%)"
        resetBtn.style.background = "hsl(281, 89%, 26%)"
        equalBtn.style.background = "hsl(176, 100%, 44%)"

        delBtn.style.color = "hsl(0, 0%, 100%)"
        resetBtn.style.color = "hsl(0, 0%, 100%)"
        equalBtn.style.color = "hsl(198, 20%, 13%)"

        togglebtn.style.boxShadow = "1px 1px hsl(177, 92%, 70%)";
        delBtn.style.boxShadow = "0px 3px hsl(285, 91%, 52%)"
        resetBtn.style.boxShadow = "0px 3px hsl(285, 91%, 52%)"
        equalBtn.style.boxShadow = "0px 3px hsl(177, 92%, 70%)"

        btns.forEach(element =>{
            element.addEventListener("mouseenter", ()=>{
                element.style.background = "hsl(268, 52%, 41%)"
            })
        })
        togglebtn.addEventListener("mouseenter", ()=>{
            togglebtn.style.background = "hsl(176, 100%, 67%)"
        })
        delBtn.addEventListener("mouseenter", ()=>{
            delBtn.style.background = "hsl(281, 77%, 48%)"
        })
        resetBtn.addEventListener("mouseenter", ()=>{
            resetBtn.style.background = "hsl(281, 77%, 48%)"
        })
        equalBtn.addEventListener("mouseenter", ()=>{
            equalBtn.style.background = "hsl(176, 79%, 61%)"
        })

        btns.forEach(element =>{
            element.addEventListener("mouseleave", ()=>{
                element.style.background = "hsl(268, 47%, 21%)"
            })
        })
        togglebtn.addEventListener("mouseleave", ()=>{
            togglebtn.style.background = "hsl(176, 100%, 44%)"
        })
        delBtn.addEventListener("mouseleave", ()=>{
            delBtn.style.background = "hsl(281, 89%, 26%)"
        })
        resetBtn.addEventListener("mouseleave", ()=>{
            resetBtn.style.background = "hsl(281, 89%, 26%)"
        })
        equalBtn.addEventListener("mouseleave", ()=>{
            equalBtn.style.background = "hsl(176, 100%, 44%)"
        })
    }else{
        themeToggleBtn.style.justifyContent = "flex-start";

        body.style.background = "hsl(222, 26%, 31%)";
        h1.style.color = "hsl(0, 0%, 100%)";
        themeLogo.style.color = "hsl(0, 0%, 100%)";
        themeToggleBtn.style.background = "hsl(223, 31%, 20%)";
        togglebtn.style.background = "hsl(6, 63%, 50%)";
        span.forEach(element =>{
            element.style.color = "hsl(0, 0%, 100%)";
        })
        input.style.background = "hsl(224, 36%, 15%)"
        input.style.color = "hsl(0, 0%, 100%)"
        btnsBox.style.background = "hsl(223, 31%, 20%)"
        btns.forEach(element =>{
            element.style.color = "hsl(221, 14%, 31%)"
            element.style.background = "hsl(30, 25%, 89%)"
            element.style.boxShadow = "0px 3px hsl(28, 16%, 65%)"
        })
        delBtn.style.background = "hsl(225, 21%, 49%)"
        resetBtn.style.background = "hsl(225, 21%, 49%)"
        equalBtn.style.background = "hsl(6, 63%, 50%)"

        delBtn.style.color = "hsl(0, 0%, 100%)"
        resetBtn.style.color = "hsl(0, 0%, 100%)"
        equalBtn.style.color = "hsl(0, 0%, 100%)"

        togglebtn.style.boxShadow = "1px 1px hsl(6, 70%, 34%)";
        delBtn.style.boxShadow = "0px 3px hsl(224, 28%, 35%)"
        resetBtn.style.boxShadow = "0px 3px hsl(224, 28%, 35%)"
        equalBtn.style.boxShadow = "0px 3px hsl(6, 70%, 34%)"

        btns.forEach(element =>{
            element.addEventListener("mouseenter", ()=>{
                element.style.background = "hsl(45, 7%, 89%)"
            })
        })
        togglebtn.addEventListener("mouseenter", ()=>{
            togglebtn.style.background = "hsl(6, 78%, 59%)";
        })
        delBtn.addEventListener("mouseenter", ()=>{
            delBtn.style.background = "hsl(225, 49%, 67%)";
        })
        resetBtn.addEventListener("mouseenter", ()=>{
            resetBtn.style.background = "hsl(225, 49%, 67%)";
        })
        equalBtn.addEventListener("mouseenter", ()=>{
            equalBtn.style.background = "hsl(6, 78%, 59%)";
        })

        btns.forEach(element =>{
            element.addEventListener("mouseleave", ()=>{
                element.style.background = "hsl(45, 7%, 89%)"
            })
        })
        togglebtn.addEventListener("mouseleave", ()=>{
            togglebtn.style.background = "hsl(6, 63%, 50%)";
        })
        delBtn.addEventListener("mouseleave", ()=>{
            delBtn.style.background = "hsl(225, 21%, 49%)";
        })
        resetBtn.addEventListener("mouseleave", ()=>{
            resetBtn.style.background = "hsl(225, 21%, 49%)";
        })
        equalBtn.addEventListener("mouseleave", ()=>{
            equalBtn.style.background = "hsl(6, 63%, 50%)";
        })
    }
})

btns.forEach(button =>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerText === '='){
            string = eval(string);
            input.innerText = string;
        }
        else if(e.target.innerText === 'RESET'){
            string = "";
            input.innerText = string;
        }
        else if(e.target.innerText === 'DEL'){
            string = string.substring(0, string.length-1)
            input.innerText = string;
        }
        else{
            string += e.target.innerText;
            input.innerText = string;
        }
    })
})


