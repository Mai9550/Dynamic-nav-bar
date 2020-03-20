//get variables
const sections = document.getElementsByTagName("section");
const navbar = document.getElementsByTagName("nav")[0];
//scroll to sections
window.addEventListener('scroll', function(){
    const navbarHeight  = navbar.offsetHeight;
    const scrollPos = window.pageYOffset;
    //determine which section in viewport
    for( const section of sections) {
         const position = section.offsetTop - navbarHeight;
         if (scrollPos >= position && scrollPos <= (position + section.offsetHeight)) {
            this.console.log(section);
              navbar.style.background = 'black'; 
              section.classList.add('currentSection');
              const liItem = document.getElementById(section.dataset.navitem);
              liItem.classList.add('currentSection');
            }
              else{    
             section.classList.remove('currentSection');
             const liItem = document.getElementById(section.dataset.navitem);
              liItem.classList.remove('currentSection');
              }
              

        }
    });
  