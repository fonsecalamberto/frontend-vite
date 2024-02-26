import {DataTableDemo} from "@/components/atoms/data-table.tsx";
import {Payment} from "@/types/types";
import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button.tsx";

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

const data2: Payment[] =[

]


function App() {
    const [dataA, setDataA] = useState(data)
    const [dataB, setDataB] = useState(data2)


    const [toTransferData, setToTransferData] = useState()

    const transferData = (tempData: any) => {
        // console.log(toTransferData)
        setToTransferData(tempData)
    }
    console.log(toTransferData)
    const buttonHandler = () => {
        console.log(toTransferData)
    }

  return (
    <div className={"flex flex-col p-10 items-center container"}>
      <DataTableDemo data={dataA} setTransferData={transferData}/>
        <Button onClick={buttonHandler}>Add</Button>
      <DataTableDemo data={dataB} setTransferData={transferData}/>

    </div>
  )
}

export default App
