// Blur
const mainContainer = document.querySelector(".blur");

// Plan
const rewardBtns = document.querySelectorAll(".reward");
const bottomCard = document.querySelectorAll(".bottom_card");

// Bookmark
const markBtn = document.querySelector(".mark");
const markBtnText = document.querySelector(".mark-text");

//Bar
const barContent = document.querySelector(".bar_content");

// Plan Success
const completedCard = document.querySelector(".completed-modal");
const completedBtn = document.querySelector(".completed-btn");

//Plan Modal
const planModal = document.querySelector(".plan-modal");
const closeModal = document.querySelector(".close-modal");
const planTop = document.querySelectorAll(".plan-top");
const checkbtn = document.querySelectorAll("#check");
const planTopCardCheck = document.querySelectorAll(".plan-top-check");
const pledgeSection = document.querySelectorAll(".pledge-section");
const btnContinue = document.querySelectorAll(".btn-continue");
const planCard = document.querySelectorAll(".plan-card");
const planBtn = document.querySelector(".btn-plan");

//Text
const amountTotal = document.querySelector(".amount");
const bracket = document.querySelector(".bracket");
const bambooLeft = document.querySelectorAll(".bamboo-left");
const blackLeft = document.querySelectorAll(".black-left");
const specialLeft = document.querySelectorAll(".special-left");
const leftData = document.querySelectorAll(".left-data");

// Values
let amount = 37580;
let brackets = 5007;
let bambleft = 101;
let blaleft = 64;
let speleft = 2;

// Udpate the brackets when it gets selected
const updateData = () => {
  amountTotal.innerHTML = `$${amount}`;
  bracket.innerHTML = `${brackets}`;
  bambooLeft.forEach((e) => {
    e.innerHTML = `${bambleft}`;
  });
  blackLeft.forEach((e) => {
    e.innerHTML = `${blaleft}`;
  });
  specialLeft.forEach((e) => {
    e.innerHTML = `${speleft}`;
  });
};

// Add active state to a selected plan
const openPlan = () => {
  rewardBtns.forEach((e, i) => {
    e.addEventListener("click", () => {
      if (e.value == 1) {
        planTop[i].classList.add("active");
        pledgeSection[i].classList.add("active");
        planCard[i].classList.add("active");
        planCard[i].scrollIntoView();

        planTop[i + 1].classList.remove("active");
        pledgeSection[i + 1].classList.remove("active");
        planCard[i + 1].classList.remove("active");

        planTop[i + 2].classList.remove("active");
        pledgeSection[i + 2].classList.remove("active");
        planCard[i + 2].classList.remove("active");
      }

      if (e.value == 2) {
        planTop[i].classList.add("active");
        pledgeSection[i].classList.add("active");
        planCard[i].classList.add("active");

        planTop[i + 1].classList.remove("active");
        pledgeSection[i + 1].classList.remove("active");
        planCard[i + 1].classList.remove("active");

        planTop[i - 1].classList.remove("active");
        pledgeSection[i - 1].classList.remove("active");
        planCard[i - 1].classList.remove("active");

        planCard[i].scrollIntoView();
      }

      if (e.value == 3) {
        planTop[i - 1].classList.remove("active");
        pledgeSection[i - 1].classList.remove("active");
        planCard[i - 1].classList.remove("active");

        planTop[i].classList.add("active");
        pledgeSection[i].classList.add("active");
        planCard[i].classList.add("active");
        planCard[i].scrollIntoView();
      }

      planModal.classList.add("active");
      mainContainer.classList.remove("inactive");
    });
  });
};

// Change bookmark state
const bookmarkState = () => {
  markBtn.addEventListener("click", () => {
    markBtn.classList.toggle("active");
    if (markBtn.classList.contains("active")) {
      markBtnText.innerHTML = "Bookmarked";
    } else {
      markBtnText.innerHTML = "Bookmark";
    }
  });
};

// Close Modal
const closePlan = () => {
  closeModal.addEventListener("click", () => {
    planModal.classList.remove("active");
    mainContainer.classList.add("inactive");
  });
};

// Success card
const SuccessCard = () => {
  completedBtn.addEventListener("click", () => {
    completedCard.classList.remove("active");
    mainContainer.classList.add("inactive");
  });
};

// Add active state to a specific plan
const planChecked = () => {
  planTopCardCheck.forEach((e, i) => {
    e.addEventListener("click", () => {
      planTop[i].classList.toggle("active");
      pledgeSection[i].classList.toggle("active");
      planCard[i].classList.toggle("active");
    });
  });
};

// Change total amount and brackets
const selectPlan = () => {
  btnContinue.forEach((e) => {
    e.addEventListener("click", () => {
      planModal.classList.remove("active");
      completedCard.classList.add("active");
      if (e.value == 1) {
        amount = amount + 25;
        brackets++;
        bambleft--;
      }
      if (e.value == 2) {
        amount = amount + 75;
        brackets++;
        blaleft--;
      }
      if (e.value == 3) {
        amount = amount + 200;
        brackets++;
        speleft--;
      }

      barIncrease();
      updateData();
      disabledCards();
    });
  });
};

// Display Plan
const displayPlan = () => {
  planBtn.addEventListener("click", () => {
    planCard.forEach((e, i) => {
      e.classList.remove("active");
      planTop[i].classList.remove("active");
      pledgeSection[i].classList.remove("active");
    });
    planModal.classList.add("active");
    mainContainer.classList.remove("inactive");
  });
};

// Increase bar width  relative to the amount
const barIncrease = () => {
  barContent.style.width = `${amount / 1000}%`;
};

// Disabled Card when the amount is 0
const disabledCards = () => {
  for (let i = 0; i < leftData.length; i++) {
    if (leftData[i].textContent == 0) {
      bottomCard[i].classList.add("disabled");
      planCard[i].classList.add("disabled");
    }
  }
};

updateData();
openPlan();
closePlan();
bookmarkState();
SuccessCard();
planChecked();
selectPlan();
displayPlan();
