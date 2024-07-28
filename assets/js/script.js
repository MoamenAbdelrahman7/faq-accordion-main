const browseButtons=document.querySelectorAll(".items .item button");
console.log(browseButtons)
browseButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        let answer=document.querySelector("."+button.id);
        console.log(answer)
        if (answer.classList.contains("closed")){
            answer.classList.remove("closed");
            button.querySelector("img").src="assets/images/icon-minus.svg"
        }
        else{
            answer.classList.add("closed");
            button.querySelector("img").src="assets/images/icon-plus.svg"
        }
    });
});































