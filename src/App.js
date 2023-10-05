import {Container, Content, Row} from './styles'
import {Input} from './components/Input'
import {Button} from './components/Buttons';
import {useState } from 'react';

function App() {
  const [currentNumber, setCurrentNumber] = useState('0'); 
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  
  
  const handlerEquals = () => {
      if (!firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
          break;
          case '-':
            handleSubtractionNumbers();
            break;
          case '/':
            handleDivideNumbers();
            break; 
          case 'X':
            handleMultiNumbers();
            break;   
          default:
            break;  
      }
    }
  }

  const handleSumNumbers = () => {
    setOperation('+');
    const auxNumber = currentNumber;
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber(`${currentNumber + operation}`);
      
    } else {
      setCurrentNumber(auxNumber);
      const somaAuxiliar = auxNumber.split('+');
      const result = Number(somaAuxiliar[0])+Number(somaAuxiliar[1]);
      setCurrentNumber(result);
    }
  }

  const handleSubtractionNumbers = () => {
    const auxNumber = currentNumber;
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber(`${currentNumber + operation}`);
      setOperation('-');
    } else {
      setCurrentNumber(auxNumber);
      const somaAuxiliar = auxNumber.split('-');
      const result = Number(somaAuxiliar[0])-Number(somaAuxiliar[1]);
      setCurrentNumber(result);
    }
  }

  const handleDivideNumbers = () => {
    const auxNumber = currentNumber;
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber(`${currentNumber + operation}`);
      setOperation('/');
    } else {
      setCurrentNumber(auxNumber);
      const somaAuxiliar = auxNumber.split('/');
      const result = Number(somaAuxiliar[0])/Number(somaAuxiliar[1]);
      setCurrentNumber(result);
    }
  }

  const handleMultiNumbers = () => {
    const auxNumber = currentNumber;
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber(`${currentNumber + operation}`);
      setOperation('X');
    } else {
      setCurrentNumber(auxNumber);
      const somaAuxiliar = auxNumber.split('X');
      const result = Number(somaAuxiliar[0])*Number(somaAuxiliar[1]);
      setCurrentNumber(result);
    }
  }
  
  
  const handlerAppNumber = (num) => {
    setCurrentNumber(prev =>`${prev === '0' ? '' : prev}${num}`);
  }

  const handlerOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
  }
  
  return (
      <Container>
          <Content>
            <Input value={currentNumber} />
            <Row>
              <Button label="X" onClick={() => handleMultiNumbers()} />
              <Button label="/" onClick={() => handleDivideNumbers()} />
              <Button label="C" onClick={() => handlerOnClear()} />
              <Button label="=" onClick={() => handlerEquals()} />
            </Row>
            <Row>
              <Button label="7" onClick={() => handlerAppNumber('7')} />
              <Button label="8" onClick={() => handlerAppNumber('8')} />
              <Button label="9" onClick={() => handlerAppNumber('9')} />
              <Button label="-" onClick={() => handleSubtractionNumbers()} />
            </Row>
            <Row>
              <Button label="4" onClick={() => handlerAppNumber('4')} />
              <Button label="5" onClick={() => handlerAppNumber('5')} />
              <Button label="6" onClick={() => handlerAppNumber('6')} />
              <Button label="+" onClick={() => handleSumNumbers()} />
            </Row>
            <Row>
              <Button label="1" onClick={() => handlerAppNumber('1')} />
              <Button label="2" onClick={() => handlerAppNumber('2')} />
              <Button label="3" onClick={() => handlerAppNumber('3')} />
              <Button label="0" onClick={() => handlerAppNumber('0')} />
            </Row>
          </Content>
      </Container>
  );
}

export default App;
