<?php
    //header('Access-Control-Allow-Origin: http://localhost:3000/');
    header("Access-Control-Allow-Origin: http://localhost:3000");
    $firstOperand = $_POST['firstOperand'];
    $secondOperand = $_POST['secondOperand'];
    $operator = $_POST['operator'];
    echo ("First operand: $firstOperand ");
    echo ("Second operand: $secondOperand ");
    echo ("Operator: $operator");
    
   
    if($operator == 'plus'){
        $result = $firstOperand + $secondOperand;
    }
    if($operator == 'minus'){
        $result = $firstOperand - $secondOperand;

    }
    if($operator == 'multiply'){
        $result = $firstOperand * $secondOperand;
    }
    if($operator == 'division'){
        $result = $firstOperand / $secondOperand;
    }
    $result = number_format($result,2);
    echo("Result: $result");
   
?>