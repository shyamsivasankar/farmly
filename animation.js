// nav elements
//*****************************************************/
const five=document.getElementById("five")
const four=document.getElementById("four");
const three=document.getElementById("three");
const two =document.getElementById("two");
const one =document.getElementById("one");
//****************************************************/

// divisions
//****************************************************/
const a=document.getElementById("Who we are?");
const b=document.getElementById("What we do?");
const c=document.getElementById("How we do?");
const d=document.getElementById("Why us?");
const e=document.getElementById("Behind the scene");
//****************************************************/

// nav element hover action
//******************************************************************************************************************************************/
one.addEventListener("mouseenter",(event)=>{one.style.borderBottomColor="#2DA884",one.style.color=" #2DA884";});
one.addEventListener("mouseover",(event)=>{one.style.borderBottomColor="#2DA884",one.style.color=" #2DA884";});
one.addEventListener("mouseout",(event)=>{one.style.borderBottomColor="white";});

two.addEventListener("mouseenter",(event)=>{two.style.borderBottomColor="#2DA884",two.style.color=" #2DA884";});
two.addEventListener("mouseover",(event)=>{two.style.borderBottomColor="#2DA884",two.style.color=" #2DA884";});
two.addEventListener("mouseout",(event)=>{two.style.borderBottomColor="white";});

three.addEventListener("mouseenter",(event)=>{three.style.borderBottomColor="#2DA884",three.style.color=" #2DA884";});
three.addEventListener("mouseover",(event)=>{three.style.borderBottomColor="#2DA884",three.style.color=" #2DA884";});
three.addEventListener("mouseout",(event)=>{three.style.borderBottomColor="white";});

four.addEventListener("mouseout",(event)=>{four.style.borderBottomColor="white",four.style.color=" #2DA884"});
four.addEventListener("mouseover",(event)=>{four.style.borderBottomColor="white",four.style.color=" #2DA884"});
four.addEventListener("mouseenter",(event)=>{four.style.borderBottomColor="#2DA884";});

five.addEventListener("mouseout",(event)=>{five.style.borderBottomColor="white",five.style.color=" #2DA884"});
five.addEventListener("mouseover",(event)=>{five.style.borderBottomColor="white",five.style.color=" #2DA884"});
five.addEventListener("mouseenter",(event)=>{five.style.borderBottomColor="#2DA884";});
//******************************************************************************************************************************************/

//division hover action
//******************************************************************************************************************************************/
a.addEventListener("mouseenter",(event)=>{one.style.borderBottomColor="#2DA884";});
a.addEventListener("mouseover",(event)=>{one.style.borderBottomColor="#2DA884";});
a.addEventListener("mouseout",(event)=>{one.style.borderBottomColor="white";});

b.addEventListener("mouseenter",(event)=>{two.style.borderBottomColor="#2DA884";});
b.addEventListener("mouseover",(event)=>{two.style.borderBottomColor="#2DA884";});
b.addEventListener("mouseout",(event)=>{two.style.borderBottomColor="white";});

c.addEventListener("mouseenter",(event)=>{three.style.borderBottomColor="#2DA884";});
c.addEventListener("mouseover",(event)=>{three.style.borderBottomColor="#2DA884";});
c.addEventListener("mouseout",(event)=>{three.style.borderBottomColor="white";});

d.addEventListener("mouseenter",(event)=>{ four.style.borderBottomColor="#2DA884";});
d.addEventListener("mouseover",(event)=>{ four.style.borderBottomColor="#2DA884";});
d.addEventListener("mouseout",(event)=>{four.style.borderBottomColor="white";});

e.addEventListener("mouseenter",(event)=>{ five.style.borderBottomColor="#2DA884";});
e.addEventListener("mouseover",(event)=>{ five.style.borderBottomColor="#2DA884";});
e.addEventListener("mouseout",(event)=>{five.style.borderBottomColor="white";});
//******************************************************************************************************************************************/

//Double Carousel Work
//******************************************************************************************************************************************/


const myCarouselOne = document.querySelector('#demo')
const myCarouselTwo = document.querySelector('#demo2')
const carouselOne = bootstrap.Carousel.getOrCreateInstance(myCarouselOne);
const carouselTwo = bootstrap.Carousel.getOrCreateInstance(myCarouselTwo);

