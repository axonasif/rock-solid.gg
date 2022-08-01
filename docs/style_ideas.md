### 1. Glowing texts
Glowing texts looking like balett mirror

<h1 class="glow">rock solid</h1>

<style>
.glow {
font-size: 30px;
color: #fff;
text-align: center;
animation: glow 1s ease-in-out infinite alternate;
}

@-webkit-keyframes glow {
from {
text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
}

to {
text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
}
}
</style>

Source:
[w3schools](https://www.w3schools.com/howto/howto_css_glowing_text.asp)


### 2. Gradient font color

<h1 class="gradient">rock solid</h1>

<style>
.gradient {
font-size: 30px;
text-align: center;
background: linear-gradient(90deg, #fb7419, #319197);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}
</style>

Source:
[cssgradient.io](https://cssgradient.io/blog/css-gradient-text/)
