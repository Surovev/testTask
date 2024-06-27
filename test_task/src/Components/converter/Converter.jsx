import { observer } from "mobx-react-lite"
import Input from "../input/Input"
import converter from "../../shared/store/converter"

export const Converter = observer(() => {

   const handleChange = (e, callBack) => {
      const { value } = e.target;
      callBack(value);
   };

   return (
      <div className="converter">
         <Input currency={'USD'} value={converter.USD} callBack={converter.inputUSD} handleChange={handleChange}></Input>
         <Input currency={'EUR'} value={converter.EUR} callBack={converter.inputEUR} handleChange={handleChange}></Input>
      </div>
   )
})

export default Converter