const prevCarouselBtn = document.querySelector('.carousel-control-prev');
const nextCarouselBtn = document.querySelector('.carousel-control-next');

// indicatorsAll.forEach( IndicatorBtn => IndicatorBtn.addEventListener("click", goToIndicatorCarousels));
prevCarouselBtn.addEventListener('click', prevCarousels);
nextCarouselBtn.addEventListener('click', nextCarousels);

// Call the Bootstrap 'to' function for both Carousels to go to the indicator page that was clicked
// function goToIndicatorCarousels (e){
//   let clickedIndicator = e.target.attributes[1].value;
//   carouselOne.to(clickedIndicator);
//   carouselTwo.to(clickedIndicator);
// }

function prevCarousels(){
  carouselOne.prev();
  carouselTwo.prev();
}

function nextCarousels(){
  carouselOne.next();
  carouselTwo.next();
}

//******************************************************************************************************************************************/

//how we do boxes
//******************************************************************************************************************************************/
const box = [];
box[0] = document.getElementById("box1");
box[1] = document.getElementById("box2");
box[2] = document.getElementById("box3");
box[3] = document.getElementById("box4");
//******************************************************************************************************************************************/

// how we do box headings
//******************************************************************************************************************************************/
const head = [];
head[0] = document.getElementById("head1");
head[1] = document.getElementById("head2");
head[2] = document.getElementById("head3");
head[3] = document.getElementById("head4");
//******************************************************************************************************************************************/

// image elemets in box
//******************************************************************************************************************************************/
const image=[];
image[0] = document.getElementById("img1");
image[1] = document.getElementById("img2");
image[2] = document.getElementById("img3");
image[3] = document.getElementById("img4");
//******************************************************************************************************************************************/

//how we do box heading hover color change
//******************************************************************************************************************************************/
box[0].addEventListener("mouseenter",(event)=>{head[0].style.color="#4E4E4E",image[0].style.transform="translateY(-25px)",image[0].style.transitionDuration="0.5s";});
box[0].addEventListener("mouseover",(event)=>{ head[0].style.color="#4E4E4E",image[0].style.transform="translateY(-25px)",image[0].style.transitionDuration="0.5s";});
box[0].addEventListener("mouseout",(event)=>{  head[0].style.color="#2DA884",image[0].style.transform="translateY(5px)",image[0].style.transitionDuration="0.5s";});


box[1].addEventListener("mouseenter",(event)=>{head[1].style.color="#4E4E4E",image[1].style.transform="translateY(-25px)",image[1].style.transitionDuration="0.5s";});
box[1].addEventListener("mouseover",(event)=>{ head[1].style.color="#4E4E4E",image[1].style.transform="translateY(-25px)",image[1].style.transitionDuration="0.5s";});
box[1].addEventListener("mouseout",(event)=>{  head[1].style.color="#2DA884",image[1].style.transform="translateY(5px)",image[1].style.transitionDuration="0.5s";});


box[2].addEventListener("mouseenter",(event)=>{head[2].style.color="#4E4E4E",image[2].style.transform="translateY(-25px)",image[2].style.transitionDuration="0.5s";});
box[2].addEventListener("mouseover",(event)=>{ head[2].style.color="#4E4E4E",image[2].style.transform="translateY(-25px)",image[2].style.transitionDuration="0.5s";});
box[2].addEventListener("mouseout",(event)=>{  head[2].style.color="#2DA884",image[2].style.transform="translateY(5px)",image[2].style.transitionDuration="0.5s";});


box[3].addEventListener("mouseenter",(event)=>{head[3].style.color="#4E4E4E",image[3].style.transform="translateY(-25px)",image[3].style.transitionDuration="0.5s";});
box[3].addEventListener("mouseover",(event)=>{ head[3].style.color="#4E4E4E",image[3].style.transform="translateY(-25px)",image[3].style.transitionDuration="0.5s";});
box[3].addEventListener("mouseout",(event)=>{  head[3].style.color="#2DA884",image[3].style.transform="translateY(5px)",image[3].style.transitionDuration="0.5s";});

//******************************************************************************************************************************************/


//text box css
//******************************************************************************************************************************************/
const txtbox=[];
txtbox[0]=document.getElementById("name");
txtbox[1]=document.getElementById("email");
txtbox[2]=document.getElementById("pnum");
txtbox[3]=document.getElementById("msg")

