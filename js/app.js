/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
     //the DOM is ready to be interacted with! // 
    document.addEventListener('DOMContentLoaded', function () {
    console.log('the DOM is ready to be interacted with!');



/**
 * Define Global Variables
 * 
*/
const navbarList  = document.querySelector("#navbar__list");
const listOfSection= document.querySelectorAll("section");



// build the nav

listOfSection.forEach((section , index) => {
	const newList = document.createElement('li');
    const name = section.dataset.nav
     
	newList.innerHTML += `<a  href="#section${index + 1}" class="menu__link" id="${name}" >${name}</a>`;

    navbarList.appendChild(newList);

  });

// getting the largest value that's less or equal to the number
   const offsetSection = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// remove the active class
const removeActiveSection = (section) => {
    section.classList.remove('sectionActive');
    section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
    
};



// adding the active class
const addActiveSection = (condition, section) => {
    if(condition){
        section.classList.add('sectionActive');
        section.style.cssText = "border: 7px solid #fff;";

            //return section =>num Section active//
             const aSection = section.getAttribute('data-nav');  
             const links= document.querySelectorAll('.menu__link');
          for (link of links ) {

            //return links =>"section i "//
             const aLink =link.getAttribute('id');

             // remove the active class
             link.classList.remove('active');

             // active section related the same link 
           if (aSection == aLink ) {

            // adding the active class
            link.classList.add('active');
            
           }
          }
          
       
    };
};

//implementating the actual function

const sectionsActive = () => {
    listOfSection.forEach(section => {
        const elementOffset = offsetSection(section);


        isInView = () => elementOffset < 150 && elementOffset >= -150;

        removeActiveSection(section);
        
        addActiveSection(isInView(),section);
     
    });

};

window.addEventListener('scroll' ,sectionsActive);




//smoothly scroll when click links

const makeNavLinksSmooth = ( ) => {
  const navLinks = document.querySelectorAll( '.menu__link' );

  for ( let n in navLinks ) {
    if ( navLinks.hasOwnProperty( n ) ) {
      navLinks[ n ].addEventListener( 'click', e => {
        e.preventDefault( );
        document.querySelector( navLinks[ n ].hash )
          .scrollIntoView( {
            behavior: "smooth"
          } );
      } );
    }
  }
}
makeNavLinksSmooth( );



});

    









 
    









 
