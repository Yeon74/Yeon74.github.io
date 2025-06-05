(function(){
// header

gsap.from('.title>li', {
    y: -100,
    opacity: 0,
    stagger: 0.2,
    delay: 1
});

//   화살표가 위에서 아래로 이동, 1번 화살표 실행 되면서 2번 화살표 실행


const tl3 = gsap.timeline({ repeat: -1 });
tl3.to('.arrow > p', {
    y: 10,
    opacity: 1,
    stagger: 0.2,
    duration: 0.2,
    ease: 'power2.out'
})
    .to('.arrow >p', {
        y: 20,
        opacity: 0,
        stagger: 0.2,
        duration: 0.2,

    }, '-=0.2');

// aboutme에 들어가는 텍스트들 
// 사이즈가 작아지고 안보였다가 해당 항목이 보이면 커지면서 보이도록

//  gsap.from('#about .info p', {
//      scale: 0.5,
//   opacity: 0,
//   duration: 1,
//   ease: 'power2.out',

//   scrollTrigger: {
//     trigger: '#about .info p',
//     start: 'top 90%',
//     toggleActions: 'play none none none'
//   }

// });
const $aboutMsg = document.querySelectorAll('.about-wrap> .info>p');
$aboutMsg.forEach((msg) => {
    gsap.from(msg, {
        scale: 0.4,
        opacity: 0,
        duration: 1,
        scollTriiger: {
            trigger: msg,
            start: 'top 90%',
            tooleActions: 'play reverse play reverse'
        }
    });
});

// keyword부분이 가로로 왔다갔다 처리
// const lines = document.querySelectorAll('.keyword li');

// lines.forEach((line, i) => {
//   gsap.to(line, {
//     x: i % 2 === 0 ? 50 : -50, // 짝수 줄은 오른쪽, 홀수 줄은 왼쪽
//     repeat: -1,
//     yoyo: true,
//     duration: 2,
//     ease: 'power1.inOut'
//   });
// });

const $keywordList = document.querySelectorAll('.keyword>li');
// $keywordList.forEach((word, idx) => {
//     const posX = (idx === 1) ? 50 : -50;
//     gsap.fromTo(word,
//         { x: posX },
//         {
//             x: -posX,
//             duration: 1,
//             // delay: idx*0.2,
//             repeat: -1,
//             yoyo: true,
//             ease: 'none'
//         }
//     );
// });
const tl2 = gsap.timeline({repeat:-1, yoyo:true});
tl2.to($keywordList,{
    x:(i)=>(i===1 ? -100:100),
    duration: 0.5,
    ease:'sine.inOut',
    stagger:{
        each: 0.2,        
    }
});

// project 영역의 .item들을 아래에서 올라오면서 보이도록
gsap.from(".item", {
  y: 100,           // 아래에서
  opacity: 0,       // 투명하게 시작
  duration: 1,      
  stagger: 0.3,     // 순차적으로
  scrollTrigger: {
    trigger: "#projects",
    start: "top 80%",  // 스크롤 위치 기준
  }
});

// const $projects = document.querySelectorAll('#projects>.project-wrap');
// $projects.forEach((article)=>{
//     const $item = article.querySelectorAll('.item');
//     $item.forEach((item)=>{
//       gsap.from(item, {
//         y:100,
//         opacity:0,
//         duration:1,
//         ease: 'power3.out',
//         scrollTrigger:{
//             trigger: item,
//             start: 'top 80%',
//             end: 'top 40%',
//             scrub:true
//         }
//       });
//     });
    
// });

// skills li들을 차례대로 보이기

const $shapes = document.querySelectorAll('.skill-item> li');
gsap.from($shapes,{
    opacity: 0,
    scale:0.2,
    duration:0.5,
    stagger:0.2,
    ease:'back.out',
    scrollTrigger:{
        trigger:'#skills',
        start: 'top 50%',
        tooleActions: 'play reverse play reverse'
    }
});

// footer
gsap.fromTo('footer',{
    backgroundColor:'#ff0000',
},{
    backgroundColor:'#eeeeee',
    duration:0.5,
    ease:'power2.out',
    scrollTrigger:{
        trigger:'footer',
        start: 'top 80%',
        end: 'bottom bottom',
        scrub: true,
        toggleActions: 'play none none none',
        
    }
});

const btns = document.querySelectorAll('.footer-wrap > ul > li');
const mainColor = getComputedStyle(document.documentElement).getPropertyValue('--main-color');
const subColor = getComputedStyle(document.documentElement).getPropertyValue('--sub-color');

let swapped = false;

setInterval(() => {
    swapped = !swapped;
    btns.forEach((btn, idx) => {
        // 번갈아가며 색상 적용
        let bg = ((idx === 0 && !swapped) || (idx === 1 && swapped)) ? subColor : mainColor;
        let color = ((idx === 0 && !swapped) || (idx === 1 && swapped)) ? mainColor : subColor;
        gsap.to(btn, {
            backgroundColor: bg,
            color: color,
            duration: 0.5,
            overwrite: 'auto'
        });
        gsap.to(btn.querySelector('a'), {
            color: color,
            duration: 0.5,
            overwrite: 'auto'  
        });
    });
}, 1500);



// // 두 버튼 li 선택
// const btns = document.querySelectorAll('.footer-wrap > ul > li');

// // 색상 변수
// const mainColor = getComputedStyle(document.documentElement).getPropertyValue('--main-color');
// const subColor = getComputedStyle(document.documentElement).getPropertyValue('--sub-color');

// let swapped = false;

// setInterval(() => {
//     swapped = !swapped;
//     btns.forEach((btn, idx) => {
//         if ((idx === 0 && !swapped) || (idx === 1 && swapped)) {
//             btn.style.backgroundColor = subColor;
//             btn.style.color = mainColor;
//         } else {
//             btn.style.backgroundColor = mainColor;
//             btn.style.color = subColor;
//         }
//         // a태그 색상도 맞춰주기
//         btn.querySelector('a').style.color = btn.style.color;
//     });
// }, 1500); // 1.5초마다 바뀜

// 첫번째 링크 버튼 애니
// gsap.to('.links>li:nth-child(1)',{
//     backgroundColor: '#2957e2',
//     color: '#eeeeee',
//     borderColor:'#2957e2',
//     duration: 1,
//     repeat:-1,
//     yoyo:true,
//     ease: 'power1.inOut',
//     scrollTrigger:{
//         trigger:'footer',
//         start: 'top 50%',
//         toggleActions:'play none none none'
//     }

// });
// gsap.to('.links>li:nth-child(2)',{
//     backgroundColor: '#eeeeee',
//     color: '#2957e2',
//     borderColor:'#2957e2',
//     duration: 1,
//     repeat:-1,
//     yoyo:true,
//     ease: 'power1.inOut',
//     scrollTrigger:{
//         trigger:'footer',
//         start: 'top 50%',
//         toggleActions:'play none none none'
//     }

// });

// gsap.to('links>li',{
//     backgroundColor: (i)=>(i===0 ?'#2957e2':'#eeeeee' ),
//     color: (i)=>(i===0 ? '#eeeeee' : '#2957e2'),
//     borderColor : (i)=>(i===0 ? '#2957e2' :'#eeeeee' ),
//     duration: 2,
//     repeat: -1,
//     yoyo: true,
//     ease: 'step(1)',
//     scrollTrigger:{
//         trigger
//     }
// })

})();