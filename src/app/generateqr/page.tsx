'use client'

import React, {useState} from "react";
import Router from "next/navigation";
import LegoInput from "@/components/qrsearch/LegoInput";

export default function Page() {
    const useRouter = Router.useRouter();
    const [code, setCode] = useState('');

    const codeHandler = (code: string) => {

        // This is a mock function to simulate the behavior of the real function
        useRouter.push(`/character-editor`);
        return console.log(code);
    }

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-[url(/bg-qrSearch.png)] bg-bottom bg-no-repeat">
            <div className="p-8 gap-4 flex flex-col items-center justify-center rounded-2xl bg-whitesac">
                <h1 className="text-2xl font-bold">¿Cuál es tu expediente?</h1>
                <LegoInput value={code} onChange={setCode} maxLength={6} />
                <div className="w-full text-end">
                    <button
                        type="button"
                        className={`w-full md:w-fit bg-blue-400 py-2 px-6 font-bold text-lg text-white rounded-2xl transition-all
                            ${code.length === 6
                                ? 'cursor-pointer hover:scale-105'
                                : 'cursor-not-allowed opacity-50'
                            }`}
                        onClick={() => codeHandler(code)}
                        disabled={code.length !== 6}
                    >
                        Buscar
                    </button>
                </div>
            </div>
        </div>
    );
}