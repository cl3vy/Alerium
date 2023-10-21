import * as z from "zod";

const userSchema = z.object({
  name: z.string().min(2, {
    message: "Your name must be at least 2 characters.",
  }),
  surname: z.string().min(2, {
    message: "Your surname must be at least 2 characters.",
  }),
  email: z.string().email("This is not a valid email."),
  phoneNumber: z.string().optional(),
  birthday: z.date(),
  hashPassword: z.string().min(8, {
    message: "Your password must be at least 8 characters.",
  }),
  repeatPassword: z.string(),
  gender: z.string(),
});

userSchema.refine(data => data.hashPassword === data.repeatPassword, {
  message: "Passwords must match",
  path: ['repeatPassword']
});


export default userSchema;




