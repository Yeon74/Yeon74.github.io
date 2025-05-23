const $container = document.querySelector("#container");
const $startBtn = document.querySelector("#startbtn");
const $container2 = document.querySelector("#container2");
const $startWordInput = document.querySelector("#startword");
const $chatArea = document.querySelector("#chat-area");
const $wordInput = document.querySelector("#wordInput");

let lastWord = ""; // 끝말잇기에서 이전 단어 저장
let isUserTurn = true;

$startBtn.addEventListener("click", () => {
    const startWord = $startWordInput.value;

    $container.style.display = 'none'; // 첫 화면 숨기기
    $container2.style.display = 'block'; // 게임 화면 표시

    //  기존 채팅 영역 초기화 후 시작 단어 추가
    $chatArea.innerHTML = ""; 
    if (startWord !== "") {
        addChatMessage(startWord, isUserTurn);
        lastWord = startWord; //  첫 단어 저장
    } else {
        lastWord = "기본단어"; // 필요하면 기본 단어 설정 가능
    }
    isUserTurn = !isUserTurn;
});

$wordInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const newWord = $wordInput.value.trim();
        if (newWord === "") return;

        //  끝말잇기 규칙 적용
        if (lastWord && newWord[0] === lastWord[lastWord.length - 1]) {
            addChatMessage(newWord, isUserTurn);
            lastWord = newWord; //  마지막 단어 업데이트
        } else {
            addChatMessage("끝말이 맞지 않습니다. 다시 입력하세요.",!isUserTurn);
        }

        $wordInput.value = ""; // 입력창 초기화
        isUserTurn = !isUserTurn;
    }
});

function addChatMessage(word, isUser) {
    const messageContainer = document.createElement("div");
    const avatar = document.createElement("div");
    const message = document.createElement("div");

    //사용자와 봇 메시지를 구분
    if (isUser) {
        messageContainer.classList.add("chat-area");
        
    }     else{
            messageContainer.classList.add("chat-area-reverese")
        }
        avatar.classList.add("avatar");
        message.classList.add("chat-bot"); 

    message.textContent = word;
    messageContainer.appendChild(avatar);
    messageContainer.appendChild(message);
    $chatArea.appendChild(messageContainer);

}
