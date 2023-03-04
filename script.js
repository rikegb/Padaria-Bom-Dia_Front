function confirmar(){
    const dados = [
        {periodo: 'Julho', ingrediente_1: '21583,7969', ingrediente_2: '8656,02637', ingrediente_3: '8725,20703', ingrediente_4: '1547,53308', ingrediente_5 : '387,252472', ingrediente_6: '747,423706',total: '41472'},
        {periodo: 'Agosto', ingrediente_1: '56591,625', ingrediente_2: '33290,2539', ingrediente_3: '20700,8594', ingrediente_4: '9550,45703', ingrediente_5 : '1128,63867', ingrediente_6: '1940,92798', total: '122880'},
        {periodo: 'Setembro', ingrediente_1: '24973,9356', ingrediente_2: '3569,20321', ingrediente_3: '6843,39209', ingrediente_4: '461,224731', ingrediente_5 : '640,092529', ingrediente_6: '355,660156', total: '35854'},
        {periodo: 'Outubro', ingrediente_1: '44705,8613', ingrediente_2: '14272', ingrediente_3: '0', ingrediente_4: '451,41851', ingrediente_5 : '891,103546', ingrediente_6: '602,677307', total: '60669,535'},
        {periodo: 'Novembro', ingrediente_1: '130947,305', ingrediente_2: '42264,5039', ingrediente_3: '5583,98828', ingrediente_4: '379,58447', ingrediente_5 : '3215,87231', ingrediente_6: '1857,84778', total: '188406,14'},
        {periodo: 'Dezembro', ingrediente_1: '164811,563', ingrediente_2: '62776,75', ingrediente_3: '16101,2383', ingrediente_4: '10452,3672', ingrediente_5 : '4299,23486', ingrediente_6: '2586,17578', total: '260765,08'}
    ]
    let selecionar = document.getElementById('sel').value
    selel = selecionar.split('/')
    let sect = document.getElementById('hide')
    if(sect.style.display === "none"){
        sect.style.display = "block"
        let lugar = document.getElementById('res')
        if(selel[0] == 'Julho'){
            lugar.innerText = `Ingrediente 1: ${dados[0].ingrediente_1} 
            Ingrediente 2: ${dados[0].ingrediente_2} 
            Ingrediente 3: ${dados[0].ingrediente_3} 
            Ingrediente 4: ${dados[0].ingrediente_4}
            Ingrediente 5: ${dados[0].ingrediente_4} 
            Ingrediente 6: ${dados[0].ingrediente_6}
            Total: ${dados[0].total}`
        }else if(selel[0] == 'Agosto'){
            lugar.innerText = `Ingrediente 1: ${dados[1].ingrediente_1} 
            Ingrediente 2: ${dados[1].ingrediente_2} 
            Ingrediente 3: ${dados[1].ingrediente_3} 
            Ingrediente 4: ${dados[1].ingrediente_4}
            Ingrediente 5: ${dados[1].ingrediente_4} 
            Ingrediente 6: ${dados[1].ingrediente_6}
            Total: ${dados[1].total}`
        }else if(selel[0] == 'Setembro'){
            lugar.innerText = `Ingrediente 1: ${dados[2].ingrediente_1} 
            Ingrediente 2: ${dados[2].ingrediente_2} 
            Ingrediente 3: ${dados[2].ingrediente_3} 
            Ingrediente 4: ${dados[2].ingrediente_4}
            Ingrediente 5: ${dados[2].ingrediente_4} 
            Ingrediente 6: ${dados[2].ingrediente_6}
            Total: ${dados[2].total}`
        }
        else if(selel[0] == 'Outubro'){
            lugar.innerText = `Ingrediente 1: ${dados[2].ingrediente_1} 
            Ingrediente 2: ${dados[3].ingrediente_2} 
            Ingrediente 3: ${dados[3].ingrediente_3} 
            Ingrediente 4: ${dados[3].ingrediente_4}
            Ingrediente 5: ${dados[3].ingrediente_4} 
            Ingrediente 6: ${dados[3].ingrediente_6}
            Total: ${dados[3].total}`
        }
        else if(selel[0] == 'Novembro'){
            lugar.innerText = `Ingrediente 1: ${dados[2].ingrediente_1} 
            Ingrediente 2: ${dados[4].ingrediente_2} 
            Ingrediente 3: ${dados[4].ingrediente_3} 
            Ingrediente 4: ${dados[4].ingrediente_4}
            Ingrediente 5: ${dados[4].ingrediente_4} 
            Ingrediente 6: ${dados[4].ingrediente_6}
            Total: ${dados[4].total}`
        }
        else if(selel[0] == 'Dezembro'){
            lugar.innerText = `Ingrediente 1: ${dados[2].ingrediente_1} 
            Ingrediente 2: ${dados[5].ingrediente_2} 
            Ingrediente 3: ${dados[5].ingrediente_3} 
            Ingrediente 4: ${dados[5].ingrediente_4}
            Ingrediente 5: ${dados[5].ingrediente_4} 
            Ingrediente 6: ${dados[5].ingrediente_6}
            Total: ${dados[5].total}`
        }
    }else{
        sect.style.display = "none"
    }
    
}