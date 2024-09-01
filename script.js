let boxes=document.querySelectorAll(".box");
let restart=document.querySelector(".rst");
let winn_pat=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let message=document.querySelector(".msg");
let para=document.querySelector(".par");
let ngame=document.querySelector(".newgame");
let turn=1;//x chance
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn==1){
            box.innerText="x";
            turn=0;
        }
        else{
            box.innerText="o";
            turn=1;
        }
        box.style.pointerEvents="none";
        checkwinner();
    })
});
let checkwinner=()=>{
    winn_pat.forEach((arr)=>{
      if(boxes[arr[0]].innerText!=""&&boxes[arr[1]].innerText!=""&&boxes[arr[2]].innerText!=""){
        let val=boxes[arr[0]].innerText
        if(val==boxes[arr[1]].innerText&&val==boxes[arr[2]].innerText){
           showwinner(val);
        }
      }
    })
}
let showwinner=(val)=>{
    para.innerText=`congoo winner is ${val}`;
    message.classList.remove("hide");
    boxes.forEach((box)=>{
        box.style.pointerEvents="none";
    })
}
ngame.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.style.pointerEvents="auto";
    })
});
restart.addEventListener("click",()=>{
   boxes.forEach((box)=>{
    box.innerText="";
    box.style.pointerEvents="auto";
   })
   message.classList.add("hide");
   turn=1;
});

