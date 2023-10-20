import * as z from "zod";

 const userSchema = z.object({
  name: z.string().min(2, {
    message: "Your name must be at least 2 characters.",
  }),
  surname: z.string().min(2, {
    message: "Your surname must be at least 2 characters.",
  }),
  email: z.string().email("This is not a valid email."),
  phoneNumber: z.string(),
  birthday: z.date(),
});
export default userSchema;
