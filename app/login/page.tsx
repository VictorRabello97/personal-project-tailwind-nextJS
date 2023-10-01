export default function Login() {
    return (
      <div className="bg-zinc-300 flex justify-center items-center h-screen gap-40">
        <div className="flex  flex-col justify-center items-center h-64 w-64">
          <h1 className="text-4xl text-zinc-700">Welcome <br /> back</h1>
        </div>
  
        <div className="background test flex justify-center items-center h-12/12 w-5/12 rounded-lg">
  
          <div className="flex flex-col gap-3 justify-center">
            <h2 className="textColor flex justify-center mt-8 mb-4 text-xl font-bold">login</h2>
  
            <div className="flex flex-col gap-1">
            <input className="text-white h-12 w-96  inputs inputBackGround p-2 rounded-lg" type="text" placeholder="mark@live.com" />
            </div>
  
            <div className="flex flex-col gap-1">
              <input className="h-12 inputs w-96 inputBackGround text-white p-2 rounded-lg" type="password" placeholder="*********" />
            </div>
  
            <button className=" buttonBackground h-12 mt-3 rounded-lg buttonStyle textcolor text-2xl font-bold">Enter</button>
            <a href="" className="text-slate-50 flex justify-center mt-6 mb-3">new user? click here</a>
          </div>
  
        </div>
      </div>
    )
  }
  
  
  
  
  
  
  
  