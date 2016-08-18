var testPage = {
    
    addHeader: function(headerTag, headerText, headerClass) {
        
        var header = document.createElement(headerTag);
        header.innerHTML = headerText;
        header.className = headerClass;
        document.body.appendChild(header);
    },
    
    addListQuestions: function(listQuestionsText, listQuestionsOptions, listQuestionClass, listAnswersText, listAnswersOptions, listAnswersClass) {
        
        var listQuestionsUl = document.createElement('ul');
        listQuestionsUl.className = listQuestionClass;
            
        for (var i = 1; i <= listQuestionsOptions; i++ ) {
            var listQuestionsLi = document.createElement('li');
            
            var listAnswersUl = document.createElement('ul');
            listAnswersUl.className = listAnswersClass;
            
            for (var j = 1; j <= listAnswersOptions; j++) {
                var listAnswersLi = document.createElement('li');
                var listAnswersInput = document.createElement('input');
                listAnswersInput.setAttribute('type', 'checkbox');
                                
                listAnswersLi.innerHTML = '<span>' + listAnswersText + j + '</span>';
                listAnswersLi.insertBefore(listAnswersInput, listAnswersLi.children[0]);
                listAnswersUl.appendChild(listAnswersLi);
            }
                        
            listQuestionsLi.innerHTML = i + '. ' + listQuestionsText + i;
            listQuestionsLi.appendChild(listAnswersUl);
            
            listQuestionsUl.appendChild(listQuestionsLi);
        }
        
        document.body.appendChild(listQuestionsUl);
    },
    
    addButton: function(buttonTitle, buttonClass) {
        var button = document.createElement('button');
        button.setAttribute('type', 'submit');
        button.innerHTML = buttonTitle;
        button.className = buttonClass;
        
        document.body.appendChild(button);
    }
}

testPage.addHeader('h3', "Тест по программированию", 'header');
testPage.addListQuestions("Question №", 3, "list--questions", "Answer №", 4, "list--answers");
testPage.addButton("Check results", 'button');
