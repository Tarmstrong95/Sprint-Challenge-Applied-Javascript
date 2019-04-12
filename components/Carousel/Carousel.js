class Carousel {
constructor(elements){
    this.elements = elements;
    this.leftBtn = this.elements.querySelector('.left-button');
    this.rightBtn = this.elements.querySelector('.right-button');
    this.imgs = this.elements.querySelectorAll('img');
    this.current = 0;

    this.leftBtn.addEventListener('click', () => this.left());
    this.rightBtn.addEventListener('click', () => this.right())
    this.imgs[1].style.display = "block";
}
right(){
    this.current <3 ? this.current += 1 : this.current = 0;
    console.log(this.current)
    this.currentImg();
}
left(){
    this.current >0 ? this.current -= 1 : this.current = 3;
    console.log(this.current)
    this.currentImg();
}
currentImg(){
    this.imgs.forEach(element => element.style.display = 'none');
    this.imgs[this.current].style.display = "block";
}
}

let carousel = document.querySelector('.carousel');
new Carousel(carousel)
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/