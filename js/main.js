document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.querySelector('.generator button');
    const numberInput = document.querySelector('.generator input[type="number"]');
    
    generateButton.addEventListener('click', () => {
        const type = document.querySelector('input[name="type"]:checked').id;
        const amount = numberInput.value;
        
        alert(`Generating ${amount} ${type} of Lorem Ipsum text...`);
    });
});