function calculate1(amount,rate,years){
    var p = parseInt(amount);
    var r = parseFloat(rate);
    var n = parseInt(years);

    var monthly_interest = r/12/100;

    var months = n*12;

    var x = Math.pow(1+monthly_interest, months);
    var monthly = (p * x * monthly_interest) / (x-1);

    var emi = monthly.toFixed(2);

    var totalPayment = (emi * months).toFixed(2);
    var totalInterest= (totalPayment-p).toFixed(2);

    document.getElementById("demo").innerHTML="Loan EMI :" + "<b>" + emi + " Rs" + "</b>" + "<br>" + "Totl Interest Payable :" + "<b>" + totalInterest + " Rs" +  "</b>" + "<br>" + "Total Payment :" + "<b>" + totalPayment +" Rs" + "</b>";
}