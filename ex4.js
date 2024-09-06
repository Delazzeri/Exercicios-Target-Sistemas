let faturamento = [
    sp = Number(67.836,43),
    rj = Number(36.678,66),
    mg = Number(29.229,88),
    es = Number(27.165,48),
    outros = Number(19.849,53)
    ]
    
    total = sp + rj + mg + es + outros
    
    let percent = [
        'SP = '+ (sp/total).toFixed(2) + '%',
        'RJ = '+ (rj/total).toFixed(2) + '%', 
        'MG = '+ (mg/total).toFixed(2) + '%', 
        'ES = '+ (es/total).toFixed(2) + '%', 
        'Outros = '+ (outros/total).toFixed(2) + '%', 
    ]
    
    console.log(percent)