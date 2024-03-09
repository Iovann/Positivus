function toogleMenu( button, hmg, closeBtn, menu)
        {
            button.addEventListener('click', () => {

                if (button.classList.contains('active')) {
                button.classList.remove('active');
                menu.style.backgroundColor = '#B9FF66'
                button.innerHTML = '';
                button.appendChild(closeBtn);
            
                } else { 
                button.classList.add('active');
                button.innerHTML = ''; 
                button.appendChild(hmg);
                menu.style.backgroundColor = '#F3F3F3'
                }
            });
        }
        const menu = document.querySelector('.menu');
        const button = document.querySelector('.toggler');
        const hmg  = document.querySelector('#hmg');
        const closeBtn = new Image();
        closeBtn.src = "./assets/icons/Plus_icon.svg";
        closeBtn.classList.add('moins');
        toogleMenu(button, hmg, closeBtn, menu);

        const menu1 = document.querySelector('.menu1');
        const button1 = document.querySelector('.toggler1');
        const hmg1  = document.querySelector('#hmg1');
        const closeBtn1 = new Image();
        closeBtn1.src = "./assets/icons/Plus_icon.svg";
        closeBtn1.classList.add('moins');
        toogleMenu(button1, hmg1, closeBtn1, menu1);

        const menu2 = document.querySelector('.menu2');
        const button2 = document.querySelector('.toggler2');
        const hmg2  = document.querySelector('#hmg2');
        const closeBtn2 = new Image();
        closeBtn2.src = "./assets/icons/Plus_icon.svg";
        closeBtn2.classList.add('moins');
        toogleMenu(button2, hmg2, closeBtn2, menu2);

        const menu3 = document.querySelector('.menu3');
        const button3 = document.querySelector('.toggler3');
        const hmg3  = document.querySelector('#hmg3');
        const closeBtn3 = new Image();
        closeBtn3.src = "./assets/icons/Plus_icon.svg";
        closeBtn3.classList.add('moins');
        toogleMenu(button3, hmg3, closeBtn3, menu3);

        const menu4 = document.querySelector('.menu4');
        const button4 = document.querySelector('.toggler4');
        const hmg4  = document.querySelector('#hmg4');
        const closeBtn4 = new Image();
        closeBtn4.src = "./assets/icons/Plus_icon.svg";
        closeBtn4.classList.add('moins');
        toogleMenu(button4, hmg4, closeBtn4, menu4);

        const menu5 = document.querySelector('.menu5');
        const button5 = document.querySelector('.toggler5');
        const hmg5  = document.querySelector('#hmg5');
        const closeBtn5 = new Image();
        closeBtn5.src = "./assets/icons/Plus_icon.svg";
        closeBtn5.classList.add('moins');
        toogleMenu(button5, hmg5, closeBtn5, menu5);

        
