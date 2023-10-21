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
  password: z.string().min(8, {
    message: "Your password must be at least 8 characters.",
  }),
}).and(
  z.object({
    repeatPassword: z.string().refine(function (this: { password?: string }, val) {
      if(this.password) return val === this.password
      else return false;
    }, {
      message: "Passwords must match",
    }),
  })
);
export default userSchema;




