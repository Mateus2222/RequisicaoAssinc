let cep = "01001000"; // Substitua por seu CEP

let cepPlace = document.querySelector('#cep');



document.addEventListener('keyup', e => {
    if (e.keyCode == '13') {

        let cep = cepPlace.value

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json()).then(data => {
                document.querySelector('#cep').classList = '' 
                document.querySelector('#cepError').classList = 'hidden'
                document.querySelector('#street').value = data.logradouro
                document.querySelector('#neighborhood').value = data.bairro
                document.querySelector('#state').value = data.uf
                document.querySelector('#city').value = data.localidade

            }).catch(error => {
                    document.querySelector('#cep').classList = 'input-cep-error'
                    document.querySelector('#cepError').classList = ''
                    document.querySelector('#street').value = ''
                    document.querySelector('#neighborhood').value = ''
                    document.querySelector('#state').value = ''
                    document.querySelector('#city').value = ''
            })
    }


})

