import Image from 'next/image'

export default function Home() {
  return (
    <main className="max-w-4xl m-auto">
      <h1 className="text-3xl my-10">Cars</h1>
      <form action ="/create-car" method="Post">
        <input 
          type="text"
          name="name"
          placeholder='Name'
          className="border border-gray-300 p-2 rounded-md"
        />
        <button type="submit" />
      </form>
    </main>
    )
}
