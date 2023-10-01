export default function Home() {
  return (
    <div className="bg-zinc-300 flex justify-center items-center h-screen gap-40">
      <div className="flex  flex-col justify-center items-center h-64 w-64">
        <h1 className="text-4xl text-zinc-700">Create your account <br /> and make your day easier</h1>
      </div>

      <div className="background test flex justify-center items-center h-2.5/4 w-96 rounded-lg">

        <div className="flex flex-col gap-3 justify-center">
          <h2 className="textColor flex justify-center mt-8 mb-4 text-xl font-bold">create your account <br />below</h2>

          <div className="flex flex-col gap-1">
            <label htmlFor="">Your email</label>
            <input className="text-white h-12 w-80  inputs inputBackGround p-2 rounded-lg" type="text" placeholder="mark@live.com" />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="">Your Identity</label>
            <input className="h-12 inputs w-80 inputBackGround text-white p-2 rounded-lg" type="text" placeholder="xxx.xxx.xxx-xx" />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="">Full Name</label>
            <input className="text-white inputs h-12 w-80 inputBackGround p-2 rounded-lg" type="text" placeholder="Mark Wash" />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="">Password</label>
            <input className=" text-white inputs h-12 w-80 inputBackGround p-2 rounded-lg" type="password" placeholder="*********" />
          </div>
          <button className=" buttonBackground h-12 mt-1 rounded-lg buttonStyle textcolor text-2xl font-bold">Create Account</button>
          <a href="" className="text-slate-50 flex justify-center mt-6 mb-3">Already register?</a>
        </div>

      </div>
    </div>
  )
}







