import React, { useEffect, useState } from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../user/userAction";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const { admin } = useSelector((state) => state.adminInfo);

  useEffect(() => {
    //

    admin?.uid && navigate("/dashboard");
  }, [admin, navigate]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSUbmit = async (e) => {
    try {
      e.preventDefault();

      const { email, password } = form;
      //process to check auth user
      const pendingResp = signInWithEmailAndPassword(auth, email, password);

      toast.promise(pendingResp, {
        pending: "Please wait ..... ",
      });

      const { user } = await pendingResp;

      if (user?.uid) {
        toast.success("Logged in successfully, redirecting to dashboard");

        //fetch user from users database via userAction file
        dispatch(getUserAction(user?.uid));
      }
    } catch (error) {
      console.log(error);
      let msg = error.message;

      if (msg.includes("auth/user-not-found")) {
        msg = "Wrong credentials";
      }
      toast.error(msg);
    }
  };

  const inputs = [
    {
      lable: "Email",
      name: "email",
      type: "emial",
      placeholder: "Smith@smith.com",
      required: true,
    },
    {
      lable: "Password",
      name: "password",
      type: "password",
      placeholder: "xxxxxxxxx",
      required: true,
    },
  ];

  return (
    <DefaultLayout>
      <div className="admin-form border p-3 shadow-lg rounded">
        <Form onSubmit={handleOnSUbmit}>
          <h1>Admin Login Only </h1>
          <hr />

          {inputs.map((item, i) => (
            <CustomInput {...item} onChange={handleOnChange} />
          ))}

          <p className="d-grid">
            <Button variant="dark" type="submit">
              Login
            </Button>
          </p>
        </Form>
      </div>
    </DefaultLayout>
  );
};

export default Login;
