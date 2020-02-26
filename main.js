const targetSites = [
    /reddit\.com/,
];

const cssText = `
    .waiter {
        display: flex;
        display: flex;
        width: 100vw;    
        height: 100vh;
        justify-content: center;
        align-items: center;
        background:#000;
        color: #eee;
        position: absolute;
        left: 0;
        top: 0;
    }
`;


(function main() {
    if (targetSites.find((s) => document.URL.match(s))) {
        const existingChildren = Array.from(document.body.children)
        existingChildren.forEach(child => {
            child.setAttribute('data-waiter-former-style', child.style.visibility )
            child.style.visibility = 'hidden'
        });

        const style = document.createElement('style');
        style.innerText = cssText;
        document.head.appendChild(style);

        const container = document.createElement('div');
        container.classList.add('waiter');
        const textContainer = document.createElement('h2');
        const textContent = document.createTextNode('I\'m sorry Dave, I\'m afraid I can\'t do that.');
        textContainer.appendChild(textContent);
        container.appendChild(textContainer)
        document.body.appendChild(container);

        setTimeout(() => {
            style.remove();
            container.remove();
            existingChildren.forEach((child) => {
                child.style.visibility = child.getAttribute('data-waiter-former-style')
            });
        }, 3000);
    }
})()
