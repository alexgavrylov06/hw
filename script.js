const buttons = document.querySelectorAll('.nav-link');
const content = document.querySelectorAll('.tab-pane')

function setupTabs() 

{

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            let currentTab = document.querySelector(btn.getAttribute('data-tab'))
           

            buttons.forEach(item =>  {
                item.classList.remove('active')
                
            })

            btn.classList.add('active')

            
            content.forEach(tab =>  {
                tab.classList.remove('active')
                currentTab.classList.remove('show')
            })

            currentTab.classList.add('active')
            currentTab.classList.add('show')
        })
    })

}

document.addEventListener('DOMContentLoaded', setupTabs())