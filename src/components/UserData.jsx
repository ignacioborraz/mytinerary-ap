export default function Users({ user, show, setShow }) {
  return (
    <div className="w-[300px] h-full flex flex-col justify-center items-center bg-red-200 md:bg-white px-4">
      <p className="my-2 text-center">{user.name}</p>
      <p className="my-2 text-center">{user.lastName}</p>
      <p className="my-2 text-center">{user.country}</p>
      <img className="my-2" src={user.photo} />
      {show ? (
        <input
          type="button"
          className="w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
          value="Hide!"
          onClick={() => setShow(!show)}
        />
      ) : (
        <input
          type="button"
          className="w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
          value="Update!"
          onClick={() => setShow(!show)}
        />
      )}
    </div>
  );
}
