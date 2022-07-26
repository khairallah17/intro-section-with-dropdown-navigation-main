let featuresDropdown = document.getElementById('features__menu')
let featuresList = document.getElementById('features__list')
let companyDropDown = document.getElementById('company__dropdown')
let companyList = document.getElementById('company__list')
let open = document.getElementById('dropdown__menu__open')
let close = document.getElementById('dropdown__menu__close')
let left = document.getElementById('left')

let fdrop = false
let cdrop = false

let p = false
let c = false


featuresDropdown.addEventListener("click", function(){
    if(!fdrop){
        featuresList.classList.remove('show')
        fdrop = true
    }
    else if(fdrop){
        featuresList.classList.add('show')
        fdrop = false
    }
})

companyDropDown.addEventListener("click", function(){
    if(!cdrop){
    companyList.classList.remove('show')
    cdrop = true
    }
    else if(cdrop){
    companyList.classList.add('show')
    cdrop = false
    }
})


open.addEventListener('click', () => {
        left.classList.remove('hide')
        open.classList.add('hide')
        close.classList.remove('hide')
})

close.addEventListener('click', () => {
        left.classList.add('hide')
        close.classList.add('hide')
        open.classList.remove('hide')
})