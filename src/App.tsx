import DefaultLayout from "./Layouts/DefaultLayout"

export const App = () =>{
    return(
        <DefaultLayout>
            <div className="p-4">
                <h1 className="text-2xl">Nome categoria</h1>
                <div className="mt-2">
                    primeira lista
                </div>
            </div>
        </DefaultLayout>
    )
}