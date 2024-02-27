import {DataTableDemo} from "@/components/atoms/data-table.tsx";
import {Payment} from "@/types/types";
import {useState} from "react";
import {Button} from "@/components/ui/button.tsx";
import Sidebar from "@/components/atoms/sidebar.tsx";

const data: Payment[] = [
    {
        id: "m5gr84i9",
        amount: 316,
        status: "success",
        email: "ken99@yahoo.com",
    },
    {
        id: "3u1reuv4",
        amount: 242,
        status: "success",
        email: "Abe45@gmail.com",
    },
    {
        id: "derv1ws0",
        amount: 837,
        status: "processing",
        email: "Monserrat44@gmail.com",
    },
    {
        id: "5kma53ae",
        amount: 874,
        status: "success",
        email: "Silas22@gmail.com",
    },
    {
        id: "bhqecj4p",
        amount: 721,
        status: "failed",
        email: "carmella@hotmail.com",
    },
]

const data2: Payment[] = []


function App() {
    const [dataA, setDataA] = useState(data)
    const [dataB, setDataB] = useState(data2)


    const [toTransferData, setToTransferData] = useState<{[key: number]: boolean}>()

    const transferData = (tempData: any) => {
        setToTransferData(tempData)
    }

    const buttonHandler = () => {
        if (toTransferData) {
           const newDataB = dataA.filter((_value, index) => index in toTransferData)
           const newDataA = dataA.filter((_value, index) => !(index in toTransferData))
            setDataA(newDataA)
            setDataB(newDataB)
        }
    }

    return (
        <div className="flex max-h-screen bg-gray-100">
            <Sidebar/>
                <main className={"flex-1 mx-8 my-6 border px-3 py-2"}>
                    <DataTableDemo data={dataA} transferData={transferData}/>
                    <Button onClick={buttonHandler}>Add</Button>
                    <DataTableDemo data={dataB} transferData={transferData}/>
                </main>
        </div>
    )
}

export default App
