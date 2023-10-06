import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import Image from 'next/image'

//this method allows you to accomplish things with forms even with client-side Javascript disabled.
//in next JS, you can just pass a function into the form action
//this is a very new feature in Next, however, so you need to go directly to next.config.js
//inside, you need to change nextConfig

const cars: string[] = []

async function createCar(data: FormData) {
  //this function triggers inside the backend console, rather than the client's
  "use server"
  // formData class
  console.log("car name", data.get("car-name"))
  cars.push(data.get("car-name") as string)

  //refresh the cache
  revalidatePath("/")
  //less control than when we handled routes with Express, but we still have enough control to generally do what we want to do
  //redirect("/car")

}

export default function Home() {

  return (
    <main className="max-w-4xl m-auto">
      <h1 className="text-3xl my-10">Cars</h1>
      {JSON.stringify(cars)}
      <form action ={createCar} >
        <input 
          type="text"
          name="car-name"
          placeholder='Name'
          className="border border-gray-300 p-2 rounded-md w-full mb-5"
        />
        <button type="submit">Create</button>
      </form>
    </main>
    )
}
