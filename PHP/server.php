<?php
   
    header("Access-Control-Allow-Origin: http://localhost:3000");
    $firstOperand = $_POST['firstOperand'];
    $secondOperand = $_POST['secondOperand'];
    $operator = $_POST['operator'];
    
   
    //check the operator and perform mathematical operations
    if($operator == 'plus'){
        $result = $firstOperand + $secondOperand;
        echo("Addition of $firstOperand and $secondOperand is: ");
    }
    if($operator == 'minus'){
        $result = $firstOperand - $secondOperand;
        echo("Subtraction of $firstOperand and $secondOperand is: ");
    }
    if($operator == 'multiply'){
        $result = $firstOperand * $secondOperand;
        echo("Multiplication of $firstOperand and $secondOperand is: ");
    }
    if($operator == 'division'){
        $result = $firstOperand / $secondOperand;
        echo("Division of $firstOperand and $secondOperand is: ");
    }
    
    //will show result upto two decimal points
    $result = number_format($result,2);
    
    echo($result);
   
?>