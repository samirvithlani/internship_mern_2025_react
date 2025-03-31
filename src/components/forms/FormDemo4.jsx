import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

export const FormDemo4 = () => {
  const { register, handleSubmit } = useForm();
  const state =  useSelector((state)=>state)

  const submitHandler = (data) => {
    console.log(data)
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>BALACNE  ={state.bank.balance}</h1>
      <h1>FOOD</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>FoodName</label>
          <input type="text" {...register("fName")}></input>
        </div>
        <div>
            <label>veg-nonveg</label>
            VEG : <input type="radio" {...register("vegnonveg")} name="vegnonveg" value="veg"></input>
            NON-VEG : <input type="radio" {...register("vegnonveg")} name="vegnonveg" value="nonveg"></input>
        </div>
        <div>
            <label>Food-type</label>
            indian : <input type="checkbox" name="ftype" {...register("ftype")} value="indian"></input>
            kathiyvad : <input type="checkbox" name="ftype" {...register("ftype")} value="kathiyavad"></input>
            north : <input type="checkbox" name="ftype" {...register("ftype")} value="north"></input>
            west : <input type="checkbox" name="ftype" {...register("ftype")} value="west"></input>
        </div>
        <div>
            <input type="submit" value="order"></input>
        </div>
      </form>
    </div>
  );
};