txtbox[0].addEventListener("click",(event)=>{txtbox[0].style.boxShadow="none",txtbox[0].style.borderColor="transparent",txtbox[0].style.borderBottomColor="black",txtbox[0].style.background="inherit";});
txtbox[1].addEventListener("click",(event)=>{txtbox[1].style.boxShadow="none",txtbox[1].style.borderColor="transparent",txtbox[1].style.borderBottomColor="black",txtbox[1].style.background="inherit";});
txtbox[2].addEventListener("click",(event)=>{txtbox[2].style.boxShadow="none",txtbox[2].style.borderColor="transparent",txtbox[2].style.borderBottomColor="black",txtbox[2].style.background="inherit";});
txtbox[3].addEventListener("click",(event)=>{txtbox[3].style.boxShadow="none",txtbox[3].style.borderColor="transparent",txtbox[3].style.borderBottomColor="black",txtbox[3].style.background="inherit";});

//******************************************************************************************************************************************/

//icons in why us
//******************************************************************************************************************************************/
const icons=[];
icons[0]=document.getElementById("i1");
icons[1]=document.getElementById("i2");
icons[2]=document.getElementById("i3");
icons[3]=document.getElementById("i4");
icons[4]=document.getElementById("i5");
icons[5]=document.getElementById("i6");

// const boxed=documnet.getElementById("iconbox");
const boxed=document.querySelector('#iconbox');

icons[0].addEventListener("mouseenter",(event)=>{boxed.style.background="radial-gradient(500px 500px at 500px bottom,rgba(0, 255, 148,0.2),white)";});
icons[0].addEventListener("mouseover",(event)=>{boxed.style.background="radial-gradient(500px 500px at 500px bottom,rgba(0, 255, 148,0.2),white)";});
icons[0].addEventListener("mouseout",(event)=>{boxed.style.background="white";});

icons[1].addEventListener("mouseenter",(event)=>{boxed.style.background="radial-gradient(500px 500px at 500px top,rgba(0, 255, 148, 0.2),white)";});
icons[1].addEventListener("mouseover",(event)=>{boxed.style.background="radial-gradient(500px 500px at 500px top,rgba(0, 255, 148, 0.2),white)";});
icons[1].addEventListener("mouseout",(event)=>{boxed.style.background="white";});

icons[2].addEventListener("mouseenter",(event)=>{boxed.style.background="radial-gradient(500px 500px at bottom,rgba(0, 255, 148, 0.2),white)";});
icons[2].addEventListener("mouseover",(event)=>{boxed.style.background="radial-gradient(500px 500px at bottom,rgba(0, 255, 148, 0.2),white)";});
icons[2].addEventListener("mouseout",(event)=>{boxed.style.background="white";});

icons[3].addEventListener("mouseenter",(event)=>{boxed.style.background="radial-gradient(500px 500px at top,rgba(0, 255, 148, 0.2),white)";});
icons[3].addEventListener("mouseover",(event)=>{boxed.style.background="radial-gradient(500px 500px at top,rgba(0, 255, 148, 0.2),white)";});
icons[3].addEventListener("mouseout",(event)=>{boxed.style.background="white";});

icons[4].addEventListener("mouseenter",(event)=>{boxed.style.background="radial-gradient(500px 500px at 50px bottom,rgba(0, 255, 148, 0.2),white)";});
icons[4].addEventListener("mouseover",(event)=>{boxed.style.background="radial-gradient(500px 500px at 50px bottom,rgba(0, 255, 148, 0.2),white)";});
icons[4].addEventListener("mouseout",(event)=>{boxed.style.background="white";});

icons[5].addEventListener("mouseenter",(event)=>{boxed.style.background="radial-gradient(500px 500px at 50px top,rgba(0, 255, 148, 0.2),white)";});
icons[5].addEventListener("mouseover",(event)=>{boxed.style.background="radial-gradient(500px 500px at 50px top,rgba(0, 255, 148, 0.2),white)";});
icons[5].addEventListener("mouseout",(event)=>{boxed.style.background="white";});

//******************************************************************************************************************************************/


// Behind the scenes
//******************************************************************************************************************************************/
const cards=[];
cards[0]=document.getElementById("c1");
cards[1]=document.getElementById("c2");
cards[2]=document.getElementById("c3");
cards[3]=document.getElementById("c4");
cards[4]=document.getElementById("c5");
cards[5]=document.getElementById("c6");
cards[6]=document.getElementById("c7");

