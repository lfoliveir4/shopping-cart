import React from "react";
import MaskedInput from "react-text-mask";

import apiFreight from "~/services/apiFreight";

const CepInputText = (props) => {
  const onChange = (e) => {
    if (e.target.value.length === 9) {
      var cep = e.target.value;
      getData(cep);
    }
  };

  const getData = async (cep) => {
    try {
      const response = await apiFreight.get(`freight/1`);
      props.onSuccess(response.data);
    } catch (error) {
      console.log({ error: error });
    }
  };

  return (
    <MaskedInput
      {...props}
      guide={false}
      mask={[/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/]}
      type="text"
      placeholder={props.placeholder ? props.placeholder : "Digite o cep"}
      onChange={(e) => onChange(e)}
    />
  );
};

export default CepInputText;
