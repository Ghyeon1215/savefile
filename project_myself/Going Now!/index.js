const btn = document.getElementById("started");
btn.addEventListener("click", function () {
  window.scrollTo({ top: 781, left: 0, behavior: "smooth" });
});

const id = document.getElementById("id");
const pw = document.getElementById("pw");

function login() {
  axios
    .post("http://naver.com", {
      data: {
        id: id.value,
        pw: pw.value,
      },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

document.getElementById("button_head").addEventListener("click", login);

document.querySelector("#menu > img").addEventListener("click", (e) => {});