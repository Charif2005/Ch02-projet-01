const paragraph_1 = document.getElementById("paragraph-1");
    const nameJob_1 = document.getElementById("NameJob-1");
    const paragraph_2 = document.getElementById("paragraph-2");
    const nameJob_2 = document.getElementById("NameJob-2");
    const btnPrev = document.getElementById("btn_prev");
    const btnNext = document.getElementById("btn_next");
    const tanya_img = document.getElementById("tanya_mg");
    const john_img= document.getElementById("john_img");


    let a = true;

    function toggleContent() {
      paragraph_1.style.display = a ? "none" : "block";
      nameJob_1.style.display = a ? "none" : "block";
      tanya_img.style.display = a ? "none" : "block";
      john_img.style.display = a ? "block" : "none";
      paragraph_2.style.display = a ? "block" : "none";
      nameJob_2.style.display = a ? "block" : "none";
      
      a = !a;
    }

    btnPrev.addEventListener("click", toggleContent);
    btnNext.addEventListener("click", toggleContent);


