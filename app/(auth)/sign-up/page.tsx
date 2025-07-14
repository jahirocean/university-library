"use client";

import React from "react";
import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validations";
import { signInWithCredentials } from "@/lib/actions/auth";
import { University } from "lucide-react";

const Page = () => (
  <AuthForm
    type="SIGN_UP"
    schema={signUpSchema}
    defaultValues={{
      email: "",
      password: "",
      fullName: "",
      universityId:0,
      universityCard: '',
    }}
    onSubmit={signInWithCredentials}
  />
);

export default Page;