const di=[]
di[0]=document.getElementById("di0");
di[1]=document.getElementById("di1");
di[2]=document.getElementById("di2");
di[3]=document.getElementById("di3");
di[4]=document.getElementById("di4");
di[5]=document.getElementById("di5");
di[6]=document.getElementById("di6");

const dat=[]
dat[0]=document.getElementById("d0");
dat[1]=document.getElementById("d1");
dat[2]=document.getElementById("d2");
dat[3]=document.getElementById("d3");
dat[4]=document.getElementById("d4");
dat[5]=document.getElementById("d5");
dat[6]=document.getElementById("d6");

const iis=[]
iis[0]=document.getElementById("im1"); 
iis[1]=document.getElementById("im2"); 
iis[2]=document.getElementById("im3"); 
iis[3]=document.getElementById("im4"); 
iis[4]=document.getElementById("im5");


for(let i=0;i<5;i++)
{
  cards[i].addEventListener("mouseenter",(event)=>{di[i].style.background="radial-gradient(circle, rgba(6,233,123,0.25) 50%, rgba(255,255,255,1) 100%)",di[i].style.border="1px solid #2DA884",di[i].style.borderRadius="10px",dat[i].style.display="block";});
  cards[i].addEventListener("mouseover",(event)=>{di[i].style.background="radial-gradient(circle, rgba(6,233,123,0.25) 50%, rgba(255,255,255,1) 100%)",di[i].style.border="1px solid #2DA884",di[i].style.borderRadius="10px",dat[i].style.display="block";});
  cards[i].addEventListener("mouseout",(event)=>{di[i].style.background="transparent",di[i].style.border="0px solid #2DA884",di[i].style.borderRadius="0px",dat[i].style.display="none";});
  
  cards[i].addEventListener("mouseenter",(event)=>{iis[i].style.transform="translateX(-130px)";});
  cards[i].addEventListener("mouseover",(event)=>{iis[i].style.transform="translateX(-130px)";});
  cards[i].addEventListener("mouseout",(event)=>{iis[i].style.transform="translateX(0px)";});

   if(i>0 && i<4)
   {
    cards[i].addEventListener("mouseenter",(event)=>{iis[i-1].style.transform="translateX(-170px)";});
    cards[i].addEventListener("mouseover",(event)=>{iis[i-1].style.transform="translateX(-170px)";});
    cards[i].addEventListener("mouseout",(event)=>{iis[i-1].style.transform="translateX(0px)";});   
    
    cards[i].addEventListener("mouseenter",(event)=>{iis[i+1].style.transform="translateX(170px)";});
    cards[i].addEventListener("mouseover",(event)=>{iis[i+1].style.transform="translateX(170px)";});
    cards[i].addEventListener("mouseout",(event)=>{iis[i+1].style.transform="translateX(0px)";});
   }
  else if(i==0)
  {
    cards[i].addEventListener("mouseenter",(event)=>{iis[i+1].style.transform="translateX(170px)";});
    cards[i].addEventListener("mouseover",(event)=>{iis[i+1].style.transform="translateX(170px)";});
    cards[i].addEventListener("mouseout",(event)=>{iis[i+1].style.transform="translateX(0px)";});

    cards[i].addEventListener("mouseenter",(event)=>{iis[4].style.transform="translateX(-170px)";});
    cards[i].addEventListener("mouseover",(event)=>{iis[4].style.transform="translateX(-170px)";});
    cards[i].addEventListener("mouseout",(event)=>{iis[4].style.transform="translateX(0px)";});
  }
  else
  {
    cards[i].addEventListener("mouseenter",(event)=>{iis[i-1].style.transform="translateX(-170px)";});
    cards[i].addEventListener("mouseover",(event)=>{iis[i-1].style.transform="translateX(-170px)";});
    cards[i].addEventListener("mouseout",(event)=>{iis[i-1].style.transform="translateX(0px)";});

    cards[i].addEventListener("mouseenter",(event)=>{iis[0].style.transform="translateX(170px)";});
    cards[i].addEventListener("mouseover",(event)=>{iis[0].style.transform="translateX(170px)";});
    cards[i].addEventListener("mouseout",(event)=>{iis[0].style.transform="translateX(0px)";});
  }
}

//******************************************************************************************************************************************/
