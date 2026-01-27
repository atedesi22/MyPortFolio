import { Download, Mail } from "lucide-react";



const Contact = () =>{
    return(
        <>
            <div id='contact'>
                <h3 className="text-3xl font-bold text-white mb-6">Prêt à collaborer ?</h3>
                <p className="text-gray-400 mb-8">
                    Que ce soit pour une opportunité locale, etrangere, une mission freelance ou juste pour discuter tech, ma boîte mail est ouverte.
                </p>
                <div className="flex flex-col gap-4">
                    <a href="mailto:boholepaul@icloud.com" className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors">
                    <Mail size={20} /> boholepaul@icloud.com
                    </a>
                    <a href="/CV_Atedesi.pdf" download className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white w-fit px-6 py-3 rounded-4xl transition-all">
                    <Download size={20} /> Télécharger mon CV (PDF)
                    </a>
                </div>
            </div>
        </>
    )
}

export default Contact;