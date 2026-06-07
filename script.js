/* =====================================
33 FRIENDSHIP REASONS
===================================== */

const reasons = [


"You always know how to make me laugh 😂",
"You listen even when I ramble endlessly ☕",
"You make ordinary days memorable ✨",
"You never judge me for being myself 💜",
"You celebrate my wins like they're your own 🎉",
"You stay during difficult days 🌙",
"You understand my weirdness 😆",
"You make every adventure more fun 🚀",
"You are family by choice ❤️",
"Life is better with you in it 💜",

"You always have my back 🤝",
"You give the best advice 🎯",
"You make boring moments fun 😄",
"You remember the little things 🌟",
"You bring positive energy everywhere ✨",
"You are incredibly dependable 💪",
"You make people feel comfortable 😊",
"You know when to be serious 🎓",
"You know when to be ridiculous 😂",
"You inspire people around you 🌈",

"You are genuinely kind 💜",
"You are impossible to forget ⭐",
"You make every memory better 📸",
"You encourage people to be themselves 🌻",
"You are always up for adventure 🌍",
"You make challenges easier 🚀",
"You turn bad days into better ones ☀️",
"You never stop growing 📚",
"You are stronger than you realize 💪",
"You make friendship look effortless 🤍",

"You deserve happiness every day 🌟",
"You make life more interesting 🎭",
"Because you're simply an amazing friend 💜"


];

/* =====================================
GENERATE FLIP CARDS
===================================== */

const reasonGrid =
document.getElementById("reasonGrid");

reasons.forEach((reason, index) => {


const card =
document.createElement("div");

card.className = "reason";

card.innerHTML = `

    <div class="card-inner">

        <div class="card-front">

            <span class="reason-number">
                REASON ${index + 1}
            </span>

            <div class="tap-text">
                💜 Hover To Reveal
            </div>

        </div>

        <div class="card-back">

            <div class="reason-text">
                ${reason}
            </div>

        </div>

    </div>

`;

reasonGrid.appendChild(card);


});

/* =====================================
FINAL MESSAGE
===================================== */

function showMessage(){


alert(


`💜

Happy 33rd Birthday!

May this year bring you
countless reasons to smile,
new adventures to enjoy,
and beautiful memories to cherish.

Thank you for being such
an incredible friend.

Best Friends?

Always. 💜`


);


}

/* =====================================
PARTICLES
===================================== */

const canvas =
document.getElementById("particles");

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

const particles = [];

const particleCount = 180;

/* Create Particles */

for(let i = 0; i < particleCount; i++){


particles.push({

    x:
    Math.random() *
    canvas.width,

    y:
    Math.random() *
    canvas.height,

    radius:
    Math.random() * 2 + 1,

    speedY:
    Math.random() * 0.6 + 0.1,

    speedX:
    (Math.random() - 0.5) * 0.3,

    opacity:
    Math.random() * 0.5 + 0.2

});


}

/* Animate */

function animateParticles(){


ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
);

particles.forEach(p => {

    ctx.beginPath();

    ctx.arc(

        p.x,
        p.y,
        p.radius,

        0,
        Math.PI * 2

    );

    ctx.fillStyle =
    `rgba(199,125,255,${p.opacity})`;

    ctx.shadowBlur = 20;

    ctx.shadowColor =
    "#C77DFF";

    ctx.fill();

    p.y -= p.speedY;

    p.x += p.speedX;

    if(p.y < -20){

        p.y =
        canvas.height + 20;

        p.x =
        Math.random() *
        canvas.width;
    }

});

requestAnimationFrame(
    animateParticles
);


}

animateParticles();

/* =====================================
RESIZE SUPPORT
===================================== */

window.addEventListener(


"resize",

() => {

    canvas.width =
    window.innerWidth;

    canvas.height =
    window.innerHeight;

}


);
