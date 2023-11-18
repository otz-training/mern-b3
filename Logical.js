/*
    Logical Operator :

    - These are used to check whether two operands logically correct or not.

    - These opertors generally used to combine more than one relational expression.

    - There are following type of logical Operators

      1. Logical AND &&

      2. Logical OR ||

      3. Logical Not !

    - Logical AND && :

      -> Truth Table :

      x       y      x && y
     ----     ---    ---------
     false   false       false
     
     false   true        false

     true    false       false

     true    true        true

     -> Example:

        let res =  (4<5) && (7<5);
        console.log(res);//false
    
    - Logical OR || :

      -> Truth Table :

      x       y         x || y
     ----     ---      ---------
     false   false       false
     
     false   true        true

     true    false       true

     true    true        true

     -> Example:

        let res =  (4<5) || (7<5);
        console.log(res);//true
    
    - Logical NOT ! : (Unary)

      -> Truth Table :

      x        !x      
     ----     ---     
     false    true     
     
     true    false        

      

    

     -> Example:

        let res =  !(4<5);
        console.log(res);//false
*/
let res = 4 < 5 && 7 < 5;
console.log(res);
