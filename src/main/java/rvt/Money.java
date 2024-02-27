package rvt;

public class Money {
    private final int euros;
    private final int cents;

    public Money(int euros, int cents) {
        this.euros = euros;
        this.cents = cents;
    }

    public int euros() {
        return euros;
    }

    public int cents() {
        return cents;
    }

    public String toString() {
        String zero = "";
        if (cents <= 10) {
            zero = "0";
        }

        return euros + "." + zero + cents + "e";
    } 


public Money plus(Money addition) {
    Money newMoney = new Money(euros + addition.euros, cents + addition.cents); 
    return newMoney; 
}

public Money minus(Money decreaser) {
    Money newMoney = new Money(euros - decreaser.euros, cents - decreaser.cents);
    return newMoney;
}

public boolean lessThan(Money compare) {
    if (euros + cents > compare.euros + compare.cents) {
        return true;
    } else {
        return false;
    }
    
}
}