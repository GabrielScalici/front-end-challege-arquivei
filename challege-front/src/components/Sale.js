export function sale( total, qnt_comprada ) {
    let sum = 0;

    if(total > 2000){
        return qnt_comprada * 0.24;
    } 

    if(total < 1000){
        let disponivel_primeira = 1000 - total;
        let primeira_promo = qnt_comprada - disponivel_primeira;
        if(primeira_promo <= 0){
            //COMPRA MENOR QUE A PRIMEIRA PROMOCAO
            sum += qnt_comprada * 0.09;
        }
        if(primeira_promo > 0){
            //USA A PRIMEIRA E VAI PARA A SEGUNDA
            sum += disponivel_primeira * 0.09;
            //let disponivel_segunda = 1000 - primeira_promo;
            let segunda_promo = qnt_comprada - disponivel_primeira - 1000;
            if(segunda_promo <= 0 ){
                //COMPRA MENORA QUE A SEGUNDA PROMOCAO
                sum += (qnt_comprada - disponivel_primeira) * 0.16;
            }
            if(segunda_promo > 0){
                //USA A SEGUNDA E VAI PARA O PRECO PADRAO
                sum += (qnt_comprada - primeira_promo) * 0.16;
                sum += (segunda_promo) * 0.24;
            }
        }
    }

    return sum;
}