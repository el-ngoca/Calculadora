import {Container, Content, Row} from "./styles"
import Button from "./componentes/Button";
import Input from "./componentes/Input/Input";
import { useState } from "react";


const  App = () => {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('')

  const HandleAddNumber = (num) => {

    setCurrentNumber (prev => `${prev === '0' ? "" : prev}${num}`)
  }

  const HandleClear= () => {
    setCurrentNumber ('0')
    setFirstNumber ('0')
    setOperation('')
  }
  const HandleSum = () => {
    if(firstNumber === '0'){
      setFirstNumber(String (currentNumber)) 
      setCurrentNumber('0')
    } else {
        setCurrentNumber(Number(currentNumber) + Number(firstNumber))
        setFirstNumber('0')
        
    }
    setOperation('+')
  }

  const HandleSub = () => {
    if(firstNumber === '0'){
      setFirstNumber(String (currentNumber)) 
      setCurrentNumber('0')
    } else {
        setCurrentNumber(Number(firstNumber) - Number(currentNumber))
        setFirstNumber('0')
        
    }
    setOperation('-')
  }
    
  const Handlediv = () => {
    if(firstNumber === '0'){
      setFirstNumber(String (currentNumber)) 
      setCurrentNumber('0')
    } else {
        setCurrentNumber(Number(firstNumber) / Number(currentNumber))
        setFirstNumber('0')
        
    }
    setOperation('/')
  }

  const HandleMult = () => {
    if(firstNumber === '0'){
      setFirstNumber(String (currentNumber)) 
      setCurrentNumber('0')
    } else {
        setCurrentNumber(Number(currentNumber) * Number(firstNumber))
        setFirstNumber('0')
       
    }
    setOperation('x')
  }

  const HandleIqual = () => {
    if(firstNumber !== '0' && currentNumber !== '0' && operation !== '')
    {
      switch (operation) {
        case '+':
          HandleSum();
          
          break;
          case '-':
            HandleSub();
            
            break;
          case 'x':
            HandleMult();
            
            break;
          case '/':
            Handlediv();
            
            break;
        
      
        default:
          break;
      }
    }
  }

  
 
  return (
    <Container >
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="7" onClick={() => HandleAddNumber('7')} />
          <Button label="8" onClick={()=> HandleAddNumber('8')}/>
          <Button label="9" onClick={() => HandleAddNumber('9')}/>
          <Button label="x" onClick={HandleMult}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => HandleAddNumber('4')} />
          <Button label="5" onClick={() => HandleAddNumber('5')}/>
          <Button label="6" onClick={() => HandleAddNumber('6')}/>
          <Button label={"-"} onClick={HandleSub}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => HandleAddNumber('1')}/>
          <Button label="2" onClick={() => HandleAddNumber('2')}/>
          <Button label="3" onClick={() => HandleAddNumber('3')}/>
          <Button label={"+"} onClick={HandleSum}/>
        </Row>
        <Row>
          <Button label={"C"}  onClick={HandleClear}/>
          <Button label="0" onClick={() => HandleAddNumber('0')}/>
          <Button label={"="} onClick={HandleIqual}/>
          <Button label={"/"} onClick={Handlediv}/>
        </Row>
        
        
      </Content> 
    
    </Container>   
   
  );
}

export default App;
