import { ShoppingBag } from "lucide-react"


const Shop = () =>{
    return(
        <div id="shop" className="bg-slate-900/50 p-8 rounded-2xl border border-dashed border-slate-700 flex flex-col items-center text-center justify-center">
          <ShoppingBag className="text-blue-500 mb-4" size={48} />
          <h4 className="text-xl font-bold text-white mb-2">Marketplace de Templates</h4>
          <p className="text-sm text-gray-500 mb-6">
            Je prépare une collection de templates React/Laravel optimisés pour le marché Fintech et SaaS.
          </p>
          <span className="px-4 py-1 bg-blue-500/10 text-blue-500 text-xs font-mono rounded-full border border-blue-500/20">
            Lancement prochainement
          </span>
        </div>
    )
};

export default Shop;