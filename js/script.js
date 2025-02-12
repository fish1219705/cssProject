const container = document.querySelector('.rain-container');

// Generate multiple raindrops dynamically
const totalDrops = 100; // Adjust the number of raindrops
for (let i = 0; i < totalDrops; i++) {
  const raindrop = document.createElement('div');
  raindrop.classList.add('rain');

  // Randomize horizontal position and animation delay
  raindrop.style.left = `${Math.random() * 100}vw`; // Random horizontal position
  raindrop.style.animationDelay = `${Math.random() * 2}s`; // Random start delay

  container.appendChild(raindrop);
}




document.getElementById('next-stage').addEventListener('click', function() {
    // Get the currently visible stage
    const currentStage = document.querySelector('.cycle-stage.visible');
    
    // Hide the current stage
    if (currentStage) {
      currentStage.classList.remove('visible');
    }
    
    // Show the next stage or loop back to the first
    const nextStage = currentStage?.nextElementSibling?.classList.contains('cycle-stage')
      ? currentStage.nextElementSibling
      : document.getElementById('evaporation');
      
    nextStage.classList.add('visible');
  });
  






  document.getElementById('learn-more').addEventListener('click', function() {
    var learn = document.getElementById("learn");
    learn.innerHTML = "The water cycle describes how water moves on, above, and below the surface of the Earth."
  });

  var understand1 = document.getElementById("btn1");
  understand1.onclick = function (){
    understand1.style.display = "none";
  }

  var understand2 = document.getElementById("btn2");
  understand2.onclick = function (){
    understand2.style.display = "none";
  }


var bucket = document.getElementById("bucket");
var sign = document.getElementById("sign");
bucket.addEventListener("mouseover",function (){
  sign.innerHTML="save water, save the earth";
})
bucket.addEventListener("mouseout",function (){
  sign.innerHTML= "";
})

let sbtn = document.querySelector('.sBtn');
var thankyouMsg = document.getElementById("thankyouMsg");
const tickMark = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>";

sbtn.innerHTML = "Subscribe";

sbtn.addEventListener('click', function() {
    if (sbtn.innerHTML === "Subscribe") {
        // Changing the subscribe text to the tickmark
        sbtn.innerHTML = tickMark;
        thankyouMsg.innerHTML = "Thank you!"

    } else {
        sbtn.innerHTML = "Subscribe";
    }
    // Toggling class circle
    this.classList.toggle('circle');
});