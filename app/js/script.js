const faq = document.querySelector('.main__faq');


faq.addEventListener('click', (e)=>{
    if (e.target.classList.contains('main__faq__qa__item__question__dropdown')){
        let dropDown = e.target;
        let question = e.target.previousElementSibling;
        console.log(question);
        let answer = dropDown.parentNode.nextElementSibling;
        if(!answer.classList.contains('answer-active')){
            dropDown.classList.add('rotate-dropdown');
            answer.classList.add('answer-active');
            question.classList.add('question-active');
        }else{
            dropDown.classList.remove('rotate-dropdown');
            answer.classList.remove('answer-active');
            question.classList.remove('question-active');
        }
    } 
    
    
   
    
});