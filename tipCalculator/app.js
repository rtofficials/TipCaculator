class Calculator {
    constructor(_bill, _percentage, _people) {
        this.bill = _bill ;
        this.percentage = _percentage;
        this.people = _people;
    }
    get tipPP(){
        return this.tipPerPerson();
    }

    tipPerPerson(){
        let tpp = this.bill * (this._percentage/100)/ 2;
        return tpp;
    }

}

class Total{
    constructor(_tipper, _people, _bill){
        this.tipper = _tipper;
        this.people = _people;
        this.bill = _bill;
    }

    get totalPP(){
        return this.totalPerPerson();
    }

    totalPerPerson(){
        let totpp = this.bill * (this._percentage/100)+bill;
        return totpp;
    }
}

function myFuntion(){
    const bill = document.getElementByName("bill").value;
    const tipPercentage = document.getElementByName("tip-percent").value;
    const people = document.getElementByName("people").value;
    let tipper = new Tip(bill, tipPercentage, people);
    let totaler = new Total(tipper, people, bill);
    let tpp = document.getElementById("tip-per-person") ;
    let totpp = document.getElementById("total-per-person");
    tpp.innerHTML += tipper.tipPP;
    totpp.innerHTML += totaler.totalPP;
}