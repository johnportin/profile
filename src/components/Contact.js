import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { TiWarningOutline } from "react-icons/ti";

export default function Contact() {
  const {
    register,
    getFieldState,
    handleSubmit,
    watch,
    formState,
    formState: { errors, touchedFields, isInvalid, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
    },
  });

  const [watchName, watchEmail, watchMessage] = watch([
    "name",
    "email",
    "message",
  ]);

  return (
    <section className="w-full flex flex-col items-center border border-cyan-900">
      <p className="text-3xl font-bold">Contact</p>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        className="
                flex flex-col p-4 space-y-4 w-full
            "
      >
        <div className="flex flex-col items-start justify-between border-b-2 border-slate-300 space-y-2">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
            placeholder="name"
            className="border-2 rounded-md"
          />
          <p className="text-red-500">
            {getFieldState("name").isTouched && watchName.length === 0 && (
              <p className="inline-flex items-center space-x-2 ">
                <TiWarningOutline /> <p>Name is required</p>
              </p>
            )}
            {errors.name && errors.name && watchName.length >= 1 && (
              <p className="inline-flex items-center space-x-2 ">
                <TiWarningOutline /> <p>{errors.name.message}</p>
              </p>
            )}
          </p>
        </div>
        <div className="flex flex-col items-start justify-between border-b-2 border-slate-300 space-y-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email", {
              required: true,
              minLength: {
                value: 5,
                message: "Email must be at least 5 characters",
              },
            })}
            placeholder="email@host.com"
            className="border-2 rounded-md"
          />
          <p className="text-red-500 ">
            {getFieldState("email").isTouched && watchEmail.length === 0 && (
              <p className="inline-flex items-center space-x-2 h-min-6">
                <TiWarningOutline /> <p>Email is required</p>
              </p>
            )}
            {errors.email && watchEmail.length != 0 && (
              <p className="inline-flex items-center space-x-2 h-min-6">
                <TiWarningOutline /> <p>{errors.email.message}</p>
              </p>
            )}
          </p>
        </div>
        <div className="flex flex-col items-start justify-between border-b-2 border-slate-300 space-y-2">
          <label htmlFor="message">Message</label>
          <textarea
            type="textarea"
            {...register("message", {
              required: true,
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
            })}
            placeholder="leave a message"
            className="border-2 rounded-md"
          />
          <p className="text-red-500 ">
            {getFieldState("message").isTouched &&
              watchMessage.length === 0 && (
                <p className="inline-flex items-center space-x-2 h-min-6">
                  <TiWarningOutline /> <p>Message is required</p>
                </p>
              )}
            {errors.message && watchMessage.length != 0 && (
              <p className="inline-flex items-center space-x-2 h-min-6">
                <TiWarningOutline /> <p>{errors.message.message}</p>
              </p>
            )}
          </p>
        </div>
      </form>
    </section>
  );
}
