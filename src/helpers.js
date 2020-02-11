
export const ColorBudget  = (budget, remaining) => {
    let clase;




    if((budget / budget) > remaining){
        clase = 'alert alert-danger-d';
    }
    else if( ( budget / 4) > remaining){
        clase = 'alert alert-danger';
    } else if ((budget / 2) > remaining){
        clase ='alert alert-warning';
    }else{
        clase = 'alert alert-success';
    }

    return clase;
}
