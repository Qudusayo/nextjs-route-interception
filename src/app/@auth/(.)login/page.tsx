"use client";

import { LoginInput } from "@/components/AuthInputs";
import Modal from "@/components/Modal";
import React from "react";

export default function Login() {
  return (
    <Modal>
      <LoginInput />
    </Modal>
  );
}
