import { InputContainer } from './styles';

export const Input = ({value}) => {
    return (
        <div className="Input">
            <InputContainer>
                <input disabled value={value}/>
            </InputContainer>
            
        </div>
    );
}