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
let bambLeft = 101;
let blaLeft = 64;
let speLeft = 2;

// Udpate the brackets when it gets selected
const updateData = () => {
  amountTotal.innerHTML = `$${amount}`;
  bracket.innerHTML = `${brackets}`;

  bambooLeft.forEach((e) => {
    e.innerHTML = `${bambLeft}`;
  });
  blackLeft.forEach((e) => {
    e.innerHTML = `${blaLeft}`;
  });
  specialLeft.forEach((e) => {
    e.innerHTML = `${speLeft}`;
  });
};

const activePlan = (index) => {
  planTop[index].classList.add("active");
  pledgeSection[index].classList.add("active");
  planCard[index].classList.add("active");
  planCard[index].scrollIntoView();
};

const desactivePlan = (index) => {
  planTop[index].classList.remove("active");
  pledgeSection[index].classList.remove("active");
  planCard[index].classList.remove("active");
};

// Add active state to a selected plan
const openPlan = () => {
  rewardBtns.forEach((e, i) => {
    e.addEventListener("click", () => {
      if (e.value == 1) {
        activePlan(i);
        desactivePlan(i + 1);
        desactivePlan(i + 2);
      }

      if (e.value == 2) {
        activePlan(i);
        desactivePlan(i + 1);
        desactivePlan(i - 1);
      }

      if (e.value == 3) {
        activePlan(i);
        desactivePlan(i - 1);
      }

      planModal.classList.add("active");
      mainContainer.classList.toggle("inactive");
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
    planModal.classList.toggle("active");
    mainContainer.classList.toggle("inactive");
  });
};

// Success card
const SuccessCard = () => {
  completedBtn.addEventListener("click", () => {
    completedCard.classList.toggle("active");
    mainContainer.classList.toggle("inactive");
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

//update Crowdfund data
const updateCrowdData = (donation) => {
  amount = amount + donation;
  brackets++;
  if (donation === 25) {
    bambLeft--;
  } else if (donation === 75) {
    blaLeft--;
  } else {
    speLeft--;
  }
};

// Change total amount and brackets
const selectPlan = () => {
  btnContinue.forEach((e) => {
    e.addEventListener("click", () => {
      planModal.classList.remove("active");
      completedCard.classList.add("active");
      if (e.value == 1) {
        updateCrowdData(25);
      }
      if (e.value == 2) {
        updateCrowdData(75);
      }
      if (e.value == 3) {
        updateCrowdData(200);
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
