import Header from "../components/ui/Header";
import StepsControl from "../components/ui/StepsControl";
import Input from "../components/userInfo/Input";
import useFormik from "../hook/useFormik";

export default function UserInfo() {
  const myFormik = useFormik();

  return (
    <section className=" h-full flex flex-col">
      <Header
        head="Personal info"
        text="Please provide tour name, email address, and phone number."
      />

      <form className="space-y-6" onSubmit={myFormik.handleSubmit}>
        <Input
          isFor="name"
          placeholder="e.g. Stephane King"
          formik={myFormik}
        />

        <Input
          isFor="email"
          placeholder="e.g. stephane@gmail.com"
          formik={myFormik}
        />

        <Input
          isFor="phone"
          placeholder="e.g. +1 234 567 890"
          formik={myFormik}
        />
      </form>
      <StepsControl myFormik={myFormik} />
    </section>
  );
}
