import { useForm } from "react-hook-form";

function Next() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  
  async function  onSubmit  (data)  {
    await new Promise((resolve) => setTimeout(resolve, 5000))
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First name</label>
          <input {...register('firstName', {required: true, minLength: 3})} />
          {errors.firstName && <p>fytfy</p>}
        </div>
        <div>
          <label>Middle name</label>
          <input {...register("middleName")} />
        </div>
        <div>
          <label>Last name</label>
          <input 
  {...register("lastName", {
    pattern: {
      value: /^[A-Za-z]+$/,
      message: "Last name must contain only letters"
    },
    required: "Last name is required"
  })}
/>
{errors.lastName && <p style={{ color: 'red' }}>{errors.lastName.message}</p>}

        </div>
        <input type="submit" />
      </form>
    </>
  );
}

export default Next;
