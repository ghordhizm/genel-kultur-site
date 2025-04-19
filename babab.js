const sorular = [
    {
        soru: "Türkiye'nin başkenti neresidir?",
        secenekler: ["İstanbul", "Ankara", "İzmir", "Bursa"],
        cevap: 1
    },
    {
        soru: "Dünyanın en büyük okyanusu hangisidir?",
        secenekler: ["Hint", "Atlantik", "Arktik", "Pasifik"],
        cevap: 3
    },
    {
        soru: "İnsan vücudunda kaç kemik vardır?",
        secenekler: ["206", "201", "212", "198"],
        cevap: 0
    },
    {
        soru: "En uzun nehir hangisidir?",
        secenekler: ["Amazon", "Nil", "Mississippi", "Yangtze"],
        cevap: 1
    },
    {
        soru: "Ay'ın Dünya etrafındaki dönüş süresi nedir?",
        secenekler: ["365 gün", "30 gün", "24 saat", "12 saat"],
        cevap: 1
    }
];

const linkler = [
    "https://youtu.be/PnFrMiCSAmg?si=gZ6agKTpqF76xlxw",
    "https://youtu.be/yUWRu2yQ4Yc?si=rbWr4ZHtJfDRYZ8u",
    "https://youtu.be/uYpl-ZkEPXQ?si=OIxgJvY9PX7EOdPZ",
    "https://youtu.be/wmQakMejZIs?si=gCzGDgPwdSCbtqIN",
    "https://youtu.be/fgtni2f30no?si=ju6i7rJ6cHBsPBdf",
    "https://youtu.be/0HA9AGaiLLk?si=o7Jv-FGELjsdouOQ",
    "https://youtu.be/FiNDqTHtAyQ?si=_kgrK_ST9N-oIJEY",
    "https://youtu.be/eaIh1YlkFpI?si=eMt0QIqony-7TDZ_",
    "https://youtu.be/sMVanLCCeOE?si=jASRdHtqsgO94Whq",
    "https://youtu.be/WitSKJCIEso?si=H00MLpTBJjDd6ehc",
    "https://youtu.be/AfpBmTuifN8?si=k9LDZptijMWwBpDn",
    "https://youtu.be/tdgUwDfLJOU?si=DvAfDeNrjb03tPSs",
    "https://youtu.be/ik1e6f80P14?si=at_PBIH1eu8PmeaF",
    "https://youtu.be/7ylTzg7P9BA?si=dNU8yUawgtiDrtt_",
    "https://youtu.be/9WWYtFjtWO0?si=XE8pOldSppNkgFEi"
];

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

const questionIndex = sessionStorage.getItem("selectedQuestion") ?? getRandomIndex(sorular.length);
sessionStorage.setItem("selectedQuestion", questionIndex);

const soru = sorular[questionIndex];
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");

questionElement.textContent = soru.soru;
soru.secenekler.forEach((secenek, index) => {
    const button = document.createElement("button");
    button.textContent = secenek;
    button.onclick = () => {
        if (index === soru.cevap) {
            button.classList.add("correct");
            resultElement.textContent = "Tebrikler, doğru cevap!";
            setTimeout(() => {
                const randomLink = linkler[getRandomIndex(linkler.length)];
                window.location.href = randomLink;
            }, 1500);
        } else {
            button.classList.add("wrong");
            resultElement.textContent = "Tekrar deneyin.";
        }
    };
    optionsElement.appendChild(button);
});
