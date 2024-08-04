const quoteContainer = document.getElementById("quote-container");
const quoteTextElem = document.getElementById("quote");
const authorTextElem = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

// let apiQuotes = [];

// 로딩 중
// function loading() {
//   loader.hidden = false;
//   quoteContainer.hidden = true;
// }

// //로딩 완료
// function complete() {
//   setTimeout(() => {
//     loader.hidden = true;
//     quoteContainer.hidden = false;
//   }, 500);
// }

// function newQuote() {
//   loading();
//   const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
//   console.log(quote);

//   // 저자 이름에 zenquotes.io가 있거나 없으면 Unknown으로 표시
//   if (quote.quoteAuthor == "zenquotes.io" || !quote.quoteAuthor) {
//     authorTextElem.textContent = "Unknown";
//   } else {
//     authorTextElem.textContent = quote.quoteAuthor;
//   }

//   // 텍스트 길이가 길면 폰트 크기 수정
//   if (quote.quoteTextElem.length > 50) {
//     quoteTextElem.classList.add("long-quote");
//     authorTextElem.style.fontSize = "1.7rem";
//   }
//   quoteTextElem.textContent = quote.quoteText;
//   complete();
// }

// 인용문 API 가져오기
// async function getQuotes() {
//   loading();
//   const proxyUrl = "https://cors-anywhere.herokuapp.com/";
//   const apiUrl = "https://zenquotes.io/api/quotes";
//   try {
//     const response = await fetch(proxyUrl + apiUrl);
//     apiQuotes = await response.json();
//     newQuote();
//   } catch (error) {
//     // 오류 표시
//     alert("문구를 불러올 수 없습니다.");
//   }
// }

async function getQuotes() {
  // loading();
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const apiUrl =
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    quoteTextElem.innerText = data.quoteText;
    authorTextElem.innerText = data.quoteAuthor;
  } catch (error) {
    getQuotes();
    // alert("문구를 불러올 수 없습니다.", error);
    // console.log("문구를 불러올 수 없습니다.", error);
  }
}

// // 트위터에 인용문 트윗
// function tweetQuote() {
//   const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteTextElem.textContent} - ${authorTextElem.textContent}`;
//   window.open(twitterUrl, "_blank");
// }

// //트윗 버튼 이벤트
// twitterBtn.addEventListener("click", tweetQuote);

// // 랜덤 인용문 버튼 이벤트
// newQuoteBtn.addEventListener("click", newQuote);

getQuotes();
