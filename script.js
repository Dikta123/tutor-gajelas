const quotes = ['lu chat dia dulu', 'ngobrol aja random, contohnya "lu kalo gabut ngapain sih?"', 'lu cerita keseharian lu gimana biar dia juga mau cerita tentang dirinya juga', 'respon lu ga usah terlalu kaku,asikin aja', 'ga usah buru buru karna memang perlu waktu', 'kalo chat lu jarang di bales, biasanya dia main game sih', 'nah kalo bisa lu ikut dia main game juga contoh kayak minta ajarin atau apa gitu biar dapet waktunya dia','dia paling sering on wa jam 11 an sih','dia butuh banget partner duo yang bisa di ajak mabar tiap hari','jadi yang paling ampuh ya lu mabar sama dia','kalo udah deket lu bisa ajak dia call jam 11 ke atas','sekian tutor buat jadi hts-an awokawok','tapi kalo sama sama nyaman bisa aja sih','sering sering pap random','udahlah anjing ini gua buat tutor buat ngedeketin gua sendiri anying','stress juga'];

let currentIndex = 0;

function typeText(text, elementId, speed = 50) {
  let i = 0;
  const el = document.getElementById(elementId);
  el.innerHTML = "";
  const typing = setInterval(() => {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(typing);
    }
  }, speed);
}

function nextQuote() {
  currentIndex = (currentIndex + 1) % quotes.length;
  typeText(quotes[currentIndex], "quote");
}

window.onload = () => {
  typeText(quotes[currentIndex], "quote");
};
