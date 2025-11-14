document.querySelectorAll('table.interactive').forEach(element => {
    element.addEventListener('click', (event) => {
        const highlightedClass = 'highlighted';
        const isRow = element => element.tagName === 'TR' && element.parentElement.tagName === 'TBODY';
        const newlySelectedRow = event.composedPath().find(isRow);
        const previouslySelectedRow = Array.from(newlySelectedRow.parentElement.children).filter(isRow).find(element => element.classList.contains(highlightedClass));
        if(previouslySelectedRow){
            previouslySelectedRow.classList.toggle(highlightedClass);
        }

        if (newlySelectedRow) {
            newlySelectedRow.classList.toggle(highlightedClass);
        }
    })
});