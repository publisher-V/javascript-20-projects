const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes = [];

function newQuote() {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);

  // 저자 이름에 zenquotes.io가 있거나 없으면 Unknown으로 표시
  if (quote.a == "zenquotes.io" || !quote.a) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.a;
  }

  // 텍스트 길이가 길면 폰트 크기 수정
  if (quote.q.length > 50) {
    quoteText.classList.add("long-quote");
    authorText.style.fontSize = "1.7rem";
  }
  quoteText.textContent = quote.q;
}

// 인용문 API 가져오기
async function getQuotes() {
  const apiUrl = "https://zenquotes.io/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // 오류 표시
    alert("문구를 불러올 수 없습니다.");
  }
}

// 트위터에 인용문 트윗
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

//트윗 버튼 이벤트
twitterBtn.addEventListener("click", tweetQuote);

// 랜덤 인용문 버튼 이벤트
newQuoteBtn.addEventListener("click", newQuote);

getQuotes();
