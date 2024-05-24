document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let date = document.getElementById('date').value;
    let suggestion = document.getElementById('suggestion').value;

    if (date && suggestion) {
        let redirectUrl = '';

        // Verifica o dia selecionado e define o URL de redirecionamento correspondente
        switch (date) {
            case '30/05':
                redirectUrl = 'https://api.whatsapp.com/send?phone=+5519971010084&text=Ol%C3%A1%2C+ap%C3%B3s+uma+grande+analise%2C+concordo+em+lhe+conceder+a+oportunidade+de+estar+em+minha+presen%C3%A7a+no+dia+30%2F05+e+sugiro+' + suggestion;
                break;
            case '31/05':
                redirectUrl = 'https://api.whatsapp.com/send?phone=+5519971010084&text=Ol%C3%A1%2C+ap%C3%B3s+uma+grande+analise%2C+concordo+em+lhe+conceder+a+oportunidade+de+estar+em+minha+presen%C3%A7a+no+dia+31%2F05+e+sugiro+' + suggestion;
                break;
            case '01/06':
                redirectUrl = 'https://api.whatsapp.com/send?phone=+5519971010084&text=Ol%C3%A1%2C+ap%C3%B3s+uma+grande+analise%2C+concordo+em+lhe+conceder+a+oportunidade+de+estar+em+minha+presen%C3%A7a+no+dia+01%2F06+e+sugiro+' + suggestion;
                break;
            case '02/06':
                redirectUrl = 'https://api.whatsapp.com/send?phone=+5519971010084&text=Ol%C3%A1%2C+ap%C3%B3s+uma+grande+analise%2C+concordo+em+lhe+conceder+a+oportunidade+de+estar+em+minha+presen%C3%A7a+no+dia+02%2F06+e+sugiro+' + suggestion;
                break;
        }

        // Redireciona o usuário para o URL correspondente
        window.location.href = redirectUrl;
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
