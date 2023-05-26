const PostPage = () => {
  return (
    <main className="max-w-7xl mx-auto my-12 ">
      <div className="h-[80vh] flex flex-col justify-center items-center">
        <h1 className="text-xl">โปรดเข้าสู่ระบบ</h1>
        <br />
        <form
          action=""
          method="GET"
          className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              ชื่อผู้ใช้งาน
            </label>
            <input
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-end">
            <a
              className="font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              ลืมรหัสผ่าน?
            </a>
          </div>
          <div className="flex items-center justify-center mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
              type="submit"
            >
              เข้าสู่ระบบ
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default PostPage;
