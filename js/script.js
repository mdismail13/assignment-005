document
  .getElementById("card-container")
  .addEventListener("click", function (event) {
    if(event.target.className.includes('heart')){
        const heartCounter = Number(document.getElementById('nav-heart').innerText);
        document.getElementById('nav-heart').innerText = heartCounter + 1;
    }
    if(event.target.className.includes('call-btn')){
        const serviceName = event.target.parentNode.parentNode.childNodes[3].innerText;
        const serviceNumber = event.target.parentNode.parentNode.childNodes[7].childNodes[1].innerText;
        const coin = Number(document.getElementById('coin').innerText);
        if(coin < 20){
            alert("❌ You don't have sufficient coins. Minimum 20 coins required to call😥")
            return;
        }
        alert("📞 Calling " + serviceName + " " + serviceNumber +"...");
        document.getElementById('coin').innerText = coin - 20;

        const date = new Date().toLocaleTimeString();
        const history = document.createElement('div');
        
        history.innerHTML = `
            <div>
                <p class = "text-[18px] font-semibold text-[#111111]">${serviceName}</p>
                <p class = "text-[18px] text-[#5C5C5C]">${serviceNumber}</p>
            </div>
            <div>
            <p>${date}</p>
            </div>
        `;
        history.classList.add('flex', 'justify-between', 'items-center', 'p-4', 'mb-2', 'bg-[#FAFAFA]', 'rounded-xl');

        document.getElementById('call-history').append(history);
    }
    if(event.target.id === 'clear'){
        document.getElementById('call-history').replaceChildren();
    }

    if(event.target.classList.contains('copy')){
        const text = event.target.parentNode.parentNode.childNodes[7].childNodes[1].innerText;
        navigator.clipboard.writeText(text);
        alert('Number copied!');
        const copyCounter = Number(document.getElementById('copy-counter').innerText);
        document.getElementById('copy-counter').innerText = copyCounter + 1;
    }
    if(event.target.className.includes('copy-font')){
        const text = event.target.parentNode.parentNode.parentNode.childNodes[7].childNodes[1].innerText;
        navigator.clipboard.writeText(text);
        alert('Number copied!');
        const copyCounter = Number(document.getElementById('copy-counter').innerText);
        document.getElementById('copy-counter').innerText = copyCounter + 1;    
    }
  });