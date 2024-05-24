document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let date = document.getElementById('date').value;
    let suggestion = document.getElementById('suggestion').value;

    if (date && suggestion) {
        fetch('https://script.google.com/macros/s/AKfycbwal5_WcY1VCzgNdEp0KHiPFIuFuAj2L2GhoLNinIerINw2b6U_Hjdsjh_mm7hMndcO/exec', {
            method: 'POST',
            mode: "no-cors", 
            cache: "no-cache",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ date, suggestion })
        })
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                document.getElementById('selectedDate').textContent = date;
                document.getElementById('selectedSuggestion').textContent = suggestion;
                document.getElementById('appointmentForm').style.display = 'none';
                document.getElementById('confirmation').style.display = 'block';
            } else {
                alert('Erro ao salvar os dados.');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao enviar os dados.');
        });
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
