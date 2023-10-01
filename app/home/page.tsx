import Image from "next/image";
import addProjects from "../public/images/addProject.svg"
import addExpense from "../public/images/addExpense.svg"
import consultProject from "../public/images/consultProjects.svg"
import consultExpense from "../public/images/consultExpenses.svg"

/* eslint-disable @next/next/no-img-element */
export default function UserHome() {
    return (

        <div className="container-hscreen w-screen mx-auto flex">
            <div className="flex  h-screen flex-col background py-4 px-3 rounded-md w-60">
                <div className="flex flex-row items-center p-2">
                    <img className="w-24 rounded-full"
                        ///vai ser substituido por img dinamica
                        src="https://media.licdn.com/dms/image/D4D03AQGM_Wa4yiHnZg/profile-displayphoto-shrink_800_800/0/1683580445507?e=2147483647&v=beta&t=-B4TTg6MNVBDvWcmCHPHE7oeqhC-6ubfhHoHZjSaXY8" alt="teste" />

                </div>


                <div className="flex flex-col ml-3">
                    <h3 className="font-semibold textColorSmall">Victor Rabello</h3>
                    <p className="font-extralight">Dev Full Stack</p>
                </div>


                <div className="flex flex-col justify-start items-start">

                    <div className="mt-10 ml-2 cursor-pointer rounded-xl flex flex-row items-center justify-start whitespace-nowrap transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-40 h-12 font-bold backgroundHover">
                        <Image
                            className="w-12 mr-2 rounded-full buttonBackground"
                            src={addProjects}
                            alt="Picture of the author"
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                        <a href="">Cadastrar Projetos</a>
                    </div>

                    <div className="mt-6 ml-2 cursor-pointer transition flex flex-row items-center justify-start whitespace-nowrap transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none rounded-xl w-40 h-12 font-bold backgroundHover">

                        <Image
                            className="w-12 mr-2 rounded-full buttonBackground"
                            src={addExpense}
                            alt="Picture of the author"
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />

                        <a href="">Cadastrar Despesas</a>
                    </div>

                    <div className="mt-6 ml-2 cursor-pointer whitespace-nowrap flex flex-row items-center justify-start transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none rounded-xl w-40 h-12  font-bold backgroundHover">

                        <Image
                            className="w-12 mr-2 rounded-full buttonBackground"
                            src={consultProject}
                            alt="Picture of the author"
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />

                        <a href="">Consultar Projetos</a>
                    </div>

                    <div className="mt-6 ml-2 mr-2 cursor-pointer transition whitespace-nowrap flex flex-row items-center justify-start transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none rounded-xl w-40 h-12  font-bold backgroundHover">

                        <Image
                            className="w-12 mr-2 rounded-full buttonBackground"
                            src={consultExpense}
                            alt="Picture of the author"
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />

                        <a href="">Consultar Despesas</a>



                    </div>

                </div>

            </div>
            <h1>Continuação da página....</h1>
        </div>

    )
}

