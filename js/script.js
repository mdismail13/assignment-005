document
  .getElementById("card-container")
  .addEventListener("click", function (event) {
    if(event.target.className.includes('heart')){
        const fontHeartCounter = Number(document.getElementById('nav-heart').innerText);
        document.getElementById('nav-heart').innerText = fontHeartCounter + 1;
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

        const history = document.createElement('div')
        
        history.innerHTML = `
            <div>
                <p class = "text-[18px] font-semibold text-[#111111]">${serviceName}</p>
                <p class = "text-[18px] text-[#5C5C5C]">${serviceNumber}</p>
            </div>
            <div>
            <p>hello</p>
            </div>
        `;
        history.classList.add('flex', 'justify-between', 'items-center', 'p-4', 'mb-2', 'bg-[#FAFAFA]', 'rounded-xl');

        document.getElementById('call-history').append(history);
    }
  });
