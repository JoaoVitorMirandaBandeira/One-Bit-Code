class Reservation{
    constructor(guests, room, days, premium = false){
        this.guests = guests
        this.room = room
        this.days = days
        this.total = days * (premium === true ? Reservation.baseFeePremium : Reservation.baseFee)     
    }
    
    static baseFee = 150
    static baseFeePremium = Reservation.baseFee * 2

    static returnBaseFee(){
        console.log(Reservation.baseFee)
    }
    static returnBaseFeePremium(){
        console.log(Reservation.baseFeePremium)
    }
}

Reservation.returnBaseFee();

const quarto = new Reservation(3, "201",2)
console.log(quarto)

const quartoPremium = new Reservation(3, "202",3, true)
console.log(quartoPremium)