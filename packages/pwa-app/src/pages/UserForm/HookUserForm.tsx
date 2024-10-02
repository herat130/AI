import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "ui-library";

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
}

export default function HookUserForm() {
  const { register, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      firstName: "bill",
      lastName: "luo",
      age: 24,
      gender: "male",
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form className="hook-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        {...register("firstName", { required: true, maxLength: 20 })}
      />
      <input
        type="text"
        {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
      />
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <Button type="submit" primary={true} label="UI LIB" />
    </form>
  );
}
